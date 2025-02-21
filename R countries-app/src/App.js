import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchFilter from './components/SearchFilter/SearchFilter';
import CountryList from './components/CountryList/CountryList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v2/all');
        if (!res.ok) {
          throw new Error(`Cannot get the countries data, please try later [${res.status}]`);
        }
        const data = await res.json();
        setCountries(data);
        const randomNumber = () => Math.trunc(Math.random() * data.length);
        const randomCountries = Array.from({ length: 8 }, () => data[randomNumber()]);
        setDisplayCountries(randomCountries);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCountries();

    // Load dark mode from localStorage if available
    const savedMode = JSON.parse(localStorage.getItem('colorMode'));
    if (savedMode) {
      setDarkMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      localStorage.setItem('colorMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (!value) {
      if (selectedRegion) {
        setDisplayCountries(countries.filter((country) => country.region === selectedRegion));
      } else {
        // If search is empty, choose 8 random countries
        const randomNumber = () => Math.trunc(Math.random() * countries.length);
        const randomCountries = Array.from({ length: 8 }, () => countries[randomNumber()]);
        setDisplayCountries(randomCountries);
      }
    } else {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setDisplayCountries(filtered);
    }
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    const filtered = countries.filter((country) => country.region === region);
    setDisplayCountries(filtered);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          onBack={handleBack}
          allCountries={countries}
          onSelectCountry={handleSelectCountry}
          darkMode={darkMode}
        />
      ) : (
        <div className="overview">
          <div className="container">
            <SearchFilter
              searchValue={searchValue}
              onSearchChange={handleSearchChange}
              onRegionSelect={handleRegionSelect}
                selectedRegion={selectedRegion}
                 darkMode={darkMode}
            />
          </div>
          <CountryList
            countries={displayCountries}
            onSelectCountry={handleSelectCountry}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
}

export default App;
