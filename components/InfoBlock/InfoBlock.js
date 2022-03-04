import {StyleSheet, View} from 'react-native';
import React from 'react';
import InfoCol from './InfoCol';

const InfoBlock = ({weatherReport}) => {
  const windDataset = {
    title: 'Wind',
    value: weatherReport.wind,
    scale: ' m/s, West',
  };
  const humidityDataset = {
    title: 'Humidity',
    value: weatherReport.humidity,
    scale: '%',
  };
  const pressureDataset = {
    title: 'Pressure',
    value: weatherReport.pressure,
    scale: ' mm Hg',
  };
  const rainProbDataset = {
    title: 'Rain Probality',
    value: weatherReport.rainProb,
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
    marginHorizontal: 19,
    marginBottom: 19,
  },
  leftCol: {},
  rightCol: {},
});
