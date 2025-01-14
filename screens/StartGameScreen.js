import { Button, TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

function StartGameScreen({ onStartGame }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(number) {
    setEnteredNumber(number);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onStartGame(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#5b0731",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
