import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";
import { ButtonGroup } from "react-native-elements";
import { withNavigation } from "react-navigation";

class CalendarStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      buttons: ["Month", "Agenda"],
      data_one: {},
      data_two: {},
    };
    this.didFocusListener = this.props.navigation.addListener(
      "didFocus",
      () => {this.fetchCalendar();},
    );

    this.updateIndex = this.updateIndex.bind(this);
    this.onDayPress = this.onDayPress.bind(this);
    this.fetchCalendar = this.fetchCalendar.bind(this);
  }

  componentDidMount () {
    // fetch("http://10.8.207.25:8080/api/booking/cis8001", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // // .then(response => response.json())
    //   .then(response => response.json()).then(responseJSON => {
    //   console.log(responseJSON);
    //   console.log(responseJSON.payload);
    //   // console.log(responseJSON.payload2);
    //   this.setState({
    //     data: responseJSON.payload,
    //   });
    // }).catch(error => {
    //   console.error(error);
    // });
    // axios.defaults.baseURL="http://10.8.207.25:8080";
    // axios.get("/api/booking/cis8001").
    //   then(response => {console.log(response);});
  }

  fetchCalendar () {
    fetch("http://10.8.207.25:8080/api/booking/cis8001", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    // .then(response => response.json())
      .then(response => response.json()).then(responseJSON => {
      // console.log(responseJSON);
      console.log(responseJSON.payload);
      console.log(responseJSON.payload2);
      this.setState({
        data_two: responseJSON.payload,
      });
      let newObj = {};
      for (let date in responseJSON.payload2) {
        let value = responseJSON.payload2[date];
        // console.log(responseJSON.payload2[date]);
        newObj[value] = {marked: true};
      }
      this.setState({
        data_one: newObj,
      });

      console.log(this.state.data_one);
      console.log(this.state.data_two);

    }).catch(error => {
      console.error(error);
    });
  }

  componentWillUnmount () {
    this.didFocusListener.remove();
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render() {
    // const vacation = {
    //   key: "vacation",
    //   color: "red",
    //   selectedDotColor: "blue"
    // };
    // const message = {marked: true, dotColor: "red"};
    // const workout = { key: "workout", color: "green" };
    // const data = ["2018-10-25", "2018-10-26"];
    return (
      <View style={{ flex: 1 }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={this.state.buttons}
          containerStyle={{ height: 30 }}
          selectedButtonStyle={{ backgroundColor: "royalblue" }}
        />
        {/*<Divider style={Styles.divider} />*/}
        {do {
          if (this.state.selectedIndex === 0) {
            {
              <Calendar
                // Initially visible month. Default = Date()
                // current={"2018-10-21"}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={"1994-05-27"}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={"2099-12-31"}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                  console.log("selected day", day);
                  this.onDayPress(day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                  console.log("selected day", day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={"yyyy MM"}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                  console.log("month changed", month);
                }}
                // Hide month navigation arrows. Default = false
                // hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                // renderArrow={(direction) => ( <Arrow/> )}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                // hideDayNames={true}
                // Show week numbers to the left. Default = false
                // showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                theme={{
                  // textDayFontFamily: iOSUIKit.body.fontFamily,
                  // textMonthFontFamily: iOSUIKit.body.fontFamily,
                  // textDayHeaderFontFamily: iOSUIKit.body.fontFamily,
                  textMonthFontWeight: "bold"
                  // textDayFontSize: iOSUIKit.body.fontSize,
                  // textMonthFontSize: iOSUIKit.body.fontSize,
                  // textDayHeaderFontSize: iOSUIKit.body.fontSize
                }}
                markedDates={this.state.data_one}
                // markingType={"multi-dot"}
                // markedDates={{
                //   "2018-10-23": {
                //     selected: true,
                //     marked: true,
                //     selectedColor: "blue",
                //   },
                //   "2018-10-24": {marked: true},
                //   "2018-10-25": {
                //     marked: true,
                //     dotColor: "red",
                //     activeOpacity: 0,
                //   },
                //   "2018-10-26": {disabled: true, disableTouchEvent: true},
                // }}
              />;
            }
          } else {
            <Agenda
              items={this.state.data_two}
              // loadItemsForMonth={this.loadItems.bind(this)}
              // selected={"2017-05-16"}
              selected={this.state.selected}
              renderItem={CalendarStyle.renderItem.bind(this)}
              renderEmptyDate={CalendarStyle.renderEmptyDate.bind(this)}
              rowHasChanged={CalendarStyle.rowHasChanged.bind(this)}
            />;
          }
        }}
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = CalendarStyle.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: "Item for " + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  static renderItem(item) {
    console.log(item);
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  static renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  static rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  static timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default withNavigation(CalendarStyle);
