import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<
    { city: string; temperature: number; description: string }[]
  >([]);

  const fetchWeather = async (city: string) => {
    const apiKey = '702c6621b62db892d17768c0f82aea6e';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    const newWeatherData = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
    setWeatherData((prevData) => [...prevData, newWeatherData]);
  };

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };
  
  return (
    <Router>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<WeatherList weatherData={weatherData} />} />
      </Routes>
    </Router>
  );
};

export default App;
