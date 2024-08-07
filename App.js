import Routes from './src/routes/'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <NavigationContainer>
      
      <Routes/>
    </NavigationContainer>
  );
}


