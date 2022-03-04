import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const SettingsBlock = () => {
  const [isChangingCity, setIsChangingCity] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('Moscow');

  const [isCelcius, setIsCelcius] = useState(true);

  const handleSubmit = () => {
    setCity(inputValue);
    setIsChangingCity(true);
  };

  const handleCityPress = () => {
    setIsChangingCity(false);
  };

  const handleTempPress = () => {
    setIsCelcius(!isCelcius);
  };

  const tempSwitch = isCelcius ? (
    <View style={styles.tempSwitch}>
      <TouchableOpacity onPress={handleTempPress}>
        <View style={{...styles.tempCelsius, ...styles.tempActive}}>
          <Text style={styles.active}>C</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTempPress}>
        <View style={{...styles.tempFahrenheit, ...styles.tempDisabled}}>
          <Text style={styles.disabled}>F</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.tempSwitch}>
      <TouchableOpacity onPress={handleTempPress}>
        <View style={{...styles.tempCelsius, ...styles.tempDisabled}}>
          <Text style={styles.disabled}>C</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTempPress}>
        <View style={{...styles.tempFahrenheit, ...styles.tempActive}}>
          <Text style={styles.active}>F</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const cityChange = (
    <TextInput
      style={styles.cityChange}
      placeholder="Type city.."
      type="text"
      defaultValue={city}
      value={inputValue}
      onChangeText={textValue => setInputValue(textValue)}
      onSubmitEditing={handleSubmit}
    />
  );

  const topRow = (
    <View key="1" style={styles.topRow}>
      <View style={styles.cityTitle}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.tempPanel}>
        <View style={styles.tempSign}>
          <Text style={styles.sign}>º</Text>
        </View>
        {tempSwitch}
      </View>
    </View>
  );
  const bottomRow = (
    <View key="2" style={styles.bottomRow}>
      <View style={styles.setLocationCity}>
        <TouchableOpacity onPress={handleCityPress}>
          <Text style={styles.locationCity}>Change city</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.setLocationCurrent}>
        <Text style={styles.locationCurrent}>🔺 Current location</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.settingsBlock}>
      {isChangingCity ? [topRow, bottomRow] : cityChange}
    </View>
  );
};

export default SettingsBlock;

const styles = StyleSheet.create({
  cityChange: {
    padding: 17,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    borderRadius: 4,
  },
  settingsBlock: {
    marginTop: 19,
    marginHorizontal: 19,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  cityTitle: {},
  city: {
    color: 'white',
    fontSize: 30,
  },
  tempPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempSign: {
    paddingRight: 9,
  },
  sign: {
    color: 'white',
    opacity: 0.4,
    fontSize: 18,
  },
  tempSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, .4)',
    borderRadius: 8,
  },
  tempCelsius: {
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  tempActive: {
    backgroundColor: 'rgba(255, 255, 255, .4)',
  },
  active: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tempFahrenheit: {
    paddingHorizontal: 14,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  tempDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  disabled: {
    color: 'white',
    opacity: 0.4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  setLocationCity: {},
  locationCity: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 15,
  },
  setLocationCurrent: {},
  locationCurrent: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 15,
  },
});
