import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredGoal) {
    setEnteredGoalText(enteredGoal);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageStyle} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your task"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor="#311b6b"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#ffffff"/>
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="cancel" onPress={props.onCancel} color="#ffffff"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#311b6b',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    width: "85%",
    borderRadius:6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
  buttonWrapper: {
    width: 100,
    marginHorizontal: 10,
    backgroundColor: "#ffa701",
    borderRadius:6,
  },
  imageStyle:{
    width:100,
    height:100,
    margin:20,
  },
});
