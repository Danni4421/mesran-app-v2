import { StyleSheet, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabBarBackground() {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors[colorScheme].background,
        opacity: 0.98,
      }}
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
