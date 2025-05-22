import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  onPress: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button({ onPress, variant, disabled, children }: ButtonProps) {
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
