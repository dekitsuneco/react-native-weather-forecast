import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CityChange from './CityChange';
import MenuChange from './MenuChange';

const SettingsBlock = ({
  temperatureConverter,
  city,
  scale,
  setRequestParams,
}) => {
  const [isChangingCity, setIsChangingCity] = useState(true);

  return (
    <View style={styles.settingsBlock}>
      {isChangingCity ? (
        <MenuChange
          city={city}
          scale={scale}
          setIsChangingCity={setIsChangingCity}
          temperatureConverter={temperatureConverter}
          setRequestParams={setRequestParams}
        />
      ) : (
        <CityChange
          city={city}
          setIsChangingCity={setIsChangingCity}
          setRequestParams={setRequestParams}
        />
      )}
    </View>
  );
};

export default SettingsBlock;

const styles = StyleSheet.create({
  settingsBlock: {
    marginTop: 19,
    marginBottom: 10,
    marginHorizontal: 19,
  },
});
