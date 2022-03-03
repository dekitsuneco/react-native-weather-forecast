import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TemperatureSwitch = () => {
  return (
    <View style={styles.temperatureSwitchView}>
      <View>
        <Text style={styles.temperatureSign}>º</Text>
      </View>
      <View style={styles.temperatureBtns}>
        <View>
          <Text style={styles.temperatureCelsius}>C</Text>
        </View>
        <View>
          <Text style={styles.temperatureFahrenheit}>F</Text>
        </View>
      </View>
    </View>
  );
};

export default TemperatureSwitch;

const styles = StyleSheet.create({
  temperatureSwitchView: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  temperatureSign: {
    paddingRight: 5,
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
  },
  temperatureBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
  },
  temperatureCelsius: {
    paddingHorizontal: 15,
    color: 'rgba(255, 255, 255)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    fontSize: 25,
    fontWeight: 'bold',
  },
  temperatureFahrenheit: {
    paddingHorizontal: 15,
    color: 'rgba(255, 255, 255, 1)',
    opacity: 0.4,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
