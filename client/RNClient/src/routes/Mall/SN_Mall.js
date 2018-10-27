import React from "react";
import { createStackNavigator } from "react-navigation";
import MallScreen from "./MallScreen";
import FleaMarketScreen from "./FleaMarketScreen";
import TradeMarketScreen from "./TradeMarketScreen";
import MoocStack from "./Mooc/SN_Mooc";

const MallStack = createStackNavigator(
  {
    Mall: {
      screen: MallScreen,
      navigationOptions: {
        header: null,
        title: "Mall",
      },
    },
    FleaMarketEntry: {
      screen: FleaMarketScreen,
      navigationOptions: {
        title: "Flea Market",
      },
    },
    MoocEntry: {
      screen: MoocStack,
      navigationOptions: {
        title: "MOOC",
      },
    },
    TradeMarketEntry: {
      screen: TradeMarketScreen,
      navigationOptions: {
        title: "Trade Market",
      },
    },
  },
  {
    initialRouteName: "Mall",
  },
);

export default MallStack;
