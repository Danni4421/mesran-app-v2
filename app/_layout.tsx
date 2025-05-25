import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import Onboarding from "../components/Onboarding";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "SF-Pro-Display-Black": require("../assets/fonts/SF-Pro-Display-Black.otf"),
    "SF-Pro-Display-BlackItalic": require("../assets/fonts/SF-Pro-Display-BlackItalic.otf"),
    "SF-Pro-Display-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-BoldItalic": require("../assets/fonts/SF-Pro-Display-BoldItalic.otf"),
    "SF-Pro-Display-Heavy": require("../assets/fonts/SF-Pro-Display-Heavy.otf"),
    "SF-Pro-Display-HeavyItalic": require("../assets/fonts/SF-Pro-Display-HeavyItalic.otf"),
    "SF-Pro-Display-Light": require("../assets/fonts/SF-Pro-Display-Light.otf"),
    "SF-Pro-Display-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Pro-Display-MediumItalic": require("../assets/fonts/SF-Pro-Display-MediumItalic.otf"),
    "SF-Pro-Display-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-RegularItalic": require("../assets/fonts/SF-Pro-Display-RegularItalic.otf"),
    "SF-Pro-Display-Semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SF-Pro-Display-SemiboldItalic": require("../assets/fonts/SF-Pro-Display-SemiboldItalic.otf"),
    "SF-Pro-Display-Thin": require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    "SF-Pro-Display-ThinItalic": require("../assets/fonts/SF-Pro-Display-ThinItalic.otf"),
    "SF-Pro-Display-Ultralight": require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
    "SF-Pro-Display-UltralightItalic": require("../assets/fonts/SF-Pro-Display-UltralightItalic.otf"),
  });
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("hasSeenOnboarding").then((value) => {
      setShowOnboarding(value !== "true");
    });
  }, []);

  const handleDone = async () => {
    await AsyncStorage.setItem("hasSeenOnboarding", "true");
    setShowOnboarding(false);
  };

  if (!loaded || showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return <Onboarding onDone={handleDone} />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
