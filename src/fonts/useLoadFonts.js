import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Kodchasan_400Regular, Kodchasan_500Medium,Kodchasan_700Bold } from '@expo-google-fonts/kodchasan';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Kodchasan_Regular': Kodchasan_400Regular,   
        'Kodchasan_Medium': Kodchasan_500Medium,
        'Kodchasan_Bold': Kodchasan_700Bold,
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        };

    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;