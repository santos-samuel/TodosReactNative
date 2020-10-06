import {Text, StyleSheet, View, CheckBox, TouchableOpacity} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodoCompleted} from '../actions';
import Icon from 'react-native-ionicons';

export const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  let todo = item.todo;

  return (
    <View style={styles.wrapper}>
      <View style={styles.todo}>
        <CheckBox
          style={styles.completed}
          value={todo.completed}
          onValueChange={() => dispatch(updateTodoCompleted(todo.id))}
        />
        <View style={styles.text_container}>
          <Text
            style={
              todo.completed ? styles.todo_title_completed : styles.todo_title
            }>
            {todo.title}
          </Text>
          <Text>{todo.description}</Text>
        </View>
        <View style={styles.date_container}>
          <Text>{moment(todo.date).format('L')}</Text>
        </View>
        <TouchableOpacity style={styles.todo_options} onPress={() => dispatch(deleteTodo(todo.id))}>
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
