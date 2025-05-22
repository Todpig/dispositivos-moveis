export interface TaskProps {
  id: string;
  title: string;
  onPress: () => void;
  checkedVariant: "checked" | "unchecked";
}
