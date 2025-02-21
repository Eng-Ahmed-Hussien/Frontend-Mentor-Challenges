import React from 'react';
import CountryCard from '../CountryCard/CountryCard';

const CountryList = ({ countries, onSelectCountry, darkMode }) => {
  return (
    <div className="countries__container">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} onSelectCountry={onSelectCountry} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default CountryList;
