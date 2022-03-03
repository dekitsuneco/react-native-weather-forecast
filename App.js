import React, {useState} from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <View style={styles.root}>
      <Header />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(73, 140, 236, 1)',
  },
});

export default App;
