import React, { Component } from "react";
import { View } from "react-native";
import { Avatar, Header, Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

class MyHeader extends Component<props> {
  constructor (props) {
    super(props);
    this.state = {
      name: props.text,
    };
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor="white"
          placement="left"
          containerStyle={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
          centerComponent={
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                size={120}
                rounded
                // source={{
                //   uri:
                //     "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                // }}
                source = {require("../../sample_images/me.jpg")}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{paddingTop: 1}}>
                {this.state.name.toUpperCase()}
              </Text>
            </View>
          }
        />
        {/*<Divider style={Style.divider_header}/>*/}
      </View>
    );
  }
}

export default withNavigation(MyHeader);
