import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InfoItem from './InfoItem';

const InfoBlock = ({weatherReport}) => {
  const {wind, humidity, pressure, rainProb} = weatherReport;

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
      <View style={styles.leftCol}>
        <InfoItem
          title={windDataset.title}
          value={windDataset.value}
          scale={windDataset.scale}
        />
        <InfoItem
          title={humidityDataset.title}
          value={humidityDataset.value}
          scale={humidityDataset.scale}
        />
      </View>
      <View style={styles.rightCol}>
        <InfoItem
          title={pressureDataset.title}
          value={pressureDataset.value}
          scale={pressureDataset.scale}
        />
        <InfoItem
          title={rainProbDataset.title}
          value={rainProbDataset.value}
          scale={rainProbDataset.scale}
        />
      </View>
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
