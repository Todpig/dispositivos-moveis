import { StyleSheet, TextStyle } from "react-native";

const text: TextStyle = {
  fontSize: 24,
  fontWeight: "bold",
};

export const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  textRegistered: {
    ...text,
    color: "#000",
  },
  textPending: {
    ...text,
    color: "#e88a1a",
  },
  textFinalized: {
    ...text,
    color: "#0E9577",
  },
});
