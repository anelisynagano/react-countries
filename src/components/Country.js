function Country({ name, region, flag, capital, removeCountry }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Region: {region}</p>
      <img src={flag} alt={`${name} flag`} width='200px' />
      <p>Capital: {capital}</p>
      <button onClick={() => removeCountry(name)}> Delete this country</button>
    </div>
  );
}

export default Country;
