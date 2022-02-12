const Filter = ({ keyword, onChange }) => {
    return <p>find countries by name  <input value={keyword} onChange={onChange}/></p>
}

export default Filter;