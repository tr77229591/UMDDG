import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Styles } from "../../styles/StyleSheet";
import MyHeader from "../../styles/MyHeader";
import { ListItem } from "react-native-elements";

export default class MyScreen extends React.Component {
  // static navigationOptions = {
  //   title: "My",
  // };

  constructor (props) {
    super(props);
    this.state = {
      dataSource: [
        {
          name: "Amy Farha",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          subtitle: "Vice President",
        },
        {
          name: "Chris Jackson",
          avatar_url:
            "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          subtitle: "Vice Chairman",
        }
      ]
    };
  }

  render() {
    // console.log(this);
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.my_head}>
          <MyHeader text={this.props.navigation.state.routeName}/>
        </View>
        <View style={Styles.my_body}>
          <FlatList
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                subtitle={item.subtitle}
                leftAvatar={{source: {uri: item.avatar_url}}}
              />
            )}
            data={this.state.dataSource}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
