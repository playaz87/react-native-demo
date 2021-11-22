/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './Components/Header';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.appHeader}>
      <Header />
    </View>

  );
};

const styles = StyleSheet.create({
  appHeader: {
    paddingTop: 60,
  },
});

export default App;
