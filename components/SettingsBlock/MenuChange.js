import {StyleSheet, View} from 'react-native';
import React from 'react';
import TitleRow from './TitleRow';
import LocationRow from './LocationRow';

const MenuChange = ({
  city,
  setIsChangingCity,
  temperatureConverter,
  setRequestParams,
}) => {
  return (
    <View styles={styles.menuChange}>
      <TitleRow city={city} temperatureConverter={temperatureConverter} />
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
