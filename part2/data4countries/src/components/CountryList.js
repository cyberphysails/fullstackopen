const CountryList = ({ countries, onDetail }) => {
    // console.log("filtered counties", countries);
    if (countries.length > 10) {
        return <div><p>Too many match, specify another filter</p></div>
    } else if (countries.length === 1) {
        onDetail(countries[0]);
        return <></>
    }

    const handleClick = (country) => {
        return () => {onDetail(country)};
    }


    return (
        <div>
            {countries.map((el) => 
                <p key={el} >{el}<button onClick={handleClick(el)}>show</button></p>
            )}
        </div>
    )
}

export default CountryList;