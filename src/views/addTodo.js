import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScreenTitle from '../components/screenTitle';
import moment from 'moment';

export const AddTodo = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [invalidTitle, setInvalidTitle] = useState(true);
  const [description, setDescription] = useState('');
  const [invalidDescription, setInvalidDescription] = useState(true);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const checkTodo = () => {
    let bool = true;
    if (title.length === 0) {
      setInvalidTitle(true);
      bool = false;
    }

    if (description.length === 0) {
      setInvalidDescription(true);
      bool = false;
    }

    if (bool) {
      navigation.navigate('Home', {
        new_todo: {
          id: '100', // todo
          title,
          description,
          date: moment(date.getTime()).valueOf(),
          completed: false,
        },
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenTitle>Add Todo</ScreenTitle>

        <View style={styles.inputGroup}>
          <Text>Title:</Text>
          <TextInput
            style={[invalidTitle && styles.fieldInvalid]}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              setInvalidTitle(false);
            }}
            underlineColorAndroid="black"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text>Description:</Text>
          <TextInput
            style={[invalidDescription && styles.fieldInvalid]}
            multiline
            value={description}
            onChangeText={(text) => {
              setDescription(text);
              setInvalidDescription(false);
            }}
            underlineColorAndroid="black"
          />
        </View>

        <TouchableOpacity
          onPress={() => showDatepicker()}
          style={styles.inputGroup}>
          <Text>Date:</Text>
          <Text>{moment(date).format('L')}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}
        </TouchableOpacity>
        <View style={styles.inputGroup}>
          <Button title="Add Todo" onPress={checkTodo} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputGroup: {
    width: '60%',
    marginBottom: 20,
  },
  dateOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldInvalid: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
