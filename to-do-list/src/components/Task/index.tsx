import { Text, View } from "react-native";
import { Button } from "../Button";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState } from "react";
import Checkbox from "expo-checkbox";

interface TaskProps {
  title: string;
  onPress: () => void;
  checkedVariant: "checked" | "unchecked" | "finalized";
  onCheck: (title: string) => void;
}

export function Task({ title, checkedVariant, onPress, onCheck }: TaskProps) {
  const [isSelected, setIsSelected] = useState(false);
  const checkedStyle = {
    checked: styles.ContainerChecked,
    unchecked: styles.ContainerUnchecked,
    finalized: styles.ContainerFinalized,
  };

  return (
    <View style={styles.Container}>
      <View style={checkedStyle[checkedVariant]}>
        <Checkbox
          value={isSelected}
          onValueChange={()=>{
            setIsSelected(!isSelected);
            onCheck(title)
          }}
          style={{ borderColor: "#fff" }}
          color="#fff"
        />
      </View>
      <View style={styles.ContainerText}>
        <Text style={styles.ContentText}>{title}</Text>
      </View>
      <Button variant="secondary" onPress={onPress}>
        <FontAwesome name="trash" size={24} color="#fff" />
      </Button>
    </View>
  );
}
