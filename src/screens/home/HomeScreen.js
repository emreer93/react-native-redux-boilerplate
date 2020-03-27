import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, Button, TouchableOpacity } from "react-native";
import NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import colors from "colors";
import { fetchExample } from "api";

const HomeScreen = props => {
  const { example } = props;
  console.log(props);
  useEffect(() => {
    fetchExample();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>HomeScreen</Text>
      <Button
        title="Go To List"
        onPress={() => {
          props.navigation.navigate("list");
        }}
      ></Button>
      <Button
        title="Go To Image Screen"
        onPress={() => {
          props.navigation.navigate("image");
          //NavigationService.push('image')
        }}
      ></Button>
      <Button
        title="Go To Colorful Box"
        onPress={() => {
          props.navigation.navigate("colorfulBox");
          //NavigationService.push('image')
        }}
      ></Button>
    </View>
  );
};

HomeScreen.propTypes = {
  example: PropTypes.number
};

HomeScreen.defaultProps = {
  example: 5
};

export default HomeScreen;
