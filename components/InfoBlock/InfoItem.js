import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoItem = ({title, value, scale}) => {
  return (
    <View style={styles.infoItem}>
      <View style={styles.infoTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.infoValue}>
        <Text style={styles.fullValue}>
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.scale}>{scale}</Text>
        </Text>
      </View>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
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
