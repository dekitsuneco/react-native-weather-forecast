import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const LocationRow = ({setIsChangingCity}) => {
  const handleCityPress = () => {
    setIsChangingCity(false);
  };

  return (
    <View key="2" style={styles.locationRow}>
      <View style={styles.setLocationCity}>
        <TouchableOpacity onPress={handleCityPress}>
          <Text style={styles.locationCity}>Change city</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.setLocationCurrent}>
        <TouchableOpacity>
          <Text style={styles.locationCurrent}>🔺 Current location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationRow;

const styles = StyleSheet.create({
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setLocationCity: {},
  locationCity: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 15,
  },
  setLocationCurrent: {},
  locationCurrent: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 15,
  },
});
