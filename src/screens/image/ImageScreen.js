import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { color } from "react-native-reanimated";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = props => {
  console.log(props);
  const [counter, setCounter] = useState(0);

  const increaseNumber = () => {
    setCounter(counter + 1);
  };

  const decreaseNumber = () => {
    setCounter(counter - 1);
  };
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../../assets/images/forest.jpg")}
        score={3}
      ></ImageDetail>
      <ImageDetail
        title="Beach"
        imageSource={require("../../../assets/images/beach.jpg")}
        score={5}
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../../assets/images/mountain.jpg")}
        score={9}
      ></ImageDetail>

      <Button title="Increase" onPress={increaseNumber}></Button>
      <Button title="Decrease" onPress={decreaseNumber}></Button>
      <Text>Current Counter : {counter}</Text>
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

export default ImageScreen;
