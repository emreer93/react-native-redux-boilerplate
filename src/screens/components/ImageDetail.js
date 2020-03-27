import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { color } from "react-native-reanimated";

const ImageDetail = props => {
  console.log(props);

  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title} Image</Text>
      <Text>Image Score: {props.score}</Text>
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

export default ImageDetail;
