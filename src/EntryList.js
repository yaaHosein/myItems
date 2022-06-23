function EntryList(props) {
    console.log(props) 
    return (
        <>
            <ul> 
            {fruits.map(function (fruit) {
                return <li>{props.fruits.map}</li>
            })}
            </ul>
        </>
    )
}

export default EntryList;
