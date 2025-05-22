import { TextInput, View } from "react-native";
import { styles } from "./styles";
import Octicons from "@expo/vector-icons/Octicons";

import { useState } from "react";
import { Button } from "../Button";

interface SearchBarProps {
  onPress: (title: string) => void;
}

export function SearchBar({ onPress }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleAddTask = () => {
    if (query.trim() === "") return;
    onPress(query);
    setQuery("");
  };

  return (
    <View style={styles.Container}>
      <TextInput
        placeholderTextColor={"#fff"}
        placeholder="Qual a tarefa?"
        value={query}
        onChangeText={setQuery}
        cursorColor={"#fff"}
        style={styles.Input}
      />
      <View>
        <Button onPress={handleAddTask} variant="tertiary">
          <Octicons name="diff-added" size={24} color="#fff" />
        </Button>
      </View>
    </View>
  );
}
