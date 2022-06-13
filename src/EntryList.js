
function EntryList() {
    let fruits = ["carrot"]
    return
    (
        <ul>
            {fruits.map(function (fruit) {
                return <li>{fruit}</li>
            })}
        </ul>)

}
export default EntryList;
