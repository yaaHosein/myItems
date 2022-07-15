import { useEffect, useState } from "react";
// importing useState hook from react literary//
function EntryList(props) {
  //defining EntryList function//
    const [items, setitems] = useState(props.items);
  // defining useState var and assigning it to useState hook

    useEffect(
        () => {
            props.onChange(items);
        },
        [items]
    );
    return (
        <>
            <ul>
                {items.map(function (item, index) {
          // adding unordered list tag and looping around items by using map function //
                    return (
                        <li key={index}>
                            <input
                                type="text"
                                value={item}
                                onChange={function (event) {
                                    // inside list items tag adding input tag for text input and assigning its default value to item; also adding onChange function for changing the fields contents //
                                    const newValue = event.target.value;
                                    // defining newValue getting the new Value of the input
                                    const itemArrayCopy = [...items];
                                    // defining a new var for cloning the items
                                    itemArrayCopy[index] = newValue;
                                    // updating the new array value using the index parameter
                                    setitems(itemArrayCopy);
                  // setting setItems for setting the new array as a value
                        }}
                    />
                    <button
                        onClick={function () {
                            const itemArrayCopy = [...items];
                            itemArrayCopy.splice(index, 1);
                            setitems(itemArrayCopy);
                        }}
                    >
                        X
                    </button>

                    <button
                        onClick={function () {
                            const itemArrayCopy = [...items];
                            itemArrayCopy[index] = "";
                            setitems(itemArrayCopy);
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
                }}
            >
                Add
            </button>
            <button
                onClick={function () {
                    const emptyArry = [];
                    setitems(emptyArry);
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
                }}
            >
                Clear All
            </button>
        </>
    );
}
export default EntryList;
