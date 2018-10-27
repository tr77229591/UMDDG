import React from "react";
import { createStackNavigator } from "react-navigation";
import BookingScreen from "./BookingScreen";
import ItemScreen from "./ItemScreen";

const BookingStack = createStackNavigator({
    Booking: {screen: BookingScreen, navigationOptions: {header: null}},
    Item: {screen: ItemScreen},
  },
  {
    initialRouteName: "Booking",
  });

export default BookingStack;
