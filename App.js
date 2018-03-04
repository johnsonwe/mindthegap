import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,} from 'react-navigation';

const Application = StackNavigator({
  Communal: { screen: Communal },
  Personal: { screen: Personal },
});

class Communal extends React.Component{
    static navigationOptions = {
    title: "What's on everyone's mind?",
  };
  render() {
	  return( <Text>{ navigationOptions } </Text>);
  }
}

class Personal extends React.Component{
    static navigationOptions = {
    title: "What's on your mind?",
  };
  render() {
	  return (<Text> { navigationOptions } </Text>);
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
