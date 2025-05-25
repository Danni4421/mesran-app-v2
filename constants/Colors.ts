/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FE4F34";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const Palette = {
  // Neutral
  neutral100: "#050505",
  neutral90: "#090909",
  neutral80: "#0E0E0E",
  neutral70: "#121212",
  neutral60: "#171717",
  neutralBase: "#1B1B1B",
  neutral50: "#575757",
  neutral40: "#7F7F7F",
  neutral30: "#BBBBBB",
  neutral20: "#E8E8E8",
  neutral10: "#F6F6F6",
  white: "#FFFFFF",

  // Primary
  primary100: "#33100A",
  primary90: "#551A11",
  primary80: "#7F281A",
  primary70: "#A93523",
  primary60: "#D4422B",
  primaryBase: "#FE4F34",
  primary50: "#FE6C56",
  primary40: "#FE8A78",
  primary30: "#FEA799",
  primary20: "#FFC4BB",
  primary10: "#FFDCD6",

  // Success
  success100: "#001F09",
  success90: "#00330F",
  success80: "#004D17",
  success70: "#00661F",
  success60: "#008026",
  successBase: "#00992E",
  success50: "#2BAA51",
  success40: "#55BB74",
  success30: "#80CC96",
  success20: "#AADDB9",
  success10: "#CCEBD5",

  // Error
  error100: "#2D0000",
  error90: "#4B0000",
  error80: "#700101",
  error70: "#950101",
  error60: "#BB0101",
  errorBase: "#E00101",
  error50: "#E52B2B",
  error40: "#EA5656",
  error30: "#EF8080",
  error20: "#F5AAAA",
  error10: "#F9CCCC",

  // Warning
  warning100: "#312C00",
  warning90: "#524900",
  warning80: "#7B6E00",
  warning70: "#A39300",
  warning60: "#CCB700",
  warningBase: "#F5DC00",
  warning50: "#F7E22B",
  warning40: "#F8E855",
  warning30: "#FAED80",
  warning20: "#FCF3AA",
  warning10: "#FDF8CC",
};
