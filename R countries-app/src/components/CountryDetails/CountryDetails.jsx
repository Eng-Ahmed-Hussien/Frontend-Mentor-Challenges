import React from 'react';
import MapComponent from '../MapComponent/MapComponent';

const CountryDetails = ({ country, onBack, allCountries, onSelectCountry, darkMode }) => {
  const firstLetterUpper = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : '');

  // Find border countries from allCountries using the alpha3Code field
  const borderCountries = country.borders
    ? allCountries.filter((c) => country.borders.includes(c.alpha3Code))
    : [];

  return (
    <div className="country__details">
      <div className="container__details">
        <div
          className={`country__details__back--btn style--button ${darkMode ? 'light-mode--elements' : ''}`}
          onClick={onBack}
        >
          <div className="country__details__btn__wrapper">
            <span className="country__details__back-icon">
              <svg className="svg--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(235,235,235)">
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="country__details__back">Back</span>
          </div>
        </div>
        <div className="country__details--flex">
          <img className="country__details__flag" src={country.flag} alt={`${country.name} flag`} />
          <div className="country__details__container">
            <div className="wrapper__titles">
              <h2 className="country__details__title text-max-length">{country.name}</h2>
              <span className="country__details__title--secondary">{country.name}</span>
            </div>
            <div className="wrapper__section--flex">
              <section className="country__details__section-one">
                <div className="country__details__nativename--wrapper country__details__wrapper">
                  <span className="country__details__nativename bold">Native Name:</span>
                  <span className="country__details__nativename--value country__details--name">
                    {country.nativeName}
                  </span>
                </div>
                <div className="country__details__population--wrapper country__details__wrapper">
                  <span className="country__details__population bold">Population:</span>
                  <span className="country__details__population--value country__details--name">
                    {country.population === 0
                      ? 'uninhabited'
                      : new Intl.NumberFormat('en-US').format(country.population)}
                  </span>
                </div>
                <div className="country__details__region--wrapper country__details__wrapper">
                  <span className="country__details__region bold">Region:</span>
                  <span className="country__details__region--value country__details--name">{country.region}</span>
                </div>
                <div className="country__details__subregion--wrapper country__details__wrapper">
                  <span className="country__details__subregion bold">Sub Region:</span>
                  <span className="country__details__subregion--value country__details--name">{country.subregion}</span>
                </div>
                <div className="country__details__capital--wrapper country__details__wrapper">
                  <span className="country__details__capital bold">Capital:</span>
                  <span className="country__details__capital--value country__details--name text-max-length">
                    {country.capital || "Doesn't has any"}
                  </span>
                </div>
              </section>
              <section className="country__details__section-two">
                <div className="country__details__domain--wrapper country__details__wrapper">
                  <span className="country__details__domain bold">Top Level Domain:</span>
                  <span className="country__details__domain--value country__details--name">
                    {country.topLevelDomain && country.topLevelDomain[0]}
                  </span>
                </div>
                <div className="country__details__currencies--wrapper country__details__wrapper">
                  <span className="country__details__currencies bold">Currencies:</span>
                  <span className="country__details__currencies--value country__details--name">
                    {country.currencies ? country.currencies[0].name : "Doesn't has any"}
                  </span>
                </div>
                <div className="country__details__languages--wrapper country__details__wrapper">
                  <span className="country__details__languages bold">Languages:</span>
                  <span className="country__details__languages--value country__details--name">
                    {country.languages &&
                      firstLetterUpper(country.languages[0].nativeName)} ({country.languages && firstLetterUpper(country.languages[0].name)})
                  </span>
                </div>
              </section>
            </div>
            <div className="country__details__container--border">
              <p className="country__details__border-title">Border Countries:</p>
              <div className="country__details__wrapper__border-countries">
                {borderCountries.length > 0 ? (
                  borderCountries.map((borderCountry) => (
                    <span
                      key={borderCountry.name}
                      className={`country__details__border style--button ${
                        darkMode ? 'light-mode--elements' : ''
                      }`}
                      onClick={() => onSelectCountry(borderCountry)}
                    >
                      {borderCountry.name}
                    </span>
                  ))
                ) : (
                  <span className="country__details__border style--button">None</span>
                )}
              </div>
            </div>
            <div className="container__map">
              <MapComponent country={country} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
