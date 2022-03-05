import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CityChange from './CityChange';
import MenuChange from './MenuChange';

const SettingsBlock = ({temperatureConverter, city, setRequestedCity}) => {
  const [isChangingCity, setIsChangingCity] = useState(true);

  return (
    <View style={styles.settingsBlock}>
      {isChangingCity ? (
        <MenuChange
          city={city}
          setIsChangingCity={setIsChangingCity}
          temperatureConverter={temperatureConverter}
        />
      ) : (
        <CityChange
          city={city}
          setIsChangingCity={setIsChangingCity}
          setRequestedCity={setRequestedCity}
        />
      )}
    </View>
  );
};

export default SettingsBlock;

const styles = StyleSheet.create({
  settingsBlock: {
    marginTop: 19,
    marginHorizontal: 19,
    marginBottom: 10,
  },
});
