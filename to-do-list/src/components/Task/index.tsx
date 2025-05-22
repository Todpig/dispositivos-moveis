import { Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";
import { useState } from "react";
import Checkbox from "expo-checkbox";

interface TaskProps {
  text: string;
  onPress: () => void;
  checkedVariant: "checked" | "unchecked";
}

export function Task({ text, checkedVariant, onPress }: TaskProps) {
  const [isSelected, setIsSelected] = useState(false);
  const checkedStyle = {
    checked: styles.ContainerChecked,
    unchecked: styles.ContainerUnchecked,
  };

  return (
    <View style={styles.Container}>
      <View style={checkedStyle[checkedVariant]}>
        <Checkbox
          value={isSelected}
          onValueChange={setIsSelected}
          style={{ borderColor: "#FFFFFF" }}
        />
      </View>
      <View style={styles.ContainerText}>
        <Text style={styles.ContentText}>{text}</Text>
      </View>
      <Button variant="secondary" onPress={onPress} />
    </View>
  );
}
