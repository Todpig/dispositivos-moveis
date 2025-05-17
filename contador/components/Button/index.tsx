import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, variant, disabled }: ButtonProps) {
  const buttonstyle = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiary: styles.buttonTertiary,
  };
  return (
    <TouchableOpacity
      style={buttonstyle[variant]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
