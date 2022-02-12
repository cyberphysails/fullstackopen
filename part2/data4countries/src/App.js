import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import Filter from "./components/Filter";

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ keyword, setKeyword ] = useState("");
  const [ detailedCountryName, setDetailedCountryName ] = useState("");

  const countryNameArray = useMemo(
    () => 
      countries
        .map((el) => el.name.common)
        .filter((el) => el.toLowerCase().includes(keyword.toLowerCase())),
    [ countries, keyword ]
  )

  const detailedCountry = useMemo(
    () => countries.find(el => 
      el.name.common === detailedCountryName
    ),
    [ detailedCountryName ]
   )

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log("promise fullfilled", response.data[0]);
        setCountries(response.data);
      })
  },[])

  return (
    <div>
      <Filter keyword={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <CountryList countries={countryNameArray} onDetail={(value) => setDetailedCountryName(value)} />
      <CountryDetail country={detailedCountry} />
    </div>
  );
}

export default App;
