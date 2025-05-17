import { Button } from "@/components/Button";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e1e1e6",
  },
  CountContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
    padding: 16,
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  textFooter: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#808080",
  },
});
