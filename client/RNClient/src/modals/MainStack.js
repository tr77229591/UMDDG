import Home from "../routes/Booking/BookingScreen";
import DetailsScreen from "../routes/My/MyScreen";
import { createStackNavigator } from "react-navigation";

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: DetailsScreen,
    },
  }, {
    initialRouteName: "BookingScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
);

// const MainStack = createBottomTabNavigator({
//     Home: {
//       screen: Home,
//     },
//     DetailsScreen: {
//       screen: DetailsScreen,
//     },
//   }, {
//     initialRouteName: "Home",
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#f4511e",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     },
//   },
// );

export default MainStack;
