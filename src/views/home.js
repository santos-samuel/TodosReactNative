import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {TodoItem} from '../components/TodoItem';
import {incrementDateByDays} from '../utils/utils';
import Icon from 'react-native-ionicons';
import ScreenTitle from '../components/screenTitle';

export const Home = ({navigation, route}) => {
  const DATA = [];
  var today = new Date().getTime();
  for (var i = 0; i < 100; i++) {
    DATA.push({
      id: i.toString(),
      title: 'Title ' + i,
      description: 'Description ' + i,
      date: incrementDateByDays(today, i),
      completed: false,
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

  useEffect(() => {
    if (route.params?.new_todo) {
      DATA.push(route.params?.new_todo);
    }
  }, [route.params?.new_todo]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ScreenTitle>Todos</ScreenTitle>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floating_button}
        onPress={() => navigation.navigate('AddTodo')}>
        <Icon name="add" color={'white'} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  todo_container: {
    minHeight: 50,
    width: '100%',
    justifyContent: 'space-around',
    margin: 3,
  },
  lineStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  floating_button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 65,
    backgroundColor: '#0088ff',
    borderRadius: 100,
  },
});
