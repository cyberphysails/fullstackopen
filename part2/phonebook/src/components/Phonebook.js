
function Phonebook(props) {

    /*
    // 将 模糊搜索 操作放进当前组件进行
    
    const { keyword, persons} = persons , 
    
    if (keyword === undefined) {
        const filterPersons = persons;
    } else {
        const filterPersons = persons.filter( (el) => 
            el.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        )
    }
    
    return <div>{filterPersons}</div>
    
    */
    const { persons } = props;

    return (
        <div>
            <h2>Numbers</h2>
            <table>
                <thead><tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr></thead>
                <tbody>
                    {persons.map((el) => (
                        <tr key={el.name}>
                            <td>{el.name}</td>
                            <td>{el.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Phonebook;