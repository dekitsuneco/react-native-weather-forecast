import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WidgetBlock from './components/WidgetBlock/WidgetBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

const App = () => {
  // States:
  const [weatherData, setWeatherData] = useState({});

  const [requestedCity, setRequestedCity] = useState('Moscow');

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
          return 'partly_cloudy';
      }
    };

    return {
      city: data.name,
      temperature: normalizeTemp(data.main.temp),
      description: normalizeDescription(data.weather[0].description),
      status: normalizeStatus(data.weather[0].main),
      wind: normalizeWind(data.wind.speed),
      humidity: normalizeHumidity(data.main.humidity),
      pressure: normalizePressure(data.main.pressure),
      rainProb: normalizeRainProb(10), //TODO
    };
  };

  const temperatureConverter = {
    toCelcius: () =>
      setWeatherData(prev => ({
        ...prev,
        temperature: Math.round(prev.temperature * (9 / 5) + 32),
      })),
    toFahrenheit: () =>
      setWeatherData(prev => ({
        ...prev,
        temperature: Math.round((prev.temperature - 32) * (5 / 9)),
      })),
  };

  useEffect(() => {
    const fetchWeatherDataFromAPI = () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=bce68de2a52a0351de2783eff7e40797`;
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const normalizedWeatherData = normalizeDataFromAPI(data);

          setWeatherData(normalizedWeatherData);

          //!DEBUGGING
          console.log('________________________');
          console.log(Date.now().toLocaleString());
          //console.log(normalizedWeatherData);
          console.log(data.name);
          console.log('*************************');
          //!DEBUGGING
        })
        .catch(err => {
          //!DEBUGGING
          console.log(err);
          //!DEBUGGING

          Alert.alert(
            'Invalid city name',
            'Please enter an existing city name',
            [
              {
                text: 'Understood',
                style: 'cancel',
              },
            ],
            {cancelable: true},
          );
        });
    };

    fetchWeatherDataFromAPI();

    /*return () => {
      second;
    };*/
  }, [requestedCity]);

  return (
    <View style={styles.root}>
      <SettingsBlock
        temperatureConverter={temperatureConverter}
        city={weatherData.city}
        setRequestedCity={setRequestedCity}
      />
      <WidgetBlock weatherData={weatherData} />
      <InfoBlock weatherData={weatherData} />
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
