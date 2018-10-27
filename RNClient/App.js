/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import MyScreen from "./src/routes/My/MyScreen";
import CalendarScreen from "./src/routes/Calendar/CalendarScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import BookingStack from "./src/routes/Booking/SN_Booking";
import MallStack from "./src/routes/Mall/SN_Mall";
import AuthStack from "./src/routes/UserAuthentication/UserAuthentication";
import AuthLoadingScreen
  from "./src/routes/UserAuthentication/AuthLoadingScreen";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Calendar: CalendarScreen,
    Booking: BookingStack,
    Mall: MallStack,
    My: MyScreen,
  },
  {
    initialRouteName: "My",
    navigationOptions: ({navigation}) => ( {
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;

        switch (routeName) {
          case "Booking":
            iconName = "checkcircleo";
            break;
          case "My":
            iconName = "user";
            break;
          case "Calendar":
            iconName = "calendar";
            break;
          case "Mall":
            iconName = "isv";
            break;
          default:
            break;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <AntDesign
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    } ),
    tabBarOptions: {
      activeTintColor: "royalblue",
      inactiveTintColor: "darkgrey",
      style: {
        backgroundColor: "rgba(255, 255, 255, 1)",
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoadingScreen,
      headerMode: "float",
      header: null,
      navigationOptions: ({navigation}) => ( {
        header: false,
      } ),
      mode: "modal",
    },
    App: BottomTabNavigator,
    Auth: {
      screen: AuthStack,
      headerMode: "float",
      header: null,
      navigationOptions: ({navigation}) => ( {
        header: false,
      } ),
      mode: "modal",
    },
  },
  {
    initialRouteName: "AuthLoading",
    headerMode: "float",
    header: null,
    navigationOptions: ({navigation}) => ( {
      header: false,
    } ),
    mode: "modal",
  }
);

export default class App extends Component<props> {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <SwitchNavigator/>
      </View>
    );
  }
}
