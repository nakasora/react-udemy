const Filter = ({ nameForFilter, setNameForFilter }) => {
    return(
        <input type="text" value={nameForFilter} onChange={(e) => setNameForFilter(e.target.value)}/>
    );
}

export default Filter;