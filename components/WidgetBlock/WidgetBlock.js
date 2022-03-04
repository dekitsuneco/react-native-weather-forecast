import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WidgetBlock = ({temp, status, description}) => {
  const iconSet = {
    cloud: '☁',
    rain: '🌧',
    storm: '🌩',
    partly_cloudly: '⛅',
    sun: '🌞',
  };

  return (
    <View style={styles.widgetBlock}>
      <View style={styles.topRow}>
        <View style={styles.weatherIcon}>
          <Text style={styles.icon}>{iconSet[status]}</Text>
        </View>
        <View style={styles.weatherTemp}>
          <Text style={styles.temp}>{temp}º</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.weatherDescription}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default WidgetBlock;

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
