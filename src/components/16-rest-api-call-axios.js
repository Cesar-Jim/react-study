import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCallAxiosSample = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlCountries = 'https://restcountries.eu/rest/v2/all';

  const hookCountries = () => {
    setLoading(true);

    axios.get(urlCountries).then(countries => {
      // console.log(countries.data);
      setCountries([...countries.data]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  useEffect(hookCountries, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul>
        {countries.map(country => (
          <li key={country.alpha2Code}>
            Name: {country.name} | <strong>Capital: {country.capital}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCallAxiosSample;
