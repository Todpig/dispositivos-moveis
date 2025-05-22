import { FlatList, Text, View } from "react-native";
import { TaskProps } from "../../types/TaskProps";
import { Task } from "../Task";
import { styles } from "./styles";

interface SectionTasksProps {
  title: string;
  tasks: TaskProps[];
}

export function SectionTasks({ title, tasks }: SectionTasksProps) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            checkedVariant={item.checkedVariant}
            title={item.title}
            onPress={item.onPress}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            Nenhuma tarefa cadastrada? Adicione uma nova tarefa!
          </Text>
        )}
      />
    </View>
  );
}
