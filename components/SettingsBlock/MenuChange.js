import {StyleSheet, View} from 'react-native';
import React from 'react';
import TitleRow from './TitleRow';
import LocationRow from './LocationRow';

const MenuChange = ({
  city,
  scale,
  setIsChangingCity,
  temperatureConverter,
  setRequestParams,
}) => {
  return (
    <View styles={styles.menuChange}>
      <TitleRow
        city={city}
        scale={scale}
        temperatureConverter={temperatureConverter}
      />
      <LocationRow
        setIsChangingCity={setIsChangingCity}
        setRequestParams={setRequestParams}
      />
    </View>
  );
};

export default MenuChange;

const styles = StyleSheet.create({
  menuChange: {},
});
