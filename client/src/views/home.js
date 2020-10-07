import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TodoItem, ScreenTitle} from '../components';
import Icon from 'react-native-ionicons';
import {loadTodosServer} from '../reducers/todo';

export const Home = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useRef(useDispatch());

  let todos = useSelector((state) => state.todosReducer.todos);

  useEffect(() => {
    dispatch
      .current(loadTodosServer())
      .catch((e) => e)
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.todo_container}>
        <View style={styles.lineStyle} />
        <TodoItem item={item} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ScreenTitle>Todos</ScreenTitle>
        {isLoading && (
          <ActivityIndicator size="large" animating={true} color="#0000ff" />
        )}
        {!isLoading && (
          <>
            {todos.length === 0 ? (
              <Text
                style={{
                  alignSelf: 'center',
                }}>
                You have no todos!
              </Text>
            ) : (
              <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </>
        )}
      </View>
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
    justifyContent: 'flex-start',
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
