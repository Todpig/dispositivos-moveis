import { Text, View } from "react-native";
import { styles } from "./styles";

interface CountProps {
  count: number;
}

export function Count({ count }: CountProps) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{count}</Text>
    </View>
  );
}
