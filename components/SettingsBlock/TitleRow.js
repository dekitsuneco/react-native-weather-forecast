import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TempSwitch from './TempSwitch';

const TitleRow = ({city, scale, temperatureConverter}) => {
  return (
    <View style={styles.titleRow}>
      <View style={styles.cityTitle}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.tempPanel}>
        <View style={styles.tempSign}>
          <Text style={styles.sign}>º</Text>
        </View>
        <TempSwitch temperatureConverter={temperatureConverter} scale={scale} />
      </View>
    </View>
  );
};

export default TitleRow;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  cityTitle: {},
  city: {
    color: 'white',
    fontSize: 30,
  },
  tempPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempSign: {
    paddingRight: 9,
  },
  sign: {
    color: 'white',
    opacity: 0.4,
    fontSize: 18,
  },
});
