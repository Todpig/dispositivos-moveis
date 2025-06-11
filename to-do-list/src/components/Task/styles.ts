import { StyleSheet, ViewStyle } from "react-native";

const ViewChecked: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  height: "100%",
  borderStartEndRadius: 4,
  borderStartStartRadius: 4,
};

export const styles = StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 4,
    maxHeight: 56,
    marginBottom: 8,
    width: "100%",
  },
  ContainerText: {
    backgroundColor: "#304163",
    padding: 16,
    height: 56,
    width: "68%",
  },
  ContentText: {
    color: "#FFFFFF",
  },
  ContainerChecked: {
    ...ViewChecked,
    backgroundColor: "#0E9577",
  },
  ContainerFinalized:{
    ...ViewChecked,
    backgroundColor: "#e1e1e6"
  },
  ContainerUnchecked: {
    ...ViewChecked,
    backgroundColor: "#E88A1A",
  },
  CheckBox: {
    color: "#FFFFFF",
  },
});
