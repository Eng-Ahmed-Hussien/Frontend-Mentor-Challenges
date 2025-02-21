import React, { useState } from 'react';

const SearchFilter = ({ searchValue, onSearchChange, onRegionSelect, selectedRegion,darkMode }) => {
  const [showFilter, setShowFilter] = useState(false);
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const toggleFilter = () => setShowFilter(!showFilter);
  const handleRegionClick = (region) => {
    onRegionSelect(region);
    setShowFilter(false);
  };

  return (
    <div className="wrapper__form-filter" >
      <form  className={`app__search-bar drop-shadow-bottom ${darkMode ? 'light-mode--elements' : ''}`} onSubmit={(e) => e.preventDefault()}>
        <button className="search-bar__btn" type="submit">
          <svg className={`search-bar--svg ${darkMode ? 'light-mode--icon--search-bar' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          className={`search-bar__input text-max-length ${darkMode ? 'light-mode--elements' : ''}`}
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </form>
      <div className="app__filter drop-shadow-bottom" id="app__filter">
        <div className="wrapper__filter-default" onClick={toggleFilter}>
          <p className="filter__select">{selectedRegion || 'Filter by Region'}</p>
          <span>
            <svg className={`filter__icon ${darkMode ? 'light-mode--elements' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className={`wrapper__filter-select-value ${showFilter ? '' : 'filter--hidden ' } ${darkMode ? 'light-mode--elements' : ''}`}>
          {regions.map((region) => (
            <p key={region} className="filter-value" onClick={() => handleRegionClick(region)}>
              {region}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
