import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CityTitle from './CityTitle/CityTitle';
import TemperatureSwitch from './TemperatureSwitch/TemperatureSwitch';
import LocationSwitch from './LocationSwitch/LocationSwitch';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <CityTitle />
        <TemperatureSwitch />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 25,
    textAlign: 'center',
  },
});
