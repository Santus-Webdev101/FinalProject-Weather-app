import React from 'react';
import WeatherCard from './WeatherCard';

interface WeatherListProps {
  weatherData: { city: string; temperature: number; description: string }[];
}

const WeatherList: React.FC<WeatherListProps> = ({ weatherData }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {weatherData.map((data, index) => (
        <WeatherCard
          key={index}
          city={data.city}
          temperature={data.temperature}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default WeatherList;