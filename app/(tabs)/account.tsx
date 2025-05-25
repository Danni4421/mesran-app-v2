import { AppText } from "@/components/AppText";
import { ThemedView } from "@/components/ThemedView";
import { Palette } from "@/constants/Colors";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import {
  Bell,
  BookText,
  ChevronRight,
  Settings,
  User2,
} from "lucide-react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { TouchableOpacity } from "react-native";

export default function AccountPage() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleCloseSheet = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleLogout = useCallback(() => {
    handleCloseSheet();
  }, [handleCloseSheet]);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const snapPoints = useMemo(() => ["60%"], []);

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
        <AppText.Semibold style={{ fontSize: 24 }}>Profil</AppText.Semibold>
        <Bell />
      </ThemedView>

      <ThemedView style={{ alignItems: "flex-start", marginVertical: 32 }}>
        <ThemedView
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://ui-avatars.com/api/?name=User" }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "contain",
            }}
          />
        </ThemedView>

        <AppText.Semibold
          style={{
            fontSize: 20,
            color: Palette.neutralBase,
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Aji Hamdani Ahmad
        </AppText.Semibold>

        <AppText.Regular
          style={{
            fontSize: 18,
            color: Palette.neutral40,
            textAlign: "center",
          }}
        >
          +62 342-3435-0933
        </AppText.Regular>
      </ThemedView>

      <ThemedView>
        {[
          {
            label: "Informasi Pribadi",
            icon: <User2 size={18} />,
            onPress: () => {},
          },
          {
            label: "Akun",
            icon: <Settings size={18} />,
            onPress: () => {},
          },
          {
            label: "Undanganku",
            icon: <BookText size={18} />,
            onPress: () => {},
          },
        ].map((item, idx) => (
          <TouchableOpacity
            key={item.label}
            style={{
              borderWidth: 1,
              borderColor: Palette.neutral20,
              padding: 12,
              borderRadius: 12,
              marginTop: idx === 0 ? 24 : 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={item.onPress}
          >
            <ThemedView
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              {item.icon}
              <AppText.Medium
                style={{
                  color: Palette.neutralBase,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {item.label}
              </AppText.Medium>
            </ThemedView>
            <ChevronRight />
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedView style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: Palette.primaryBase,
            paddingVertical: 10,
            paddingHorizontal: 24,
            borderRadius: 64,
            marginTop: 24,
          }}
          onPress={handlePresentModalPress}
        >
          <AppText.Bold
            style={{
              color: Palette.primaryBase,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Keluar
          </AppText.Bold>
        </TouchableOpacity>
      </ThemedView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleIndicatorStyle={{
          backgroundColor: Palette.neutral20,
          width: 40,
          height: 5,
          borderRadius: 3,
          alignSelf: "center",
          marginTop: 8,
          marginBottom: 12,
        }}
        snapPoints={snapPoints}
        detached={true}
        backgroundStyle={{
          backgroundColor: Palette.white,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        enablePanDownToClose
        style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.5}
          />
        )}
      >
        <BottomSheetView
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Image
            source={require("@/assets/images/logout.png")}
            style={{
              width: 230,
              height: 230,
              marginTop: 16,
              marginBottom: 24,
            }}
            contentFit="contain"
          />

          {/* Description For Logout Action */}
          <AppText.Semibold
            style={{
              fontSize: 24,
              color: Palette.neutralBase,
            }}
          >
            Ingin keluar dari akun Anda?
          </AppText.Semibold>
          <AppText.Regular
            style={{
              fontSize: 18,
              color: Palette.neutral40,
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Semua perubahan yang belum disimpan akan hilang, dan Anda harus
            masuk kembali untuk mengakses fitur.
          </AppText.Regular>

          {/* Action Logout Button */}
          <ThemedView
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 12,
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            {/* Tidak */}
            <ThemedView style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={handleCloseSheet}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: Palette.neutral20,
                  borderRadius: 64,
                  paddingVertical: 14,
                  backgroundColor: Palette.white,
                  width: "100%",
                  shadowColor: Palette.neutral20,
                  shadowOpacity: 0.04,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                }}
                activeOpacity={0.85}
              >
                <AppText.Semibold
                  style={{
                    color: Palette.neutralBase,
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >
                  Tidak
                </AppText.Semibold>
              </TouchableOpacity>
            </ThemedView>
            {/* Iya */}
            <ThemedView style={{ flex: 1 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Palette.primaryBase,
                  paddingVertical: 14,
                  borderRadius: 64,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  shadowColor: Palette.primaryBase,
                  shadowOpacity: 0.08,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                }}
                onPress={handleLogout}
                activeOpacity={0.85}
              >
                <AppText.Semibold
                  style={{
                    color: Palette.white,
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >
                  Iya
                </AppText.Semibold>
              </TouchableOpacity>
            </ThemedView>
          </ThemedView>
        </BottomSheetView>
      </BottomSheetModal>
    </ThemedView>
  );
}
