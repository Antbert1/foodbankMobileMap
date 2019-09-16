import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import MapComponent from './src/components/MapComponent';


class App extends Component {
  buttonPressed() {
    debugger;
    let params = "key=AIzaSyD5HV9mXQMenEP_nfvo_jd2tYfXZV1kkEM&input=Food%20Bank&inputtype=textquery";
    var parameters = {
      key: "AIzaSyD5HV9mXQMenEP_nfvo_jd2tYfXZV1kkEM",
      input: "Food Bank",
      inputtype: "textquery"
    };
    fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?" + params)
    .then(response => response.json())
			.then(jsonResponse => {
        debugger;
				console.log(jsonResponse);
			})
    .catch(error=>console.log(error)) //to catch the errors if any

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Services</Text>
        <MapComponent />
        <View>
        <TouchableWithoutFeedback onPress={() => this.buttonPressed()}>
          <Text>Tap</Text>
        </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
	return {
		dataReducer: state.dataReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
module.exports = App;