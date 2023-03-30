import React from 'react';
import'./Country.css';

const Country = (props) => {

    const{name, area,flags, region} = props.country;

    return (
        <div className='country'>
            <h3>Country : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Region ; {region}</p>
            <p>Area ; {area}</p>
        </div>
    );
};

export default Country;