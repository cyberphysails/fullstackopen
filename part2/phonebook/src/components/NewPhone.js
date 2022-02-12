const NewPhone = (props)=>{
    const { 
        newName,
        newNumber,
        handleChangeNewName,
        handleChangeNewNumber,
        saveNewPerson,
    } = props;

    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={saveNewPerson} >
                <div>
                    name: <input value={newName} onChange={handleChangeNewName} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleChangeNewNumber} />
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
        </div>
    )
}

export default NewPhone;