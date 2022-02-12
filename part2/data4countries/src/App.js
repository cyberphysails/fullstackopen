import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import CountryList from "./components/CountryList";
import Filter from "./components/Filter";

function App() {
  const [ countries, setCountries ] = useState([{name:{common:"test"}}]);
  const [ keyword, setKeyword ] = useState("");
  const countryNameArray = useMemo(
    () => 
      countries
        .map((el) => el.name.common)
        .filter((el) => el.toLowerCase().includes(keyword.toLowerCase())),
    [ countries, keyword ]
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
      <CountryList countries={countryNameArray} />
    </div>
  );
}

export default App;
