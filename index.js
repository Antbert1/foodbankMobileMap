/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import App from './App';
import {name as appName} from './app.json';

class Root extends React.Component {
    render() {
        var app = <App />;
        return <Provider store={store}>{app}</Provider>;
    }
}



AppRegistry.registerComponent(appName, () => Root);
