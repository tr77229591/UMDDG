import React, { Component } from "react";
import { View } from "react-native";
import { Avatar, Divider, Header } from "react-native-elements";
import { iOSUIKit } from "react-native-typography";
import { withNavigation } from "react-navigation";
import { Styles as Style } from "./StyleSheet";

class IOS11Header extends Component<props> {
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
          leftComponent={{
            text: this.state.name,
            fontFamily: iOSUIKit.largeTitleEmphasized.fontFamily,
            style: {
              // fontSize: iOSUIKit.largeTitleEmphasized.fontSize,
              fontSize: 45,
              color: iOSUIKit.largeTitleEmphasized.color,
              fontWeight: iOSUIKit.largeTitleEmphasized.fontWeight,
              // textAlign: "right",
              letterSpacing: iOSUIKit.largeTitleEmphasized.letterSpacing,
            }
          }}
          placement="left"
          containerStyle={{
            justifyContent: "center",
            flex: 9.9,
          }}
          rightComponent={
            <Avatar
              size="small"
              rounded
              // source={{
              //   uri:
              //     "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              // }}
              source = {require("../../sample_images/me.jpg")}
              onPress={() => {
                return this.props.navigation.navigate("My");
              }}
              activeOpacity={0.7}
              containerStyle={{
                justifyContent: "center",
              }}
            />
          }
        />
        <Divider style={Style.divider_header}/>
      </View>
    );
  }
}

export default withNavigation(IOS11Header);
