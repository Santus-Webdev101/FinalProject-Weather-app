import React from 'react';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
      <h2 className="text-2xl font-bold">{city}</h2>
      <p className="text-xl">{temperature}°C</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WeatherCard;
