import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Substituição do ícone
import { styles } from "./styles";

interface ButtonProps {
  variant: "primary" | "secondary";
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ onPress, variant, disabled }: ButtonProps) {
  const buttonstyle = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
  };
  return (
    <TouchableOpacity
      style={buttonstyle[variant]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>
        <FontAwesome name="trash" size={24} color="#fff" />
      </Text>
    </TouchableOpacity>
  );
}
