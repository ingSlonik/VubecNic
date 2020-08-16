/**
 * Sample React Native App for Absolutely nothing
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(): React$Node {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.test}>Vůbec nic!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
});
