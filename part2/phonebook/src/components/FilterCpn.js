function FilterCpn({ onChange, value }) {
    return (
        <div>
            filter shown with <input value={value} onChange={onChange}/>
        </div>
    )
}

export default FilterCpn;