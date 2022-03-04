import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Main = ({temp}) => {
  return (
    <View style={styles.widgetBlock}>
      <View style={styles.topRow}>
        <View style={styles.weatherIcon}>
          <Text style={styles.icon}>⛅</Text>
        </View>
        <View style={styles.weatherTemp}>
          <Text style={styles.temp}>{temp}º</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.weatherDescription}>
          <Text style={styles.description}>Mostly sunny</Text>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  widgetBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
  },
  weatherIcon: {},
  icon: {
    color: 'white',
    fontSize: 120,
  },
  weatherTemp: {},
  temp: {
    color: 'white',
    fontSize: 120,
    fontFamily: 'Lato',
  },
  bottomRow: {
    textAlign: 'center',
  },
  weatherDescription: {},
  description: {
    color: 'white',
    fontSize: 18,
  },
});
