import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/Landing';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppStack />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    )
  }
}