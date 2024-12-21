import { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text> heuhue</Text>
    </View>
  );
}
