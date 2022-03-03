import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Main = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.weatherMainInfo}>
        <View style={styles.topRow}>
          <Text style={styles.weatherIcon}>⛅</Text>
          <Text style={styles.weatherTemperature}>19º</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.weatherDescription}>Mostly sunny</Text>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 9,
  },
  weatherIcon: {
    fontSize: 80,
    color: 'white',
    paddingRight: 5,
  },
  weatherTemperature: {
    fontSize: 80,
    color: 'white',
    transform: [{scaleX: 1}, {scaleY: 1.2}],
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherDescription: {
    fontSize: 20,
    color: 'white',
  },
});
