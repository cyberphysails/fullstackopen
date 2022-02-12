const CountryDetail = ({ country }) => {
    //console.log("detailedCountry", country);

    if (country === undefined) {
        return <></>;
    }

    return (
        <div>
            <h2>detailed Country {country.name.common}</h2>
            <p>{country.capital.reduce((a, v) => `${a} ${v}`, "Capital: ")}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map(el => 
                    <li key={el}>{el}</li>)}
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default CountryDetail