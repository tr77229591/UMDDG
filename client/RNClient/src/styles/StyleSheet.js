import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  signin_container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
    // marginLeft: 5,
    // marginRight: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  head: {
    flex: 1.5
  },
  body: {
    flex: 8.5
  },
  divider_header: {
    backgroundColor: "silver",
    flex: 0.1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -10
  },
  divider: {
    backgroundColor: "silver",
    // flex: 0.1,
    marginLeft: 10,
    marginRight: 10
    // marginTop: 0,
  },
  card_container: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 13,
    borderColor: "darkgrey",
    borderWidth: 1.5
  },
  my_head: {
    flex: 3
  },
  my_body: {
    flex: 7
  },
  video_head: {
    flex: 4
  },
  video_body: {
    flex: 6
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  content_margin: {
    marginLeft: 10,
    marginRight: 10
  },
  login_button: {
    marginLeft: 20,
    marginRight: 20
  }
});
