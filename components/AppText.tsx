import { Text as RNText, TextProps } from "react-native";

function getFontFamily(weight: string, fontStyle: string) {
  switch (weight) {
    case "bold":
    case "700":
      return fontStyle === "italic"
        ? "SF-Pro-Display-BoldItalic"
        : "SF-Pro-Display-Bold";
    case "900":
      return fontStyle === "italic"
        ? "SF-Pro-Display-BlackItalic"
        : "SF-Pro-Display-Black";
    case "800":
      return fontStyle === "italic"
        ? "SF-Pro-Display-HeavyItalic"
        : "SF-Pro-Display-Heavy";
    case "600":
      return fontStyle === "italic"
        ? "SF-Pro-Display-SemiboldItalic"
        : "SF-Pro-Display-Semibold";
    case "500":
      return fontStyle === "italic"
        ? "SF-Pro-Display-MediumItalic"
        : "SF-Pro-Display-Medium";
    case "400":
    case "normal":
      return fontStyle === "italic"
        ? "SF-Pro-Display-RegularItalic"
        : "SF-Pro-Display-Regular";
    case "300":
      return "SF-Pro-Display-Light";
    case "200":
      return fontStyle === "italic"
        ? "SF-Pro-Display-UltralightItalic"
        : "SF-Pro-Display-Ultralight";
    case "100":
      return fontStyle === "italic"
        ? "SF-Pro-Display-ThinItalic"
        : "SF-Pro-Display-Thin";
    default:
      return "SF-Pro-Display-Regular";
  }
}

function AppTextBase({
  weight = "400",
  fontStyle = "normal",
  style,
  ...props
}: TextProps & { weight?: string; fontStyle?: string }) {
  const fontFamily = getFontFamily(weight, fontStyle);
  return <RNText {...props} style={[style, { fontFamily }]} />;
}

export const AppText = Object.assign(AppTextBase, {
  Bold: (props: TextProps) => <AppTextBase {...props} weight="bold" />,
  Semibold: (props: TextProps) => <AppTextBase {...props} weight="600" />,
  Medium: (props: TextProps) => <AppTextBase {...props} weight="500" />,
  Regular: (props: TextProps) => <AppTextBase {...props} weight="400" />,
  Light: (props: TextProps) => <AppTextBase {...props} weight="300" />,
  Thin: (props: TextProps) => <AppTextBase {...props} weight="100" />,
  Italic: (props: TextProps) => <AppTextBase {...props} fontStyle="italic" />,
});
