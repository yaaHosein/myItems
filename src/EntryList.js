import { React, useEffect, useState } from "react";
// importing useState and... hook from react library//
function EntryList(props) {
  //defining EntryList function//
  const [items, setItems] = useState(props.items);
    // defining useState var and assigning it to useState hook
  console.log(items);
  console.log(props.items)
  // console.log(props)

  useEffect(() => {
    props.onChange(items);
    // console.log(    props.onChange(props.items));
    // console.log(    props.onChange(items));
  }, [items]
    // console.log(props.onChange(items)) ;
    // console.log(items);
);
// console.log(items);
  useEffect(() => {
    setItems(props.items);
    // console.log(items);
  }, [props.items]);
  // console.log(items);
  // console.log(props.items);
  //   let allEmpty = true;

  //   for (let i = 0; i > items.length; i++) {
  //       if (items !== "") {
  //           allEmpty = false;
  //           break;
  //       }
  //   }

  return (
    <>
      <ul>
        {items.map((item, index) => {
          // adding unordered list tag and looping around items by using map function //
          // console.log(items);
          return (
            <li key={index}>
              <input
                type="text"
                value={item}
                // I can delete this line

                aria-label="entry list input"
                onChange={(event) => {
                  // console.log(items);
                  // inside list items tag adding input tag for text input and assigning its default value to item; also adding onChange function for changing the fields contents //
                  const newValue = event.target.value;
                  // defining newValue getting the new Value of the input
                  // console.log(typeof(newValue))
                  let itemArrayCopy = [...items];
                  // console.log(items);
                  // defining a new var for cloning the items
                  itemArrayCopy[index] = newValue;
                  console.log(itemArrayCopy);
                  console.log(itemArrayCopy[index]);
                  setItems(itemArrayCopy);
                  props.onChange(itemArrayCopy)
                  console.log(props.onChange(itemArrayCopy));
                  
                  // console.log(items);
                  // updating the new array value using the index parameter
                  // console.log(itemArrayCopy);
                  // // console.log(itemArrayCopy[index]);
                  // console.log(items);
                  // console.log(item);
                  // props.onChange(itemArrayCopy)
                  // console.log( props.onChange(itemArrayCopy));
                }}
              />
              <button
                onClick={() => {
                  const itemArrayCopy = [...items];
                  // console.log(items);
                  itemArrayCopy.splice(index, 1);
                  setItems(itemArrayCopy);
                  // console.log(items);
                }}
              >
                X
              </button>
              <button
                // disabled={item.trim() === ""}
                onClick={() => {
                    console.log(items);
                  const itemArrayCopy = [...items];
                  itemArrayCopy[index] = "";
                  setItems(itemArrayCopy);
                }}
              >
                Clear
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          const itemArrayCopy = [...items];
          itemArrayCopy.push("");
          setItems(itemArrayCopy);
        }}
      >
        Add
      </button>
      {items.length !== 0 ? (
        <button
          onClick={() => {
            const emptyArray = [];
            setItems(emptyArray);
          }}
        >
          Remove All
        </button>
      ) : null}
        
      {items.length !== 0 ? (
        <button
          // disabled={items.every((item) => {
          //   return item.trim() === "";
          // })}
          onClick={() => {
            const clearedItems = items.map(() => {
              return "";
            });
            setItems(clearedItems);
          }}
        >
          Clear All
        </button>
      ) : null}
    </>
  );
}

export default EntryList;
