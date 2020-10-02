import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  ScrollView,
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
          id: '100', // todo
          title: title,
          description: description,
          date: date.getTime(),
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
            style={[!validTitle && styles.fieldInvalid]}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              setValidTitle(true);
            }}
            underlineColorAndroid="black"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text>Description:</Text>
          <TextInput
            style={[!validTitle && styles.fieldInvalid]}
            multiline
            value={description}
            onChangeText={(text) => {
              setDescription(text);
              setValidDescription(true);
            }}
            underlineColorAndroid="black"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text onPress={() => showDatepicker()}>Date:</Text>
          <View style={styles.dateOptions}>
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
