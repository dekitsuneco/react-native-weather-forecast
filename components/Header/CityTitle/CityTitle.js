import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CityTitle = () => {
  return (
    <View style={styles.cityTitleView}>
      <Text style={styles.cityTitle}>Moscow</Text>
    </View>
  );
};

export default CityTitle;

const styles = StyleSheet.create({
  cityTitleView: {
    paddingLeft: 25,
    paddingTop: 15,
  },
  cityTitle: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 35,
    lineHeight: 60,
    color: '#FFFFFF',
  },
});
