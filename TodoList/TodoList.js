import React,{ useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TodoList from './TodoListDisplay';


export default function App() {

	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

	addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
			setValue('');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Todo List</Text>
			
				<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					placeholder="What do you want to do today?"
					placeholderTextColor="#abbabb"
				/>

				<TouchableOpacity>
					<Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
				</TouchableOpacity>
				</View>
				<View style={{ width: '100%',height:80,backgroundColor:'pink' }}>
				<ScrollView style={{ width: '100%' }}>
			{todos.map(item => (
			
				<TodoList text={item.text} key={item.key}  />
				))}
		</ScrollView>
				
		</View>
			
			</View>
	
		
	);
}

const styles = StyleSheet.create({
	container: {
		
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'grey',
		flexDirection:'column'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10,
		backgroundColor:'red'
	},
	textInput: {
		flex: 1,
		height: 80,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});