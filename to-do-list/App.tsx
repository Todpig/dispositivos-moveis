import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";
import { SearchBar } from "./src/components/SearchBar";
import { SectionTasks } from "./src/components/SectionTasks";
import { TaskProps } from "./src/types/TaskProps";
import { useEffect, useState } from "react";

interface FilteredTasks {
  checked: TaskProps[];
  unchecked: TaskProps[];
  finalized: TaskProps[];
}

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<FilteredTasks>({
    checked: [],
    unchecked: [],
    finalized: [],
  });

  useEffect(() => {
    const checked = tasks.filter((task) => task.checkedVariant === "checked");
    const unchecked = tasks.filter(
      (task) => task.checkedVariant === "unchecked"
    );
    const finalized = tasks.filter(
      (task) => task.checkedVariant === "finalized"
    );
    setFilteredTasks({
      checked,
      unchecked,
      finalized,
    });
  }, [tasks]);

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

  const handleCheckTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              checkedVariant:
                task.checkedVariant === "unchecked"
                  ? "checked"
                  : task.checkedVariant === "checked"
                  ? "finalized"
                  : "unchecked",
            }
          : task
      )
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.MainContainer}>
        <SearchBar onPress={handleAddTask} />
        <View style={styles.Cards}>
          <Card
            title="Cadastradas:"
            value={filteredTasks.checked.length}
            textVariant="registered"
          />
          <Card
            title="Em aberto:"
            value={filteredTasks.unchecked.length}
            textVariant="pending"
          />
          <Card
            title="Finalizadas:"
            value={filteredTasks.finalized.length}
            textVariant="finalized"
          />
        </View>
        <View style={styles.TasksContainer}>
          <SectionTasks
            key="unchecked"
            title="Em aberto:"
            tasks={filteredTasks.unchecked}
            handleCheckTask={handleCheckTask}
          />
          <SectionTasks
            key="checked"
            title="Concluídas:"
            tasks={filteredTasks.checked}
            handleCheckTask={handleCheckTask}
          />
          <SectionTasks
            key="finalized"
            title="Finalizadas:"
            tasks={filteredTasks.finalized}
            handleCheckTask={handleCheckTask}
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
