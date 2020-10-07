import {Text, StyleSheet, View, CheckBox, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-ionicons';
import {deleteTodo, updateTodoCompleted} from '../actions/todosActions';
import {deleteTodoServer, updateTodoServer} from '../reducers/todo';
import {setDisabled} from 'react-native/Libraries/LogBox/Data/LogBoxData';

export const TodoItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <View style={styles.todo}>
        <CheckBox
          style={styles.completed}
          value={item.completed}
          onValueChange={(v) => dispatch(updateTodoServer(item, {completed: v}))}
        />
        <View style={styles.text_container}>
          <Text
            style={
              item.completed ? styles.todo_title_completed : styles.todo_title
            }>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.date_container}>
          <Text>{moment(item.date).format('L')}</Text>
        </View>
        <TouchableOpacity
          style={styles.todo_options}
          onPress={() => {
            dispatch(deleteTodoServer(item.id)).catch((e) =>
              console.log('Something went wrong'),
            );
          }}>
          <Icon name={'trash'} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  todo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  completed: {
    flexBasis: '10%',
  },
  text_container: {
    flexBasis: '60%',
  },
  todo_title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  todo_title_completed: {
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  date_container: {
    flexBasis: '20%',
    alignItems: 'center',
  },
  todo_options: {
    flexBasis: '10%',
    alignItems: 'center',
  },
});
