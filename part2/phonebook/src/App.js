import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import FilterCpn from "./components/FilterCpn";
import NewPhone from "./components/NewPhone";
import Phonebook from "./components/Phonebook";

function App() {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterKeyword, setfilterKeyword] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:30001/persons")
      .then(response => {
        console.log(response);
        setPersons(response.data)
      })
  },[])

  const filteredPersons = useMemo(
    () => persons.filter((el) => 
        el.name.toLowerCase().indexOf(filterKeyword.toLowerCase()) !== -1
      ), 
    [persons, filterKeyword]
  );
  
  const saveNewPerson = (event) => {
    event.preventDefault();
    if (newName === "" || newNumber === ""){
      alert("please fill the data")
      return;
    }
    for (let i =0;i<persons.length;i++){
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const newPerson = { 
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(newPerson));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPhone 
        newName={newName} 
        newNumber={newNumber} 
        handleChangeNewName={(e) => setNewName(e.target.value)}
        handleChangeNewNumber={(e) => setNewNumber(e.target.value)}
        saveNewPerson={saveNewPerson}
        />
      <FilterCpn onChange={ (e)=> setfilterKeyword(e.target.value) } value={filterKeyword}/>
      <Phonebook persons={filteredPersons} keyword={filterKeyword}/>
    </div>
  )
}

export default App;
