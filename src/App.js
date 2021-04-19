import "./App.css";
import { useState, useEffect } from "react";
import Country from "./components/Country";

// add a delete country button on Country component
// find a way to find out which specific country we have clicked on
// on the countries array, update state with all options but the one the user clicked on

function App() {
  const [countries, setCountries] = useState([]);
  const [selection, setSelection] = useState({});

  const getCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  };

  useEffect(getCountries, []);

  function removeCountry(countryName) {
    let newCountries = countries.filter(
      (country) => country.name !== countryName
    );
    setCountries(newCountries);
  }

  function userSelection(event) {
    const foundCountry = countries.find(
      (country) => country.name === event.target.value
    );
    setSelection(foundCountry);
  }
  return (
    <>
      <div className='App'>
        <select name='countries' id='countries-select' onChange={userSelection}>
          {countries.map((country) => {
            return (
              <option key={country.nativeName} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
        {Object.keys(selection).length > 0 ? (
          <Country {...selection} removeCountry={removeCountry} />
        ) : (
          "Please select a country"
        )}
      </div>
    </>
  );
}

export default App;
