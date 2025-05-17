import { Button } from "@/components/Button";
import { Count } from "@/components/Count";
import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/Home/styles";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count == 0) return;
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    if (count == 0) return;
    setMessage("Contador reiniciado!");
    resetMessage();
    setCount(0);
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.CountContainer}>
        <Text style={styles.h1}>Contador App</Text>
        <Count count={count} />
        <Text style={styles.message}>{message}</Text>
        <View style={styles.ButtonContainer}>
          <Button children="-" variant="secondary" onPress={handleDecrement} />
          <Button children="Reset" variant="tertiary" onPress={handleReset} />
          <Button children="+" variant="primary" onPress={handleIncrement} />
        </View>
      </View>
      <Text style={styles.textFooter}>Aprenda React Native com Expo!</Text>
    </View>
  );
}
