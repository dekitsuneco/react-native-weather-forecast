import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LocationSwitch = () => {
  return (
    <View style={styles.locationSwitchView}>
      <View style={styles.locationCityView}>
        <Text style={styles.locationCity}>Change city</Text>
      </View>
      <View style={styles.locationCurrentView}>
        <Text style={styles.locationCurrent}>🔺 Current location</Text>
      </View>
    </View>
  );
};

export default LocationSwitch;

const styles = StyleSheet.create({
  locationSwitchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  locationCityView: {},
  locationCity: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 23,
    opacity: 0.5,
  },
  locationCurrentView: {},
  locationCurrent: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 23,
    opacity: 0.5,
  },
});
