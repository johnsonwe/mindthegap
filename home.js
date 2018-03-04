import Expo, {SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { styles } from './styles.js';

//Connect to the datbase
const db = SQLite.openDatabase('app.db');

//Example componenet that connects to the datbase
class Test extends React.Component {
constructor(props) {
	    super(props)

	    this.state = {
		          test: "",
		        };
	

	    db.transaction((tx) => {
		          tx.executeSql('select * from tbl1',[], (tx,results) => {
				  var len = results.rows.length;
				  alert(len);
				  if(len > 0) {
			  var row = results.rows.item(0);
				  this.setState({test: row.one});
				  }
				  else{
				  }
			  }, () => { alert("this failed"); });
						                                                   });

}
	render() {
		
		return (
			<Text>{  this.state.test }hello	</Text>
		);
	}
}

class Header extends React.Component {

	render () {
		return(
			<View><Text style={styles.header}>{ this.props.title } </Text></View>
		);
	}
}

class Journal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: ''};
	}

	add = () => {
		db.transaction(tx => {
			alert("this ran");
			tx.executeSql(
				"insert into tbl1 values(2,'4/4/18', ?)",[this.state.text]);
		});
	}

	render() {
		return(
		<TextInput
			style={{width: 200}}
		placeholder="What are you thinking today"
		onChangeText={(text) => this.setState({text})}
			onSubmitEditing={ this.add }
		/>
		);
	}
}

class HomeScreen extends React.Component {

	static navigationOptions = {
		title: 'Welcome',
	};
// Mount the database
//Create all the data for the app here
	componentDidMount() {
		    db.transaction(tx => {
			          tx.executeSql(
					          'create table if not exists tbl1 (journal_id int, date text, content text);'
					        );
			        });
//Create data here
		db.transaction(tx => {
			tx.executeSql("insert into tbl1 values(0, '10/12/13', 'Hello, this is my jounral')");
			tx.executeSql("insert into tbl1 values(1, '10/12/14', 'Hello, what')");
		}
		);
	}
// Render the main functions of the app	
  render() {
	  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
	    <Header title="My Journal" />
	    <Journal />
	    <Button 
	    title="See other peoples thoughts!"
	    onPress={() => {
			    navigate('Thoughts');}}
		    />
      </View>
    );
  }
}

export default HomeScreen;
