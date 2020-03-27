import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-dynamic-vector-icons";
import React from "react";
// Screens
import HomeScreen from "screens/home/HomeScreen";
import ListScreen from "../../screens/list/ListScreen";
import ImageScreen from "../../screens/image/ImageScreen";
import SplashScreen from "../../screens/splash/SplashScreen";
import ColorfulBoxScreen from "../../screens/colorful-box/ColorfulBoxScreen";

export const Navigator = createBottomTabNavigator(
  {
    splash: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="500px" type="FontAwesome" size={25} color={tintColor} />
        )
      }
    },
    home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" type="FontAwesome" size={25} color={tintColor} />
        )
      }
    },

    // Map: {
    //   screen: MapScreen,
    //   navigationOptions: {
    //     tabBarVisible: true,
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="map-pin" type="FontAwesome" size={25} color={tintColor} />
    //     )
    //   }
    // },
    image: {
      screen: ImageScreen,
      navigationOptions: {
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="check-square"
            type="FontAwesome"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    list: {
      screen: ListScreen,
      navigationOptions: {
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="check-square"
            type="FontAwesome"
            size={25}
            color={tintColor}
          />
        )
      }
    },
    colorfulBox: {
      screen: ColorfulBoxScreen,
      navigationOptions: {
        tabBarVisible: true,
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="check-square"
            type="FontAwesome"
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    header: null
  }
);
