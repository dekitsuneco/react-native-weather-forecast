import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoItem = ({title, value, scale, isBottomRow}) => {
  return (
    <View
      style={
        // eslint-disable-next-line react-native/no-inline-styles
        isBottomRow ? {...styles.infoItem, marginBottom: 0} : styles.infoItem
      }>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text>
        <Text style={styles.infoValue}>{value}</Text>
        <Text style={styles.infoValueScale}>{scale}</Text>
      </Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  infoItem: {
    marginBottom: 30,
  },
  infoTitle: {
    fontSize: 23,
    opacity: 0.5,
    color: 'white',
  },
  infoValue: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  infoValueScale: {
    fontSize: 23,
    color: 'white',
  },
});
