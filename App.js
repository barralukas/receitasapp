import 'react-native-gesture-handler'

import { Routes } from "./src/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function Home() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
