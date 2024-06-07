import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-gray-400 p-2 rounded-l"
        placeholder="Enter city name"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
