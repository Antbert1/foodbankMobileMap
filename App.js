import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import MapComponent from './src/components/MapComponent';


class App extends Component {
  render() {
    debugger;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Services</Text>
        <MapComponent />
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