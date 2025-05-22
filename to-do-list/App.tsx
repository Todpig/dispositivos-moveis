import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";
import { Task } from "./src/components/Task";

export default function App() {
  const handlePress = () => {
    console.log("Task pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <Card title="Cadastradas" textVariant="registered" value={9} />
        <Card title="Pendente" textVariant="pending" value={9} />
        <Card title="Finalizada" textVariant="finalized" value={9} />
      </View>
      <Task
        text="Enviar atividade"
        checkedVariant="checked"
        onPress={handlePress}
      />
      <Task
        text="Fazer compras"
        checkedVariant="unchecked"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28385E",
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    flexDirection: "row",
  },
});
