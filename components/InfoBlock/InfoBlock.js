import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoBlock = ({weatherReport}) => {
  const {wind, humidity, pressure, rainProb} = weatherReport;

  return (
    <View style={styles.infoBlock}>
      <View style={styles.leftCol}>
        <View style={styles.infoItem}>
          <View style={styles.infoTitle}>
            <Text style={styles.title}>Wind</Text>
          </View>
          <View style={styles.infoValue}>
            <Text style={styles.fullValue}>
              <Text style={styles.value}>{wind}</Text>
              <Text style={styles.scale}> m/s, West</Text>
            </Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTitle}>
            <Text style={styles.title}>Humidty</Text>
          </View>
          <View style={styles.infoValue}>
            <Text style={styles.fullValue}>
              <Text style={styles.value}>{humidity}</Text>
              <Text style={styles.scale}>%</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightCol}>
        <View style={styles.infoItem}>
          <View style={styles.infoTitle}>
            <Text style={styles.title}>Pressure</Text>
          </View>
          <View style={styles.infoValue}>
            <Text style={styles.fullValue}>
              <Text style={styles.value}>{pressure}</Text>
              <Text style={styles.scale}> mm Hg</Text>
            </Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTitle}>
            <Text style={styles.title}>Rain probability</Text>
          </View>
          <View style={styles.infoValue}>
            <Text style={styles.fullValue}>
              <Text style={styles.value}>{rainProb}</Text>
              <Text style={styles.scale}>%</Text>
            </Text>
          </View>
        </View>
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
  infoItem: {
    marginBottom: 35,
  },
  infoTitle: {},
  title: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 15,
  },
  infoValue: {},
  fullValue: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 15,
  },
  value: {
    fontWeight: 'bold',
  },
  scale: {},
});
