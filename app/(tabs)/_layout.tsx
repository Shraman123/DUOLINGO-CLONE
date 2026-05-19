import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="lesson/[id]" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="lesson/complete" options={{ animation: "fade" }} />
      </Stack>
    </>
  );
}

