import Expo, {SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from './home.js';
import ThoughtScreen from './thoughts.js';
import styles from './styles.js';

//Connect to the datbase
const db = SQLite.openDatabase('app.db');

const App = StackNavigator({
	Home: { screen: HomeScreen  },
	Thoughts: { screen: ThoughtScreen},
});



export default class demoApp extends React.Component {
	render() {
		return (
			<App />
		);
	}
}

