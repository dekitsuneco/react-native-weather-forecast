import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TempSwitch = ({toCelcius, toFahrenheit}) => {
  const [isCelcius, setIsCelcius] = useState(true);

  const handleTempPress = () => {
    setIsCelcius(!isCelcius);
    if (isCelcius) {
      toCelcius();
    } else {
      toFahrenheit();
    }
  };

  const activeCelcius = (
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
  );

  const activeFahrenheit = (
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

  return isCelcius ? activeCelcius : activeFahrenheit;
};

export default TempSwitch;

const styles = StyleSheet.create({
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
});
