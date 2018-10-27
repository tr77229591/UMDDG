import React from "react";
import { SafeAreaView, View } from "react-native";
import IOS11Header from "../../styles/Header";
import { Styles } from "../../styles/StyleSheet";
import { Button, ListItem, SearchBar } from "react-native-elements";
import { Col, Grid, Row } from "react-native-easy-grid";
import TouchableScale from "react-native-touchable-scale";

export default class MallScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.head}>
          <IOS11Header text={this.props.navigation.state.routeName} />
        </View>
        <View style={Styles.body}>
          <SearchBar
            // ref={search => this.search = search}
            // showLoading={!!this.search.focus()}
            platform="ios"
            cancelButtonTitle="Cancel"
            placeholder="Search"
            containerStyle={{ backgroundColor: "white" }}
          />

          <Grid style={Styles.content_margin}>
            <Col style={Styles.signin_container}>
              <Row style={Styles.signin_container}>
                <Button
                  title="MOOC"
                  // loading
                  // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                  titleStyle={{fontWeight: "700"}}
                  buttonStyle={{
                    backgroundColor: "#5f818f",
                    width: 160,
                    height: 160,
                    borderColor: "transparent",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("MoocEntry");
                  }}
                />
              </Row>
              <Row style={Styles.signin_container}>
                <Button
                  title="TRADE MARKET"
                  // loading
                  // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                  titleStyle={{fontWeight: "700"}}
                  buttonStyle={{
                    backgroundColor: "#818368",
                    width: 160,
                    height: 160,
                    borderColor: "transparent",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("TradeMarketEntry");
                  }}
                />
              </Row>
            </Col>
            <Col style={Styles.signin_container}>
              <Row style={Styles.signin_container}>
                <Button
                  title="FLEA MARKET"
                  // loading
                  // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                  titleStyle={{fontWeight: "700"}}
                  buttonStyle={{
                    backgroundColor: "#BFB8BE",
                    width: 160,
                    height: 160,
                    borderColor: "transparent",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("FleaMarketEntry");
                  }}
                />
              </Row>
              <Row style={Styles.signin_container}>
                <Button
                  title="MORE"
                  // loading
                  // loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                  titleStyle={{fontWeight: "700"}}
                  buttonStyle={{
                    backgroundColor: "#AE7D6F",
                    width: 160,
                    height: 160,
                    borderColor: "transparent",
                    borderWidth: 1,
                    borderRadius: 15,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("FleaMarketEntry");
                  }}
                />
              </Row>
            </Col>
          </Grid>
        </View>
      </SafeAreaView>
    );
  }
}
