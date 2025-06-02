import CustomToast from "@/components/CustomToast";
import { CartProvider } from "@/hooks/stateContext";
import {
  IBMPlexMono_400Regular,
  IBMPlexMono_700Bold,
  useFonts as useMonoFonts,
} from "@expo-google-fonts/ibm-plex-mono";
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_700Bold,
  useFonts as useSansFonts,
} from "@expo-google-fonts/ibm-plex-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SFProTextRegular: require("../assets/fonts/SF Pro Text/SF-Pro-Text-Regular.otf"),
    SFProTextBold: require("../assets/fonts/SF Pro Text/SF-Pro-Text-Bold.otf"),


  });

  const [monoFontsLoaded] = useMonoFonts({
    IBMPlexMono_400Regular,
    IBMPlexMono_700Bold,
  });

  const [sansFontsLoaded] = useSansFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_700Bold,
  });

  const fontsLoaded = monoFontsLoaded && sansFontsLoaded && loaded;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const toastConfig = {
    customSuccess: ({
      text1,
    }: {
      text1?: string;
    }) => <CustomToast message={text1 || ""} visible={() => Toast.hide()}/>,
  };


  return (
    <CartProvider>
      <>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: true, title: "Home" }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(products)" options={{ headerShown: true }} />
          <StatusBar style={"auto"} />
        </Stack>
        <Toast config={toastConfig} />

      </>
    </CartProvider>
  );
}
