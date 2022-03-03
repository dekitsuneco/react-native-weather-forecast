import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CityTitle from './CityTitle/CityTitle';
import LocationSwitch from './LocationSwitch/LocationSwitch';
import TemperatureSwitch from './TemperatureSwitch/TemperatureSwitch';

const Header = () => {
  return (
    <View>
      <CityTitle />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
