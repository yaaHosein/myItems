import { useState } from "react";
// importi useState hook from react liberrary//
function EntryList(props) {
  //defining EntryList function//
    const [items, setitems] = useState(props.items);
  // defining useState var and assigning it to useState hoook
    return (
        <>
            <ul>
                {items.map(function (item, index) {
          // adding unordered list tag and looping arround items by using map function //
                    return (
                        <li key={index}>
                            <input
                                type="text"
                                value={item}
                                onChange={function (event) {
                                    // inside list items tag adding input tag for text input and assinig its default value to item; also adding onChange function for changing the fields contents //
                                    const newValue = event.target.value;
                                    // defining newValue getting the new Vakue of the input
                                    const itemArrayCopy = [...items];
                                    // defining a new var for cloning the items
                                    itemArrayCopy[index] = newValue;
                                    // updating the new array value using the index paramter
                                    setitems(itemArrayCopy);
                  // setting setItems for setting the new array as a value
                                    props.onChange(itemArrayCopy);
                                }}
                            />
                            <button
                                onClick={function () {
                                    const itemArrayCopy = [...items];
                                    itemArrayCopy.splice(1, 1);
                                    setitems(itemArrayCopy);
                                    props.onChange(itemArrayCopy);
                                }}
                            >
                                X
                            </button>

                            <button
                                onClick={function () {
                                    const itemArrayCopy = [...items];
                                    itemArrayCopy[index] = "";
                                    setitems(itemArrayCopy);
                                    props.onChange(itemArrayCopy);
                                }}
                            >
                                Clear
                            </button>
                </li>
                    );
                })}
            </ul>
            <button
                onClick={function () {
                    const itemArrayCopy = [...items];
                    itemArrayCopy.push("");
                    setitems(itemArrayCopy);
                    props.onChange(itemArrayCopy);
                }}
            >
                Add
            </button>
            <button
                onClick={function () {
                    const emptyArry = [];
                    setitems(emptyArry);
                    props.onChange(emptyArry);
                }}
            >
                Remove All
            </button>

            <button
                onClick={function () {
                    const clearedItems = items.map(function () {
                        return "";
                    });
                    setitems(clearedItems);
                    // calling props.onChange() and passing the new Items state to it
                    props.onChange(clearedItems);
                }}
            >
                Clear All
            </button>
        </>
    );
}
export default EntryList;
