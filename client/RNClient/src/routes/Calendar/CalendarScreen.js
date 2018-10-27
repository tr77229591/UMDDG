import React from "react";
import { View, SafeAreaView } from "react-native";
import IOS11Header from "../../styles/Header";
import { Styles } from "../../styles/StyleSheet";
import CalendarStyle from "../../styles/Calendar";
import { Divider } from "react-native-elements";

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.head}>
          <IOS11Header text={this.props.navigation.state.routeName} />
        </View>
        <View style={Styles.body}>
          <CalendarStyle />
        </View>
      </SafeAreaView>
    );
  }
}
