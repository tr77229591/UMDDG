import React, { Component } from "react";
import { AsyncStorage, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import { iOSUIKit } from "react-native-typography";
import { withNavigation } from "react-navigation";
import TouchableScale from "react-native-touchable-scale";

const BodyContent = [
  {
    id: "order_all",
    display_name: "My orders",
    iconName: "shoppingcart",
    badge: {
      show: true,
      number: 10,
    },
  },
  {
    id: "payment_management",
    display_name: "Payment Management",
    iconName: "pay-circle-o1",
    badge: {
      show: false,
      number: 10,
    },
  },
  {
    id: "my_wallet",
    display_name: "My Wallet",
    iconName: "wallet",
    badge: {
      show: false,
      number: 10,
    },
  },
  {
    id: "my_coupon",
    display_name: "My Coupons",
    iconName: "tagso",
    badge: {
      show: true,
      number: 3,
    },
  },
  {
    id: "liked_item",
    display_name: "Liked Items",
    iconName: "hearto",
    badge: {
      show: false,
      number: 10,
    },
  },
  {
    id: "settings",
    display_name: "Settings",
    iconName: "setting",
    badge: {
      show: false,
      number: 10,
    },
  },
  {
    id: "signout",
    display_name: "Sign Out",
    iconName: "logout",
    badge: {
      show: false,
      number: 0,
    },
  },
];

class MyViewList extends Component<props> {

  constructor (props) {
    super(props);
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render () {
    return (
      <FlatList
        data={BodyContent}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          if (item.id === "signout") {
            return ( <ListItem
              containerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              title={item.display_name}
              titleStyle={{color: "red"}}
              leftIcon={
                <AntDesign name={item.iconName}
                           size={20}
                           color="red"/>
              }
              onPress={this._signOutAsync}
              topDivider={true}
            /> );
          } else {
            return ( <ListItem
              component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              containerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              title={item.display_name}
              titleStyle={iOSUIKit.title3}
              leftIcon={
                <AntDesign name={item.iconName}
                           size={20}
                           color="darkgrey"/>
              }
              rightIcon={<AntDesign name="right"
                                    size={20}
                                    color="darkgrey"/>}
              // topDivider={true}
              badge={
                item.badge.show === true
                  ? {
                    containerStyle: {backgroundColor: "red"},
                    value: item.badge.number,
                    textStyle: {
                      color: "white",
                    },
                  }
                  : null
              }
              onPress={() => {console.log("It works!");}}
            /> );
          }
        }}
      />
    );
  }
}

export default withNavigation(MyViewList);
