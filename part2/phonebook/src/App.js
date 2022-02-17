import phoneBookService from "./services/phonebook";
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
    // axios
    //   .get("http://localhost:30001/persons")
    //   .then(response => {
    //     console.log(response);
    //     setPersons(response.data)
    //   })
    phoneBookService
      .getAll()
      .then(response => {
        setPersons(response)
      })
      .catch(error => {
        console.error("get all data from server error", error)
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
    if (newName === "" || newNumber === "") {
      alert("please fill the data")
      return;
    }

    const newPerson = { 
      name: newName,
      number: newNumber
    };

    for (let i =0;i<persons.length;i++) {
      if (persons[i].name === newName) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          phoneBookService
            .update(persons[i].id, {...newPerson, id: persons[i].id })
            .then(response => {
              setPersons(persons.map( el => el.name === newName ? response : el))
            })
            .catch(error => {
              console.error("update data to server error", error)
            })
        }
        return;
      }
    }


    phoneBookService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response));
      })
      .catch(error => {
        console.error("create data to server error", error)
      })
    
  }

  const handleDelete = (id) => {
    return () => {
      const person =  persons.find(el => el.id === id);
      if (!window.confirm(`Are you sure to delete ${person.name}?`)){
        return ;
      }
      phoneBookService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((el) => el.id !== id));
        })
        .catch(error => {
          console.error("delete data from server error", error)
        })
    }
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
      <Phonebook persons={filteredPersons}  onDelete={handleDelete} />
    </div>
  )
}

export default App;
