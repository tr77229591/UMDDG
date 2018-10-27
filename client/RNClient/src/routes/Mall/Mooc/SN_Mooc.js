import React from "react";
import { createStackNavigator } from "react-navigation";
import MoocVideo from "./MoocVideo";
import MoocScreen from "./MoocScreen";

const MoocStack = createStackNavigator({
    MoocScreen: {screen: MoocScreen, title: "Mooc"},
    MoocVideo: {
      screen: MoocVideo,
      navigationOptions: () => ( {header: null} ),
    },
  },
  {
    initialRouteName: "MoocScreen",
  });

export default MoocStack;
