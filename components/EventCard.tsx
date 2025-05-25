import { Palette } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { AppText } from "./AppText";

export default function EventCard() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const cardMaxWidth = Math.min(width - 32, 500);

  return (
    <View
      style={{
        padding: 12,
        borderRadius: 8,
        borderColor: Palette.neutral20,
        borderWidth: 1,
        marginBottom: 16,
        maxWidth: cardMaxWidth,
        alignSelf: "center",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppText.Medium style={{ fontSize: 20 }}>Happy Birtdays</AppText.Medium>
        <AppText.Regular style={{ color: Palette.neutral40 }}>
          {new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </AppText.Regular>
        <AppText.Regular
          style={{ color: Palette.neutral40 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </AppText.Regular>
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: Palette.neutral20,
          paddingVertical: 10,
          paddingHorizontal: 24,
          borderRadius: 64,
          marginTop: 24,
          alignSelf: "center",
          width: "100%",
        }}
        onPress={() => router.push("/(events)/create-event")}
      >
        <AppText.Semibold
          style={{
            color: Palette.neutralBase,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Lihat Acara
        </AppText.Semibold>
      </TouchableOpacity>
    </View>
  );
}
