import { AppText } from "@/components/AppText";
import EventCard from "@/components/EventCard";
import { ThemedView } from "@/components/ThemedView";
import { Palette } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Bell } from "lucide-react-native";
import { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

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
        <AppText.Semibold style={{ fontSize: 24 }}>
          Halo, Selamat Datang!
        </AppText.Semibold>
        <Bell />
      </ThemedView>

      <ThemedView style={{ marginTop: 16 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 4 }}
          pagingEnabled
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={(event) => {
            const page = Math.round(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            setCurrentPage(page);
          }}
          scrollEventThrottle={16}
        >
          {[...Array(10)].map((_, index) => (
            <EventCard key={index} />
          ))}
        </ScrollView>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {[...Array(10)].map((_, idx) => (
            <ThemedView
              key={idx}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor:
                  currentPage === idx ? Palette.primaryBase : Palette.neutral20,
                marginHorizontal: 3,
              }}
            />
          ))}
        </ThemedView>

        <ThemedView
          style={{
            borderWidth: 2,
            borderColor: Palette.neutral20,
            borderStyle: "dashed",
            borderRadius: 16,
            overflow: "hidden",
            marginTop: 24,
            padding: 12,
          }}
        >
          <Image
            source={require("@/assets/images/advertising.png")}
            style={{
              width: "100%",
              height: 230,
              borderRadius: 16,
            }}
            resizeMode="contain"
          />
          <ThemedView
            style={{ display: "flex", alignItems: "center", marginTop: 12 }}
          >
            <AppText.Semibold style={{ fontSize: 20 }}>
              Buatkan acara Anda disini!
            </AppText.Semibold>
            <AppText.Regular
              style={{
                color: Palette.neutral40,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Dapatkan lebih banyak peserta dengan membuat acara di Mesran.
            </AppText.Regular>
          </ThemedView>

          <TouchableOpacity
            style={{
              backgroundColor: Palette.primaryBase,
              paddingVertical: 10,
              paddingHorizontal: 24,
              borderRadius: 64,
              marginTop: 24,
              alignSelf: "center",
            }}
            onPress={() => router.push("/(events)/create-event")}
          >
            <AppText.Bold
              style={{
                color: Palette.white,
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Buat Acara
            </AppText.Bold>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
