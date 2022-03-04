import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WidgetBlock from './components/WidgetBlock/WidgetBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

const App = () => {
  const weatherData = {
    temperature: 20,
    description: 'Mostly sunny',
    wind: 5,
    humidity: 60,
    pressure: 752,
    rainProb: 10,
  };

  const {temperature, description, ...weatherReport} = weatherData;

  // States:
  const [temp, setTemp] = useState(temperature);

  // Functions:
  const toCelcius = () => {
    setTemp(temp * (9 / 5) + 32);
  };
  const toFahrenheit = () => {
    setTemp((temp - 32) * (5 / 9));
  };

  return (
    <View style={styles.root}>
      <SettingsBlock
        setTemp={setTemp}
        toCelcius={toCelcius}
        toFahrenheit={toFahrenheit}
      />
      <WidgetBlock temp={temp} description={description} />
      <InfoBlock weatherReport={weatherReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(73, 140, 236, 1)',
  },
});

export default App;
