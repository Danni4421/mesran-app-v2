import { AppText } from "@/components/AppText";
import { ThemedView } from "@/components/ThemedView";
import { Palette } from "@/constants/Colors";
import { View } from "react-native";

export default function CreateEventScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 16 }}>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppText.Semibold style={{ fontSize: 24 }}>
          Halo, Selamat Datang!
        </AppText.Semibold>
      </ThemedView>
      <AppText.Bold
        style={{ fontSize: 24, color: Palette.primaryBase, marginBottom: 16 }}
      >
        Buat Acara Baru
      </AppText.Bold>
      <AppText.Regular
        style={{ fontSize: 16, color: Palette.neutral40, marginBottom: 24 }}
      >
        Isi detail acara Anda di bawah ini.
      </AppText.Regular>
      {/* Form input fields can be added here */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AppText.Regular style={{ color: Palette.neutral30 }}>
          (Form pembuatan acara coming soon)
        </AppText.Regular>
      </View>
    </ThemedView>
  );
}
