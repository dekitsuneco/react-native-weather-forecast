import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InfoItem from './InfoItem/InfoItem';

const Info = () => {
  return (
    <View style={styles.infoView}>
      <View style={styles.infoRow}>
        <InfoItem title="Wind" value="5 m/s, West" isBottomRow={false} />
        <InfoItem title="Pressure" value="752 mm" isBottomRow={true} />
      </View>
      <View style={styles.infoRow}>
        <InfoItem title="Humidity" value="60%" isBottomRow={false} />
        <InfoItem title="Rain chance" value="10%" isBottomRow={true} />
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 35,
    paddingHorizontal: 25,
    textAlign: 'center',
  },
  infoRow: {},
});
