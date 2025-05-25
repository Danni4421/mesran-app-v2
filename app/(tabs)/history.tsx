import { AppText } from "@/components/AppText";
import EventHistoryCard from "@/components/EventHistoryCard";
import { ThemedView } from "@/components/ThemedView";
import { Bell } from "lucide-react-native";
import { ScrollView } from "react-native";

export default function HistoryScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 16, paddingTop: 36 }}>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppText.Semibold style={{ fontSize: 24 }}>Riwayat</AppText.Semibold>
        <Bell />
      </ThemedView>
      <ScrollView
        style={{ marginTop: 16 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {[...Array(10)].map((_, index) => (
          <EventHistoryCard key={index} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}
