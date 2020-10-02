import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import React, {useContext, useState} from 'react';
import AuthContext from '../store/authContext';

export const Login = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const {handleIsLoggedIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>Email:</Text>
        <TextInput
          style={isValidEmail ? styles.input : styles.input_error}
          placeholderTextColor="white"
          underlineColorAndroid="black"
          keyboardType="email-address"
          onChangeText={(text) => {
            setIsValidEmail(true);
            onChangeEmail(text);
          }}
          value={email}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text>Password:</Text>
        <TextInput
          style={isValidPassword ? styles.input : styles.input_error}
          placeholderTextColor="white"
          underlineColorAndroid="black"
          secureTextEntry={true}
          onChangeText={(text) => {
            setIsValidPassword(true);
            onChangePassword(text);
          }}
          value={password}
        />
      </View>

      <Button
        title="Login"
        onPress={() =>
          validateInput(email, password) ? handleIsLoggedIn(true) : null
        }
      />
    </View>
  );

  function validateInput(e, p) {
    let b1 = validateEmail(e);
    setIsValidEmail(b1);
    let b2 = validatePassword(p);
    setIsValidPassword(b2);
    return b1 && b2;
  }
};

const validateEmail = (e) => {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(e);
};

const validatePassword = (p) => {
  return p.length > 8;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
  },
  input_error: {
    borderColor: 'red',
    borderWidth: 1,
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
