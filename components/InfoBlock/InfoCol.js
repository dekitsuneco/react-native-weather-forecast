import {StyleSheet, View} from 'react-native';
import React from 'react';
import InfoItem from './InfoItem';

const InfoCol = ({datasets}) => {
  return (
    <View style={styles.infoCol}>
      {datasets.map((dataset, index) => (
        <InfoItem
          key={index}
          title={dataset.title}
          value={dataset.value}
          scale={dataset.scale}
        />
      ))}
    </View>
  );
};

export default InfoCol;

const styles = StyleSheet.create({
  infoCol: {},
});
