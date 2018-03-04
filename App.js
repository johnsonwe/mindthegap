import Expo, {SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const db = SQLite.openDatabase('app.db');

class Header extends React.Component {
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

export default class App extends React.Component {

	componentDidMount() {
		    db.transaction(tx => {
			          tx.executeSql(
					          'create table if not exists tbl1 (one varchar(10) , two smallint);'
					        );
			        });
		db.transaction(tx => {
			tx.executeSql("insert into tbl1 values('what', 10)");
		}
		);
	}
	
  render() {
    return (
      <View style={styles.container}>
	    <Header />
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
