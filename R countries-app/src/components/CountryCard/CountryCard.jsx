import React from 'react';

const CountryCard = ({ country, onSelectCountry, darkMode }) => {
  const formatNumber = (nmb) => new Intl.NumberFormat('en-US').format(nmb);
  return (
    <div
      className={`country drop-shadow-bottom ${darkMode ? 'light-mode--elements' : ''}`}
      data-country={country.name}
      onClick={() => onSelectCountry(country)}
    >
      <div className="country__flag">
      <img  src={country.flag} alt={`${country.name} flag`} />

      </div>
      <div className="country__wrapper">
        <div className="country__wrapper__titles">
          <h2 className="country__name text-max-length">{country.name}</h2>
        </div>
        <div className="country__overview__wrapper">
          <div className="country__population--wrapper country__overview">
            <span className="country__population bold">Population:</span>
            <span className="country__population--name">{formatNumber(country.population)}</span>
          </div>
          <div className="country__region--wrapper country__overview">
            <span className="country__region bold"> Region:</span>
            <span className="country__region--name">{country.region}</span>
          </div>
          <div className="country__capital--wrapper country__overview">
            <span className="country__capital bold"> Capital:</span>
            <span className="country__capital--name">{country.capital || "Doesn't has any"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
