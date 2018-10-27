import React from "react";
import { SafeAreaView } from "react-native";
import { Styles } from "../../styles/StyleSheet";
import { SearchBar } from "react-native-elements";

export default class FleaMarketScreen extends React.Component {
  render () {
    return (
      <SafeAreaView style={Styles.container}>

        <SearchBar
          // ref={search => this.search = search}
          // showLoading={!!this.search.focus()}
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
          containerStyle={{backgroundColor: "white"}}
        />
      </SafeAreaView>
    );
  }
}
