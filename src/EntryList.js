import App from "./App";
function EntryList(props) {
    return
    (
        <ul>
            {fruits.map(function (fruit) {
                return <li>{fruit}</li>
            })}
        </ul>)

}
export default EntryList;
