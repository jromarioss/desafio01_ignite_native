import { StatusBar, View } from "react-native";

import { Header } from "./src/components/Header";
import { Home } from "./src/screen/home";

export default function App() {
  return (
    <View>
      <Header />
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  )
}