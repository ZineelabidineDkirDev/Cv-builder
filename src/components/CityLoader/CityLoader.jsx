import React from 'react';
import cityData from './CityData.json';

const CityLoader = ({ville}) => {
  return (
    <>
      <ul>
        {cityData.map((city, id) => (
          <li key={id}>
            {city.ville}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CityLoader;