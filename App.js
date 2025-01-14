import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState("");

  function startGameHandler(number) {
    setUserNumber(number);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userNumber={userNumber} />;
  }

  if (Platform.OS === "android") {
    content = (
      <SafeAreaViewAndroid style={styles.rootScreen}>
        {content}
      </SafeAreaViewAndroid>
    );
  } else {
    content = <SafeAreaView style={styles.rootScreen}>{content}</SafeAreaView>;
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {content}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#3b3c42",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
