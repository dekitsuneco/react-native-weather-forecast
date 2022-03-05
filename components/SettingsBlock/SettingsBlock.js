import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CityChange from './CityChange';
import MenuChange from './MenuChange';

const SettingsBlock = ({
  city,
  setCity,
  toCelcius,
  toFahrenheit,
  setRequestedCity,
}) => {
  const [isChangingCity, setIsChangingCity] = useState(true);

  return (
    <View style={styles.settingsBlock}>
      {isChangingCity ? (
        <MenuChange
          city={city}
          setIsChangingCity={setIsChangingCity}
          toCelcius={toCelcius}
          toFahrenheit={toFahrenheit}
        />
      ) : (
        <CityChange
          city={city}
          setCity={setCity}
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
