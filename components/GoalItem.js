import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItemTextContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.presseditem}
      >
        <Text style={styles.goalItemtext}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItemTextContainer: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    fontWeight: "800",
    alignItems: "center",
  },
  presseditem: {
    opacity: 0.7,
  },

  goalItemtext: {
    color: "#ffffff",
    padding: 10,
  },
});
