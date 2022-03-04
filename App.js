import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WidgetBlock from './components/WidgetBlock/WidgetBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

const App = () => {
  return (
    <View style={styles.root}>
      <SettingsBlock />
      <WidgetBlock />
      <InfoBlock />
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
