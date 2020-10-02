import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {dateToDDMMYYY} from '../utils/utils';
import ScreenTitle from '../components/screenTitle';

export const AddTodo = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [validTitle, setValidTitle] = useState(true);
  const [description, setDescription] = useState('');
  const [validDescription, setValidDescription] = useState(true);
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
      setValidTitle(false);
      bool = false;
    }

    if (description.length === 0) {
      setValidDescription(false);
      bool = false;
    }

    if (bool) {
      navigation.navigate('Home', {
        new_todo: {
          id: 100, // todo
          title: title,
          description: description,
          date: date.getTime(),
          completed: false,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTitle>Add Todo</ScreenTitle>

      <View style={styles.input_group}>
        <Text>Title:</Text>
        <TextInput
          style={validTitle ? styles.field : styles.field_invalid}
          value={title}
          onChangeText={(text) => {
            setTitle(text);
            setValidTitle(true);
          }}
        />
      </View>

      <View style={styles.input_group}>
        <Text>Description:</Text>
        <TextInput
          style={validDescription ? styles.field : styles.field_invalid}
          multiline
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            setValidDescription(true);
          }}
        />
      </View>

      <View style={styles.input_group}>
        <Text onPress={() => showDatepicker()}>Date:</Text>
        <View style={styles.date_options}>
          <Text onPress={showDatepicker}>{dateToDDMMYYY(date)}</Text>
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
        </View>
      </View>

      <Button title="Add Todo" onPress={checkTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_group: {
    width: '60%',
  },
  date_options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  field: {},
  field_invalid: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
