import React from "react";
import { FlatList, RefreshControl, SafeAreaView, View } from "react-native";
import { Styles } from "../../styles/StyleSheet";
import BookingCards from "../../styles/BookingCards";
import IOS11Header from "../../styles/Header";

export default class BookingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      users: [
        {
          name: "Course Selection",
          avatar:
            require("../../../sample_images/courseSelection.jpg")
        },
        {
          name: "Sports Stadium",
          avatar:
            require("../../../sample_images/sports.jpg")
        },
        {
          name: "Event",
          avatar:
            require("../../../sample_images/events.jpg")
        },
        {
          name: "PC Room",
          avatar:
            require("../../../sample_images/pcRoom.jpg")
        },
      ]
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    // fetchData().then(() => {
    this.setState({ refreshing: false });
    // });
  };

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.head}>
          <IOS11Header text={this.props.navigation.state.routeName} />
        </View>
        <View style={Styles.body}>
          <FlatList
            renderItem={({ item }) => (
              <BookingCards name={item.name} avatar={item.avatar} />
            )}
            data={this.state.users}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
