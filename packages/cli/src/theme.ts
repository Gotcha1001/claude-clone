// export type ThemeColors = {
//   primary: string;
//   planMode: string;
//   selection: string;
//   thinking: string;
//   success: string;
//   error: string;
//   info: string;
//   background: string;
//   surface: string;
//   dialogSurface: string;
//   thinkingBorder: string;
//   dimSeparator: string;
// };

// export type Theme = {
//   name: string;
//   colors: ThemeColors;
// };

// export const THEMES: Theme[] = [
//   {
//     name: "Nightfox",
//     colors: {
//       primary: "#56D6C2",
//       planMode: "#CF8EF4",
//       selection: "#89B4FA",
//       thinking: "#CF8EF4",
//       success: "#82E0AA",
//       error: "#E74C5E",
//       info: "#56D6C2",
//       background: "#0D0D12",
//       surface: "#1A1A24",
//       dialogSurface: "#0A0A10",
//       thinkingBorder: "#34344A",
//       dimSeparator: "#4E4E66",
//     },
//   },
// ];

// export const DEFAULT_THEME = THEMES.find((t) => t.name === "Nightfox")!;

export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "Nightfox",
    colors: {
      primary: "#56D6C2",
      planMode: "#CF8EF4",
      selection: "#89B4FA",
      thinking: "#CF8EF4",
      success: "#82E0AA",
      error: "#E74C5E",
      info: "#56D6C2",
      background: "#0D0D12",
      surface: "#1A1A24",
      dialogSurface: "#0A0A10",
      thinkingBorder: "#34344A",
      dimSeparator: "#4E4E66",
    },
  },
  {
    name: "Voidwave",
    colors: {
      primary: "#FF6AC1",
      planMode: "#9D7CFF",
      selection: "#7AA2FF",
      thinking: "#9D7CFF",
      success: "#4FE3B3",
      error: "#FF5C7A",
      info: "#66D9FF",
      background: "#0B0714",
      surface: "#171029",
      dialogSurface: "#080510",
      thinkingBorder: "#332757",
      dimSeparator: "#4A3A73",
    },
  },
  {
    name: "Amberlight",
    colors: {
      primary: "#FFB454",
      planMode: "#FF8C42",
      selection: "#E8A33D",
      thinking: "#FF8C42",
      success: "#B8D468",
      error: "#FF5A5A",
      info: "#FFC97A",
      background: "#120E08",
      surface: "#1F1811",
      dialogSurface: "#0D0A06",
      thinkingBorder: "#4A3A24",
      dimSeparator: "#6B5A3E",
    },
  },
  {
    name: "Deepsea",
    colors: {
      primary: "#2FD4E0",
      planMode: "#5CA9E8",
      selection: "#3E8FD6",
      thinking: "#5CA9E8",
      success: "#3FE0A5",
      error: "#F0556B",
      info: "#2FD4E0",
      background: "#050C12",
      surface: "#0E1B26",
      dialogSurface: "#03080C",
      thinkingBorder: "#1E3A4C",
      dimSeparator: "#2E5468",
    },
  },
  {
    name: "Emberglow",
    colors: {
      primary: "#FF7A5C",
      planMode: "#F5566B",
      selection: "#E88A4C",
      thinking: "#F5566B",
      success: "#D9C15A",
      error: "#FF3B3B",
      info: "#FFA36C",
      background: "#140807",
      surface: "#241110",
      dialogSurface: "#0F0605",
      thinkingBorder: "#4A2320",
      dimSeparator: "#6B3733",
    },
  },
  {
    name: "Mossgrove",
    colors: {
      primary: "#7CE38B",
      planMode: "#A6D65C",
      selection: "#5FBF7A",
      thinking: "#A6D65C",
      success: "#7CE38B",
      error: "#E5605A",
      info: "#6FD6A8",
      background: "#070C08",
      surface: "#121C14",
      dialogSurface: "#050A06",
      thinkingBorder: "#25392A",
      dimSeparator: "#3A5A40",
    },
  },
  {
    name: "Frostbyte",
    colors: {
      primary: "#7FDBFF",
      planMode: "#9EC5FF",
      selection: "#5CA9E8",
      thinking: "#9EC5FF",
      success: "#8FE3C0",
      error: "#FF6B7A",
      info: "#B8ECFF",
      background: "#080B10",
      surface: "#131A22",
      dialogSurface: "#05070A",
      thinkingBorder: "#233242",
      dimSeparator: "#3A5266",
    },
  },
  {
    name: "Bloodmoon",
    colors: {
      primary: "#E84855",
      planMode: "#C4467A",
      selection: "#D65A5A",
      thinking: "#C4467A",
      success: "#7FB86B",
      error: "#FF3355",
      info: "#E88A8A",
      background: "#120607",
      surface: "#210C0E",
      dialogSurface: "#0C0405",
      thinkingBorder: "#4A1E22",
      dimSeparator: "#6B2E33",
    },
  },
  {
    name: "Goldrush",
    colors: {
      primary: "#E8B84B",
      planMode: "#C99A3E",
      selection: "#D6A94C",
      thinking: "#C99A3E",
      success: "#A8C060",
      error: "#D65C4A",
      info: "#F0D080",
      background: "#0F0C06",
      surface: "#1E1810",
      dialogSurface: "#0A0805",
      thinkingBorder: "#3E331E",
      dimSeparator: "#5C4C2E",
    },
  },
  {
    name: "Neotokyo",
    colors: {
      primary: "#F72585",
      planMode: "#7209B7",
      selection: "#4CC9F0",
      thinking: "#B5179E",
      success: "#4CFF9E",
      error: "#FF0A54",
      info: "#4CC9F0",
      background: "#08060F",
      surface: "#160E28",
      dialogSurface: "#05040A",
      thinkingBorder: "#33204A",
      dimSeparator: "#4E2E6B",
    },
  },
  {
    name: "Lavenderdusk",
    colors: {
      primary: "#C9A6FF",
      planMode: "#E8A6E0",
      selection: "#A891D6",
      thinking: "#E8A6E0",
      success: "#A6E8C4",
      error: "#F08A9E",
      info: "#D6C4FF",
      background: "#0D0A12",
      surface: "#1B1626",
      dialogSurface: "#08060E",
      thinkingBorder: "#332B4A",
      dimSeparator: "#4E4066",
    },
  },
  {
    name: "Steelforge",
    colors: {
      primary: "#8FA8C4",
      planMode: "#6E8FB8",
      selection: "#5C7A99",
      thinking: "#6E8FB8",
      success: "#7FBF9E",
      error: "#D6685C",
      info: "#A8C0D6",
      background: "#0A0D10",
      surface: "#161C22",
      dialogSurface: "#06080A",
      thinkingBorder: "#2A343E",
      dimSeparator: "#405060",
    },
  },
  {
    name: "Sakura",
    colors: {
      primary: "#FFA6C9",
      planMode: "#F08AB2",
      selection: "#E893B5",
      thinking: "#F08AB2",
      success: "#B8E0A6",
      error: "#E85C6E",
      info: "#FFD1E0",
      background: "#100B0D",
      surface: "#22151A",
      dialogSurface: "#0B0709",
      thinkingBorder: "#472832",
      dimSeparator: "#69404C",
    },
  },
  {
    name: "Obsidian",
    colors: {
      primary: "#D4D8DD",
      planMode: "#A8B0BC",
      selection: "#8A94A3",
      thinking: "#A8B0BC",
      success: "#8FCF9E",
      error: "#E0666E",
      info: "#B8C4CF",
      background: "#08090A",
      surface: "#141618",
      dialogSurface: "#050506",
      thinkingBorder: "#2C3033",
      dimSeparator: "#42484D",
    },
  },
  {
    name: "Toxicwaste",
    colors: {
      primary: "#C6FF3E",
      planMode: "#8CFF6B",
      selection: "#9ED639",
      thinking: "#8CFF6B",
      success: "#B0FF5C",
      error: "#FF4655",
      info: "#D6FF8A",
      background: "#0A0D06",
      surface: "#151C0E",
      dialogSurface: "#060804",
      thinkingBorder: "#2E3E1C",
      dimSeparator: "#465C2A",
    },
  },
  {
    name: "Auroraveil",
    colors: {
      primary: "#4EF0A8",
      planMode: "#6E9EFF",
      selection: "#5CC9D6",
      thinking: "#6E9EFF",
      success: "#4EF0A8",
      error: "#FF6B8A",
      info: "#8AE0FF",
      background: "#060D0C",
      surface: "#0F1C1A",
      dialogSurface: "#040807",
      thinkingBorder: "#1E3E38",
      dimSeparator: "#2E5C52",
    },
  },
];

export const DEFAULT_THEME = THEMES.find((t) => t.name === "Nightfox")!;
