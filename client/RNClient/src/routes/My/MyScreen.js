import React from "react";
import { SafeAreaView, View } from "react-native";
import { Styles } from "../../styles/StyleSheet";
import MyHeader from "../../styles/MyHeader";
import MyViewList from "../../styles/MyViewList";

export default class MyScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.my_head}>
          <MyHeader text={this.props.navigation.state.routeName}/>
        </View>
        <View style={Styles.my_body}>
          <MyViewList/>
        </View>
      </SafeAreaView>
    );
  }
}
