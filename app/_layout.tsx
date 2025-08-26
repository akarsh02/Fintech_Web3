import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Link, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Component, useEffect } from 'react';
import React = require('react');
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

 function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  
  const router = useRouter()

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

const Stacks = createNativeStackNavigator();

  return <Stack>
          <Stack.Screen name="index" options={{ headerShown: false}} />
          <Stack.Screen name="signup" options={{ title:"", headerBackTitle:"",headerShadowVisible:false,headerStyle:{backgroundColor:Colors.background},
          headerLeft:()=>(
          <TouchableOpacity onPress={() => router.back()} style={{padding:10}}>
              <Ionicons name="chevron-back" size={34} color={Colors.primary} />
          </TouchableOpacity>)
        }} />
          <Stack.Screen name="login" options={{ title:"", headerBackTitle:"",headerShadowVisible:false,headerStyle:{backgroundColor:Colors.background},
          headerLeft:()=>(
          <TouchableOpacity onPress={() => router.back()} style={{padding:10}}>
              <Ionicons name="chevron-back" size={34} color={Colors.primary} />
          </TouchableOpacity>),
           headerRight:()=>(
            <Link href="/help" asChild>
          <TouchableOpacity>
              <Ionicons name="help-circle-outline" size={34} color={Colors.primary} />
          </TouchableOpacity>
             </Link>)
        }} />

        <Stack.Screen name="help" options={{ title: "Help", presentation: "modal",headerBackTitle:"",headerShadowVisible:false,headerStyle:{backgroundColor:Colors.background},  }} />

      </Stack>
}

function RootLayoutNav() {


  return (
    <>
      <StatusBar style='light' />
      <InitialLayout/>
    
  </>

  );
}
export default RootLayoutNav;
