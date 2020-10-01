import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          underlineColorAndroid="black"
          keyboardType="email-address"
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          underlineColorAndroid="black"
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={password}
        />
      </View>

      {validateEmail(email) && <Button title="Go home" onPress={() => navigation.navigate('Home')} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'grey',
    width: '100%',
  },
  inputWrapper: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
