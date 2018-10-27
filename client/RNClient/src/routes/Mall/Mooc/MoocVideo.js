import React from "react";
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { Styles } from "../../../styles/StyleSheet";
import { Avatar, ButtonGroup, Divider, ListItem } from "react-native-elements";
import VideoPlayer from "react-native-video-controls";
import HTML from "react-native-render-html";

export default class MoocVideo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      refreshing: false,
      // name: props.navigation.getParam("name"),
      // avatar: props.navigation.getParam("avatar"),
      // data:sampleData,
      vURL: props.navigation.getParam("vURL"),
      comments: props.navigation.getParam("comments"),
      name: props.navigation.getParam("name"),
      teacher: props.navigation.getParam("teacher"),
      avatar: props.navigation.getParam("avatar"),
      description: props.navigation.getParam("description"),
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex: selectedIndex});
    console.log(this.state.description);
  }

  // static navigationOptions = ({navigation}) => {
  //   return {
  //     // headerTitle: navigation.getParam("name"),
  //     headerVisible: false,
  //     headerMode:"none"
  //   };
  // };

  _onRefresh = () => {
    this.setState({refreshing: true});
    // fetchData().then(() => {
    this.setState({refreshing: false});
    // });
  };

  render () {
    const buttons = ["Introduction", "Comments"];
    const {selectedIndex} = this.state;
    console.log(this.state.vURL);
    return (
      <View style={Styles.container}>
        <View style={Styles.video_head}>
          <VideoPlayer
            source={
              // require("./sampleVideo/1.mp4")
              // require(this.state.vURL)
              this.state.vURL
            }
            // Can be a URL or a local file.
            ref={ref => {
              this.player = ref;
            }}
            style={Styles.video}
            disableBack
          />
        </View>
        <View style={Styles.video_body}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 30}}
            selectedButtonStyle={{backgroundColor: "royalblue"}}
          />
          {do {
            if (this.state.selectedIndex === 0) {
              <ScrollView style={Styles.content_margin}>
                <ListItem
                  title={this.state.name}
                  subtitle={"Presenter: " + this.state.teacher}
                  subtitleStyle={{color: "grey"}}
                  leftElement={
                    <Avatar
                      size="large"
                      rounded
                      source={{uri: this.state.avatar}}
                      // onPress={() => console.log("Works!")}
                      activeOpacity={0.7}
                    />
                  }
                />
                <Divider style={{backgroundColor: "silver"}}/>
                <HTML
                  html={this.state.description}
                  imagesMaxWidth={Dimensions.get("window").width}
                />
              </ScrollView>;
            } else {
              <FlatList
                renderItem={({item}) => (
                  <ListItem
                    title={item.name + " comments:"}
                    subtitle={item.content}
                    subtitleStyle={{color: "grey"}}
                    leftAvatar={{source: {uri: item.avatar}}}
                  />
                )}
                data={this.state.comments}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }
              />;
            }
          }}
        </View>
      </View>
    );
  }
}
