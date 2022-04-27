import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModelOpen(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function modelAddGoal() {
    setModelOpen(true);
  }

  function closeGoalModel() {
    setModelOpen(false);
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.mainContainer}>
      <Button title="Add New Goal" color="#ffffff" onPress={modelAddGoal} />
      {modelOpen && (
        <GoalInput
          visible={modelOpen}
          onAddGoal={addGoalHandler}
          onCancel={closeGoalModel}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"#1e085a"
  },
  goalsContainer: {
    flex: 5,
  },
});
