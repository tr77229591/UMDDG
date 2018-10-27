import React from "react";
import { AsyncStorage, SafeAreaView, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Styles } from "../../styles/StyleSheet";
import { Button, CheckBox, Input } from "react-native-elements";
import Antdesign from "react-native-vector-icons/AntDesign";

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Sign in"
  };

  render() {
    return (
      <SafeAreaView style={Styles.signin_container}>
        <Input
          placeholder="User Name"
          leftIcon={<Antdesign name="user" size={24} color="black" />}
        />
        <Input
          placeholder="Password"
          leftIcon={<Antdesign name="lock" size={24} color="black" />}
          secureTextEntry={true}
        />
        {/*<Button title="Sign in!" onPress={this._signInAsync} />*/}
        <Button
          title="Sign in"
          // loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 100
          }}
          containerStyle={{ marginTop: 20, marginBottom: 20 }}
          onPress={this._signInAsync}
        />
        <Text
          style={{ color: "royalblue" }}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          Don't have an account? Sign up now!
        </Text>
      </SafeAreaView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: "Sign up"
  };

  constructor (props) {
    super(props);
    this.state = {
      checked: 0,
    };
  }

  render() {
    return (
      <SafeAreaView style={Styles.signin_container}>
        <Input
          placeholder="User Name"
          leftIcon={<Antdesign name="user" size={24} color="black" />}
        />
        <Input
          placeholder="Email Address"
          leftIcon={<Antdesign name="mail" size={24} color="black" />}
        />
        <Input
          placeholder="Password"
          leftIcon={<Antdesign name="lock" size={24} color="black" />}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirm Password"
          leftIcon={<Antdesign name="lock" size={24} color="black" />}
          secureTextEntry={true}
        />
        <CheckBox
          center
          title="I agree to the terms of user."
          checked={this.state.checked}
          checkedColor="royalblue"
          uncheckedColor="silver"
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle={{
            backgroundColor: "white",
            borderColor: "transparent",
            borderWidth: 0,
          }}
        />
        <Button
          title="Sign up"
          // loading
          loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 100
          }}
          // containerStyle={{ marginTop: 20, marginBottom: 20 }}
          onPress={this._signInAsync}
        />
        {/*<Text style={{color: 'royalblue'}}*/}
        {/*onPress={() => LinkingIOS.openURL('http://google.com')}>Don't have an account? Sign up now!</Text>*/}
      </SafeAreaView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: "SignIn"
  }
);

export default AuthStack;
