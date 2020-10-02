import {Text, View, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {TodoItem} from '../components/TodoItem';
import {incrementDateByDays} from '../utils/utils';

export const Home = ({navigation}) => {
  const DATA = [];
  var today = new Date();
  for (var i = 0; i < 100; i++) {
    DATA.push({
      id: i.toString(),
      title: 'Title ' + i,
      description: 'Description ' + i,
      date: incrementDateByDays(today, i),
      completed: true,
    });
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.todo_container}>
        <View style={styles.lineStyle} />
        <TodoItem item={item} />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Todos</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title_container: {
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  todo_container: {
    height: 50,
    width: '100%',
    justifyContent: 'space-around',
    margin: 3,
  },
  lineStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
});
