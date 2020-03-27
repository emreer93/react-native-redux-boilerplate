import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { color } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const people = [
    { name: "Emre", age: 26 },
    { name: "Demir", age: 8 },
    { name: "Seyhan", age: 53 },
    { name: "Mel", age: 23 },
    { name: "How", age: 28 },
    { name: "Are", age: 16 },
    { name: "Met", age: 11 },
    { name: "Your", age: 44 }
  ];

  const [color, setColor] = useState("");

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(red + "," + green + "," + blue);
    setColor(`rgb(${red},${green},${blue})`);
  };

  return (
    <View>
      <FlatList
        data={people}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} - {item.age}
            </Text>
          );
        }}
      ></FlatList>
      <Button title="Random Color" onPress={randomRGB}></Button>
      <View
        style={{ height: 300, alignSelf: "stretch", backgroundColor: color }}
      ></View>
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

export default ListScreen;
