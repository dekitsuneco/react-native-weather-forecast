import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoItem = ({title, value, isBottomRow}) => {
  return (
    <View
      style={
        // eslint-disable-next-line react-native/no-inline-styles
        isBottomRow ? {...styles.infoItem, marginBottom: 0} : styles.infoItem
      }>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoValue}>{value}</Text>
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
  infoValue: {},
});
