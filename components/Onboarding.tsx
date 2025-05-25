import { Palette } from "@/constants/Colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import OnboardingSvg from "../assets/images/onboarding.svg";
import { AppText } from "./AppText";

export default function Onboarding({ onDone }: { onDone: () => void }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#FE4F34",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <OnboardingSvg width={300} height={200} />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 32,
            maxWidth: "80%",
          }}
        >
          <AppText.Semibold
            style={{
              fontSize: 28,
              color: Palette.white,
            }}
          >
            Welcome to Mesran!
          </AppText.Semibold>
          <AppText.Regular
            style={{
              color: Palette.white,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Selamat datang di Mesran! Kami senang Anda bergabung dengan kami.
          </AppText.Regular>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Palette.white,
            padding: 16,
            borderRadius: 64,
            width: "100%",
            marginBottom: 32,
          }}
          onPress={onDone}
        >
          <AppText.Bold
            style={{
              color: Palette.neutralBase,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Get Started
          </AppText.Bold>
        </TouchableOpacity>
      </View>
    </View>
  );
}
