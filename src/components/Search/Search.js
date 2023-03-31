import React, { useEffect, useState } from 'react';

const Search = () => {

    const [searchedCountries, setSearchedCountries] = useState([]);

    const searchCountry = () => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        // clear data
        searchField.value = '';
        // const url = `https://restcountries.com/v3.1/name/${searchText}`;
        // return url;
    };

    // console.log(searchCountry);

    // const temp = searchCountry();

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setSearchedCountries(data))
    // }, [])


    return (
        <div>
            <div className=''>

                <input type="text" id='search-field' placeholder='Type a country name' />
                <button onClick={searchCountry}>Search</button>
                <p>Searched results : {searchedCountries}</p>
            </div>
        </div>
    );
};

export default Search;