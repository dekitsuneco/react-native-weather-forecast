import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WidgetBlock from './components/WidgetBlock/WidgetBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

const App = () => {
  /*const weatherData = {
    temperature: 20,
    description: 'Mostly sunny',
    status: 'sun',
    wind: 5,
    humidity: 60,
    pressure: 752,
    rainProb: 10,
  };*/

  // States:
  const [weatherData, setWeatherData] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('Moscow');

  // Functions:
  const normalizeDataFromAPI = data => {
    const normalizeTemp = temperature => Math.round(temperature - 273.15);
    const normalizeWind = wind => Math.round(wind);
    const normalizeHumidity = humidity => Math.round(humidity);
    const normalizePressure = pressure => Math.round(pressure * 0.75006);
    const normalizeRainProb = rainProb => Math.round(rainProb);
    const normalizeDescription = description =>
      description[0].toUpperCase() + description.substring(1);
    const normalizeStatus = status => {
      switch (status) {
        case 'Thunderstorm':
          return 'storm';
        case 'Clouds':
          return 'cloud';
        case 'Clear':
          return 'sun';
        case 'Drizzle':
        case 'Rain':
        case 'Snow': //TODO
          return 'rain';
        default:
          //TODO
          return 'cloud';
      }
    };

    return {
      temperature: normalizeTemp(data.main.temp),
      description: normalizeDescription(data.weather[0].description),
      status: normalizeStatus(data.weather[0].main),
      wind: normalizeWind(data.wind.speed),
      humidity: normalizeHumidity(data.main.humidity),
      pressure: normalizePressure(data.main.pressure),
      rainProb: normalizeRainProb(10), //TODO
    };
  };

  useEffect(() => {
    const fetchWeatherDataFromAPI = () => {
      const URL =
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=bce68de2a52a0351de2783eff7e40797';
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const normalizedWeatherData = normalizeDataFromAPI(data);
          setWeatherData(normalizedWeatherData);
          setTemp(weatherData.temperature);

          //!DEBUGGING
          console.log('________________________');
          console.log(Date.now().toLocaleString());
          console.log(normalizedWeatherData);
          console.log('*************************');
        });
    };

    fetchWeatherDataFromAPI();

    /*return () => {
      second;
    };*/
  }, [weatherData.temperature]);

  const toCelcius = () => {
    setTemp(Math.round(temp * (9 / 5) + 32));
  };

  const toFahrenheit = () => {
    setTemp(Math.round((temp - 32) * (5 / 9)));
  };

  const {temperature, description, status, ...weatherReport} = weatherData;

  return (
    <View style={styles.root}>
      <SettingsBlock
        city={city}
        setCity={setCity}
        setTemp={setTemp}
        toCelcius={toCelcius}
        toFahrenheit={toFahrenheit}
      />
      <WidgetBlock temp={temp} status={status} description={description} />
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
