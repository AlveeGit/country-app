import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <h1>Welcome To All Countries Information Site</h1>
            <h3>Countries in total : {countries.length}</h3>
            <Search></Search>
            <Sort></Sort>
            
                <div className='countries-container'>
                    {
                        countries.map(country =>
                            <Country
                                country={country}
                                key={country.cca3}
                            >

                            </Country>
                        )
                    }
                </div>
           

        </div>
    );
};

export default Countries;