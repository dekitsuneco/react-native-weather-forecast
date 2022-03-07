import {StyleSheet, View} from 'react-native';
import React from 'react';
import InfoCol from './InfoCol';

const InfoBlock = ({weatherData}) => {
  const windDataset = {
    title: 'Wind',
    value: weatherData.wind,
    scale: ' m/s, West',
  };
  const humidityDataset = {
    title: 'Humidity',
    value: weatherData.humidity,
    scale: '%',
  };
  const pressureDataset = {
    title: 'Pressure',
    value: weatherData.pressure,
    scale: ' mm Hg',
  };
  const rainProbDataset = {
    title: 'Rain Probality',
    value: weatherData.rainProb,
    scale: '%',
  };

  return (
    <View style={styles.infoBlock}>
      <InfoCol datasets={[windDataset, humidityDataset]} />
      <InfoCol datasets={[pressureDataset, rainProbDataset]} />
    </View>
  );
};

export default InfoBlock;

const styles = StyleSheet.create({
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 19,
    marginHorizontal: 19,
  },
});
