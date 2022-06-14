function EntryList(props) {

    return
    (
        <ul>
            {fruits.map(function (fruit) {
                return <li>{props.fruits}</li>
            })}
        </ul>)

}
export default EntryList;
