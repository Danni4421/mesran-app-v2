import { Palette } from "@/constants/Colors";
import { AppText } from "./AppText";
import { ThemedView } from "./ThemedView";

export default function EventHistoryCard() {
  return (
    <ThemedView>
      <ThemedView
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: Palette.neutral20,
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <AppText.Semibold style={{ fontSize: 20, color: Palette.neutralBase }}>
          Acara Keluarga
        </AppText.Semibold>
        <AppText.Regular style={{ fontSize: 16, color: Palette.neutral40 }}>
          12 Desember 2023
        </AppText.Regular>
        <AppText.Regular
          style={{
            fontSize: 16,
            color: Palette.neutral40,
          }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AppText.Regular>
      </ThemedView>
    </ThemedView>
  );
}
