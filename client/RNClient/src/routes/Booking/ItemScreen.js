import React from "react";
import { SafeAreaView } from "react-native";
import { Styles } from "../../styles/StyleSheet";
import { Button, Input, Overlay, Text } from "react-native-elements";
import Antdesign from "react-native-vector-icons/AntDesign";

export default class ItemScreen extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      // isVisible: false,
      // refreshing: false,
      // name: props.navigation.getParam("name"),
      // avatar: props.navigation.getParam("avatar"),
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam("name"),
    };
  };

  // componentDidMount(){
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     return responseJson.movies;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  // _onRefresh = () => {
  //   this.setState({refreshing: true});
  //   // fetchData().then(() => {
  //   this.setState({refreshing: false});
  //   // });
  // };

  render () {
    return (
      <SafeAreaView style={Styles.signin_container}>
        <Input
          placeholder="Course Number"
          leftIcon={<Antdesign name="book"
                               size={24}
                               color="black"/>}
        />
        <Button
          title="Enroll"
          // loading
          loadingProps={{size: "large", color: "rgba(111, 202, 186, 1)"}}
          titleStyle={{fontWeight: "700"}}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 100,
          }}
          containerStyle={{marginTop: 20, marginBottom: 20}}
          // onPress={this.props.navigation.navigate("Calendar")}
          // onPress={this.setState({
          //   isVisible: true,
          // })}
        />
      </SafeAreaView>
    );
  }
}
