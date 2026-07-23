import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import sessions from "./routes/sessions";
import { sentry } from "@sentry/hono/bun";
import * as Sentry from "@sentry/hono/bun";
import chat from "./routes/chat";
import auth from "./routes/auth";
import { requireAuth } from "./middleware/require-auth";
import billing from "./routes/billing";

const app = new Hono();

app.use(
  sentry(app, {
    dsn: "https://5d8ced03ec669bc02a347e585c3e8a08@o4509735316815872.ingest.us.sentry.io/4511698371608576",
    tracesSampleRate: 1.0,
    enableLogs: true,
    sendDefaultPii: true,
  }),
);

app.get("/debug-sentry", () => {
  // Send a log before throwing the error
  Sentry.logger.info("User triggered test error", {
    action: "test_error_endpoint",
  });
  // Send a test metric before throwing the error
  Sentry.metrics.count("test_counter", 1);
  throw new Error("My first Sentry error!");
});

// app.onError((error, c) => {
//   if (error instanceof HTTPException) {
//     Sentry.logger.warn("Handled HTTP error", {
//       status: error.status,
//       message: error.message || "Request failed",
//       path: c.req.path,
//       method: c.req.method,
//     });
//     return c.json(
//       {
//         error: error.message || "Request failed",
//       },
//       error.status,
//     );
//   }

//   Sentry.logger.error("Unhandled Server error", {
//     path: c.req.path,
//     method: c.req.method,
//     message: error instanceof Error ? error.message : "Unknown error",
//   });

//   return c.json({ error: "Internal server error" }, 500);
// });

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    Sentry.logger.warn("Handled HTTP error", {
      status: error.status,
      message: error.message || "Request failed",
      path: c.req.path,
      method: c.req.method,
    });
    return c.json(
      {
        error: error.message || "Request failed",
      },
      error.status,
    );
  }

  // Send the real exception object to Sentry (not just a text summary) so you get a stack trace
  Sentry.captureException(error, {
    tags: { path: c.req.path, method: c.req.method },
  });

  // Full stack trace in Railway's own logs too
  console.error("Unhandled server error:", error);

  // TEMPORARY: return the real error to the client so you can see it without digging through Sentry/Railway.
  // Remove this before shipping to real users - leaking stack traces/messages to clients is a security risk.
  return c.json(
    {
      error: "Internal server error",
      debug_message: error instanceof Error ? error.message : String(error),
      debug_stack: error instanceof Error ? error.stack : undefined,
    },
    500,
  );
});

app.use("/sessions/*", requireAuth);
app.use("/chat/*", requireAuth);
app.use("/billing/checkout", requireAuth);
app.use("/billing/portal", requireAuth);

const routes = app
  .route("/auth", auth)
  .route("/billing", billing)
  .route("/sessions", sessions)
  .route("/chat", chat);
export type AppType = typeof routes;

export default { port: 3000, fetch: app.fetch, idleTimeout: 255 };
