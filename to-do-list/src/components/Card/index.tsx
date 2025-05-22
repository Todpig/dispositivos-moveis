import { Text, View } from "react-native";
import { styles } from "./styles";

interface CardProps {
  title: string;
  value: number;
  textVariant: "registered" | "pending" | "finalized";
}

export function Card({ title, textVariant, value }: CardProps) {
  const textStyle = {
    registered: styles.textRegistered,
    pending: styles.textPending,
    finalized: styles.textFinalized,
  };

  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text style={textStyle[textVariant]}>{value}</Text>
    </View>
  );
}
