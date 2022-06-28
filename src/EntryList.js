import { useState } from "react"
// importi useState hook from react liberrary//
function EntryList(props) {
    //defining EntryList function//
    const [items, setitems] = useState(props.items)
    // defining useState var and assing 
    return (<>
        <ul>{items.map(function (item, index) {
            // adding unordered list tag and looping arround items by using map function //
            return <li key={index}>
                <input type="text" value={item} onChange={function (event) {
                    // inside list items tag adding input tag for text input and assinig its default value to item; also adding onChange function for changing the fields contents //
                    const newValue = event.target.value;
                    // defining newValue getting the new Vakue of the input
                    const itemArrayCopy = [...items];
                    // defining a new var for cloning the items 
                    itemArrayCopy[index] = newValue;
                    // updating the new array value using the index paramter
                    setitems(itemArrayCopy);
                    // setting setItems fun for setting the new array as a vlue 
                }} />
                <button onClick={function () {
                    const itemArrayCopy = [...items];
                    itemArrayCopy.splice(1, 1);
                    setitems(itemArrayCopy);
                }}>X</button>

            </li>
        })}</ul>
        <button onClick={function () {
            const itemArrayCopy = [...items];
            itemArrayCopy.push("");
            setitems(itemArrayCopy);
        }}>Add</button>
    </>)
}
export default EntryList;

