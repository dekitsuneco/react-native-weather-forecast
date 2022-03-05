import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

const CityChange = ({city, setIsChangingCity, setRequestedCity}) => {
  const [inputValue, setInputValue] = useState(city);

  const handleSubmit = () => {
    setIsChangingCity(true);
    setRequestedCity(inputValue);
  };

  return (
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
};

export default CityChange;

const styles = StyleSheet.create({
  cityChange: {
    padding: 17,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    borderRadius: 4,
  },
});
