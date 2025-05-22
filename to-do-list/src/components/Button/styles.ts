import { StyleSheet, ViewStyle } from "react-native";

const button: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
  maxWidth: 56,
  maxHeight: 56,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
};

export const styles = StyleSheet.create({
  buttonPrimary: {
    ...button,
    backgroundColor: "#4caf50",
  },
  buttonSecondary: {
    ...button,
    backgroundColor: "#F22424",
  },
  buttonTertiary: {
    ...button,
    backgroundColor: "#1E1E1E",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
});
