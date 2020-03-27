import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorfulBoxScreen = () => {
  const [colors, setColor] = useState([]);

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(red + "," + green + "," + blue);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Random Color"
        onPress={() => {
          setColor([...colors, randomRGB()]);
        }}
      ></Button>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 15,
                alignSelf: "stretch",
                backgroundColor: item
              }}
            ></View>
          );
        }}
      ></FlatList>
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

export default ColorfulBoxScreen;
