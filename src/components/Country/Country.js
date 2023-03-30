import React from 'react';
import './Country.css';

const Country = (props) => {

    const { name, area, flags, region, capital, population } = props.country;

    return (
        <div className='country '>
            <h3>{name.common}</h3>
            <h6>Capital : {capital}</h6>
            <img src={flags.png} alt="" />
            <p>Region : {region}</p>
            <p>Area : {area}</p>
            <p>Population: {population}</p>
        </div>

    );
};

export default Country;