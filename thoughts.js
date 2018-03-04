import Expo, {SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { styles } from './styles.js';

//Connect to the datbase
const db = SQLite.openDatabase('app.db');

export default class ThoughtScreen extends React.Component {

	render() {
		return ( <View><Text>Hey, This actually works</Text></View>);
	}
}
