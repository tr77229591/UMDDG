import React from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Styles } from "../../../styles/StyleSheet";
import { Avatar, ListItem, SearchBar } from "react-native-elements";
import sampleData from "./sampleData";

export default class MoocScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      refreshing: false,
      // moocs: [
      //   {
      //     name: "brynn",
      //     avatar: "https://www.w3schools.com/howto/img_avatar.png",
      //     price: "150",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Howe",
      //     avatar:
      //       "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      //     price: "200",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Chen",
      //     avatar: "https://www.w3schools.com/w3images/avatar2.png",
      //     price: "233",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Rui",
      //     avatar:
      //       "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
      //     price: "345",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Tang",
      //     avatar:
      //       "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
      //     price: "678",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Yan",
      //     avatar: "https://www.w3schools.com/w3images/avatar6.png",
      //     price: "110",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Zhong",
      //     avatar:
      //       "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-10.jpg",
      //     price: "134",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Zeng",
      //     avatar:
      //       "https://i.pinimg.com/originals/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg",
      //     price: "455",
      //     howmany: "1000",
      //   },
      //   {
      //     name: "Huang",
      //     avatar:
      //       "https://png2.kisspng.com/20180717/rbs/kisspng-avatar-youtube-person-kahoot-a-roommate-who-plays-with-a-cell-phone-5b4d74013a8557.8284261615318026252397.png",
      //     price: "679",
      //     howmany: "1000",
      //   },
      // ]
      moocs: sampleData,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    // fetchData().then(() => {
    this.setState({refreshing: false});
    // });
  };

  static navigationOptions = {header: null};

  render () {
    return (
      <SafeAreaView style={Styles.container}>
        <SearchBar
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
          containerStyle={{backgroundColor: "white"}}
        />
        <FlatList
          renderItem={({item}) => (
            <ListItem
              title={item.name}
              titleStyle={{
                fontSize: 25,
              }}
              subtitle={
                <View style={{flex: 1}}>
                  <View style={{flex: 5}}>
                    <Text style={{fontSize: 18, color: "orange"}}>
                      {"$" + item.price + " or 30 credit"}
                    </Text>
                  </View>
                  <View style={{flex: 5}}>
                    <Text style={{fontSize: 13, color: "grey"}}>
                      {item.howmany + " bought"}
                    </Text>
                  </View>
                </View>
              }
              subtitleStyle={{
                fontColor: "orange",
              }}
              // leftAvatar={{source: {uri: item.avatar}}}
              leftElement={
                <Avatar
                  size={120}
                  avatarStyle={{
                    borderRadius: 12,
                  }}
                  // rounded
                  source={{uri: item.avatar}}
                  // onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              }
              onPress={() => {
                this.props.navigation.navigate("MoocVideo", {
                  // name: this.state.name,
                  // avatar: this.state.avatar,
                  vURL: item.vURL,
                  comments: item.comments,
                  name: item.name,
                  teacher: item.teacher,
                  avatar: item.avatar,
                  description: item.description,
                });
              }}
            />
          )}
          data={this.state.moocs}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </SafeAreaView>
    );
  }
}
