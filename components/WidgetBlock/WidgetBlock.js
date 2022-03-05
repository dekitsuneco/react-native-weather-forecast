import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WidgetBlock = ({weatherData}) => {
  /*const iconSet = {
    cloud: '☁',
    rain: '🌧',
    storm: '🌩',
    partly_cloudly: '⛅',
    sun: '🌞',
  };*/
  /*const iconSet = {
    cloud: './assets/img/cloud.png',
    rain: './assets/img/rain.png',
    storm: './assets/img/storm.png',
    partly_cloudly: './assets/img/partly cloudly.png',
    sun: './assets/img/sun.png',
  };*/
  /*          <Text style={styles.icon}>{iconSet[status]}</Text>*/
  const icons = {
    cloud: require('./assets/img/cloud.png'),
    rain: require('./assets/img/rain.png'),
    storm: require('./assets/img/storm.png'),
    partly_cloudy: require('./assets/img/partly_cloudy.png'),
    sun: require('./assets/img/sun.png'),
  };

  const {temperature, status, description} = weatherData;

  return (
    <View style={styles.widgetBlock}>
      <View style={styles.topRow}>
        <View style={styles.weatherIcon}>
          <Image style={styles.img} source={icons[status]} />
        </View>
        <View style={styles.weatherTemp}>
          <Text style={styles.temp}>{temperature}º</Text>
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
  img: {
    width: 160,
    height: 160,
    paddingRight: 10,
  },
  widgetBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 19,
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
