import { StyleSheet, ViewStyle } from "react-native";

const button: ViewStyle = {
  width: 56,
  height: 56,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
};

export const styles = StyleSheet.create({
  buttonPrimary: {
    ...button,
    backgroundColor: "#4caf50",
  },
  buttonSecondary: {
    ...button,
    backgroundColor: "#e23c44",
  },
  buttonTertiary: {
    ...button,
    backgroundColor: "#3b5998",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
});
