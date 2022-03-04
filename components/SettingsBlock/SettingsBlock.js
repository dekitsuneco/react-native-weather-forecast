import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const SettingsBlock = () => {
  const [isChangingCity, setIsChangingCity] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    setCity(inputValue);
    setIsChangingCity(true);
  };

  const handlePress = () => {
    setIsChangingCity(false);
  };

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
        <View style={styles.tempSwitch}>
          <View style={styles.tempCelsius}>
            <Text style={styles.celsius}>C</Text>
          </View>
          <View style={styles.temperatureFahrenheit}>
            <Text style={styles.fahrenheit}>F</Text>
          </View>
        </View>
      </View>
    </View>
  );
  const bottomRow = (
    <View key="2" style={styles.bottomRow}>
      <View style={styles.setLocationCity}>
        <TouchableOpacity onPress={handlePress}>
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
  celsius: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  temperatureFahrenheit: {
    paddingHorizontal: 14,
  },
  fahrenheit: {
    color: 'white',
    opacity: 0.4,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 7,
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
