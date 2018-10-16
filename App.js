/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { translate } from 'react-i18next';
import i18n from './src/I18n/index';
import { createStackNavigator } from 'react-navigation';

import Home from './src/screens/Home';
import Page2 from './src/screens/Page2';
import Test from './src/screens/Test'
import store from './src/redux/store';
import { Provider } from 'react-redux';


const Stack = createStackNavigator({
  Home: {
    screen: Test
  },
  // Page2: { screen: Page2 }
});

const WrappedStack = ({ t }) => {
  return <Stack screenProps={{ t }} />;
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default ReloadAppOnLanguageChange;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReloadAppOnLanguageChange />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
