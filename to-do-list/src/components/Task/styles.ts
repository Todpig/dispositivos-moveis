import CheckBox from "@react-native-community/checkbox";
import { StyleSheet, ViewStyle } from "react-native";

const ViewChecked: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  maxWidth: 56,
  maxHeight: 54,
};

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 4,
    height: 56,
  },
  ContainerText: {
    backgroundColor: "#304163",
    padding: 16,
    height: 54,
    width: 250,
  },
  ContentText: {
    color: "#FFFFFF",
  },
  ContainerChecked: {
    ...ViewChecked,
    backgroundColor: "#0E9577",
  },
  ContainerUnchecked: {
    ...ViewChecked,
    backgroundColor: "#E88A1A",
  },
  CheckBox: {
    color: "#FFFFFF",
  },
});
