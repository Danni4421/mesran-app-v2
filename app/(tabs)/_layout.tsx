import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BookText, House, MessageCircle, UserRound } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [
          {
            height: 90,
            paddingTop: 14,
            paddingBottom: 18,
            backgroundColor: Colors[colorScheme ?? "light"].background,
            borderTopWidth: 0,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
          },
          Platform.select({
            ios: {
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            },
            default: {},
          }),
        ],
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => <House size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "Riwayat",
          tabBarIcon: ({ color }) => <BookText size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Pesan",
          tabBarIcon: ({ color }) => <MessageCircle size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <UserRound size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
