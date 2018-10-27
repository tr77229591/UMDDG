import { Text } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import React, { Component } from "react";
import { Styles } from "./StyleSheet";
import { iOSUIKit } from "react-native-typography";
import { withNavigation } from "react-navigation";

class BookingCards extends Component<props> {
  constructor (props) {
    super(props);
    console.log(this);
    this.state = {
      name: props.name,
      avatar: props.avatar,
    };
  }

  render () {
    return (
      <Card
        // title={props.name}
        image={this.state.avatar}
        imageProps={{
          // marginTop: 5,
          borderRadius: 10,
        }}
        containerStyle={Styles.card_container}
      >
        <Text style={{marginBottom: 10, fontSize: iOSUIKit.body.fontSize}}>
          Welcome to Macau Student Union Chain! Hope our service will help you
          with a better and smarter future, enjoy!
        </Text>
        <Button
          icon={<Icon name="code"
                      color="#ffffff"/>}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 10,
            marginLeft: 0,
            marginRight: 0,
            // marginBottom: 0,
          }}
          // title="BOOKING NOW"
          title={this.state.name}
          onPress={() => {
            this.props.navigation.navigate("Item", {
              name: this.state.name,
              avatar: this.state.avatar,
            });
          }}
        />
      </Card>
    );
  }
}

export default withNavigation(BookingCards);
