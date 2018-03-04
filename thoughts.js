import Expo, {SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { styles } from './styles.js';

//Connect to the datbase
const db = SQLite.openDatabase('app.db');

export default class ThoughtScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items : "yes",
		};


		db.transaction( tx => {
			tx.executeSql('select * from tbl2', [], (tx,results) => {
			var row = results.rows.item(0);	
				alert(row.content);
				this.setState({items: row.content});
			});
		});
	}

	render() {
		return ( <View><Text>{ this.state.items } </Text></View>);
	}
}
