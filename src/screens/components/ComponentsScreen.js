import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";
import { red } from "color-name";

const ComponentsScreen = () => {
  const greeting = ["hello", "hola", "selam"];
  const element = <Text>How are you?</Text>;

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Component Screen</Text>
      <Text>This is the component screen.</Text>
      <Text>{greeting}</Text>
      {element}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ComponentsScreen;
