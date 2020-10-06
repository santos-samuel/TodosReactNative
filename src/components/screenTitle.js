import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const ScreenTitle = (props) => {
  return (
    <View style={styles.title_container}>
      <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title_container: {
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
