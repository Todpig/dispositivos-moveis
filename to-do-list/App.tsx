import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";
import { SearchBar } from "./src/components/SearchBar";
import { SectionTasks } from "./src/components/SectionTasks";
import { TaskProps } from "./src/types/TaskProps";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: "1",
      title: "Estudar React Native",
      checkedVariant: "checked",
      onPress: () => handleRemoveTask("1"),
    },
  ]);

  const filteredTasks = {
    checked: tasks.filter((task) => task.checkedVariant === "checked"),
    unchecked: tasks.filter((task) => task.checkedVariant === "unchecked"),
  };

  const handleRemoveTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAddTask = (title: string) => {
    const newTask: TaskProps = {
      id: String(new Date().getTime()),
      title,
      checkedVariant: "unchecked",
      onPress: () => handleRemoveTask(newTask.id),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.MainContainer}>
        <SearchBar onPress={handleAddTask} />
        <View style={styles.Cards}>
          <Card title="Cadastradas:" value={4} textVariant="registered" />
          <Card title="Em aberto:" value={2} textVariant="pending" />
          <Card title="Finalizadas:" value={2} textVariant="finalized" />
        </View>
        <View style={styles.TasksContainer}>
          <SectionTasks
            key="unchecked"
            title="Em aberto:"
            tasks={filteredTasks.unchecked}
          />
          <SectionTasks
            key="checked"
            title="Finalizadas:"
            tasks={filteredTasks.checked}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#28385E",
    width: "100%",
  },
  MainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    gap: 20,
  },
  Cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 350,
  },
  TasksContainer: {
    width: 350,
    gap: 40,
  },
});
