import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import SettingsBlock from './components/SettingsBlock/SettingsBlock';
import WidgetBlock from './components/WidgetBlock/WidgetBlock';
import InfoBlock from './components/InfoBlock/InfoBlock';

const App = () => {
  // States:
  const [weatherData, setWeatherData] = useState({});

  const [requestedCity, setRequestedCity] = useState('London');

  const [isRequestingCurrentLocation, setIsRequestingCurrentLocation] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Functions:
  const normalizeDataFromAPI = data => {
    const validateNumericData = value => {
      if (isNaN(value) || value === null) {
        throw new Error('Invalid data');
      }
    };
    const validateStringData = str => {
      if (!str) {
        throw new Error('Invalid data');
      }
    };

    const normalizeTemp = temperature => {
      validateNumericData(temperature);
      return Math.round(temperature - 273.15);
    };
    const normalizeWind = wind => {
      validateNumericData(wind);
      return Math.round(wind);
    };
    const normalizeHumidity = humidity => {
      validateNumericData(humidity);
      return Math.round(humidity);
    };
    const normalizePressure = pressure => {
      validateNumericData(pressure);
      return Math.round(pressure * 0.75006);
    };
    const normalizeRainProb = rainProb => {
      validateNumericData(rainProb);
      return Math.round(rainProb);
    };
    const normalizeDescription = description => {
      validateStringData(description);
      return description[0].toUpperCase() + description.substring(1);
    };
    const normalizeStatus = status => {
      validateStringData(status);

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
    //!TEST
    const API = {
      KEY: 'bce68de2a52a0351de2783eff7e40797',
      URL: '',
    };
    //!TEST

    /*const API_SETTINGS = {
      API_KEY: 'bce68de2a52a0351de2783eff7e40797',
      URL: '',
    };

    if (isRequestingCurrentLocation) {

      console.info('--------------------------------');
      Geolocation.getCurrentPosition(
        info => console.log(info),
        err => console.error(err),
        {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000},
      );
      console.info('******************************');
      //*

      API_SETTINGS.URL = `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${API_SETTINGS.API_KEY}`;
    } else {
      API_SETTINGS.URL = `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${API_SETTINGS.API_KEY}`;
    }*/

    const fetchWeatherDataFromAPI = URL => {
      //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${API_SETTINGS.API_KEY}`;

      setIsLoading(true);
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          const normalizedWeatherData = normalizeDataFromAPI(data);

          setWeatherData(normalizedWeatherData);

          //!DEBUGGING
          /*console.group();
          console.log(Date.now().toLocaleString());
          console.dir(normalizedWeatherData);
          console.log(data.name);
          console.groupEnd();*/
          //!DEBUGGING
        })
        .catch(err => {
          //!DEBUGGING
          //console.error(err);
          //!DEBUGGING
          if (err.message === 'Invalid data') {
            Alert.alert(
              'External error',
              "Sorry, we can't get weather forecast for the city. Please. try again later",
              [
                {
                  text: 'Understood',
                  style: 'cancel',
                },
              ],
              {cancelable: true},
            );
          } else {
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
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    //!TEST
    if (isRequestingCurrentLocation) {
      console.log('TRUE');
      Geolocation.getCurrentPosition(
        info => {
          console.log(info);

          setIsRequestingCurrentLocation(false);
          const {coords} = info;
          const {latitude, longitude} = coords;
          API.URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API.KEY}`;

          fetchWeatherDataFromAPI(API.URL);
        },
        err => console.error(err),
        {enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000},
      );
    } else {
      console.log('FALSE');
      API.URL = `https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${API.KEY}`;

      fetchWeatherDataFromAPI(API.URL);
    }
    //!TEST

    //fetchWeatherDataFromAPI();

    /*return () => {
      second;
    };*/
  }, [requestedCity, isRequestingCurrentLocation]);

  return (
    <View style={styles.root}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <SettingsBlock
            temperatureConverter={temperatureConverter}
            city={weatherData.city}
            setRequestedCity={setRequestedCity}
            setIsRequestingCurrentLocation={setIsRequestingCurrentLocation}
          />
          <WidgetBlock weatherData={weatherData} />
          <InfoBlock weatherData={weatherData} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(73, 140, 236, 1)',
    //backgroundColor: 'red',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
