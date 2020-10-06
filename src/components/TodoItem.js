import {Text, StyleSheet, View, CheckBox} from 'react-native';
import React from 'react';
import moment from 'moment';

export const TodoItem = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.todo}>
        <CheckBox style={styles.completed} value={item.completed} />
        <View style={styles.text_container}>
          <Text
            style={
              item.completed
                ? styles.todo_title_completed
                : styles.todo_title
            }>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </View>
        <Text style={styles.date}>{moment(item.date).format('L')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  todo: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  completed: {
    flexBasis: '10%',
  },
  text_container: {
    flexBasis: '65%',
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
  date: {
    flexBasis: '25%',
    textAlign: 'center',
  },
});
