const CountryList = ({ countries }) => {
    console.log(countries);
    if (countries.length > 10) {
        return <div><p>Too many match, specify another filter</p></div>
    }
    return (
        <div>
            {countries.map((el) => 
                <p key={el} >{el}</p>
            )}
        </div>
    )
}

export default CountryList;