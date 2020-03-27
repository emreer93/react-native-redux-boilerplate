import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View, ImageBackground } from "react-native";
import colors from "colors";
import NavigationService from "react-navigation-helpers";

const SplashScreen = props => {
  // const [{ status, response }, makeRequest] = ApiRequest(BASE_URL + GET, {
  //   verb: "get"
  // });
  const { example } = props;

  useEffect(() => {
    setTimeout(function() {
      NavigationService.navigate("home");
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require("assets/images/splashScreen.png")}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

SplashScreen.propTypes = {
  example: PropTypes.number
};

SplashScreen.defaultProps = {
  example: 5
};

export default SplashScreen;
