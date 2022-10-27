import { React, useEffect, useState } from "react";
// importing useState hook from react literary//
function EntryList(props) {
<<<<<<< HEAD
  //defining EntryList function//
    const [items, setitems] = useState(props.items);
  // defining useState var and assigning it to useState hook
=======
    //defining EntryList function//
    const [items, setitems] = useState(props.items);
    // defining useState var and assigning it to useState hook
>>>>>>> b5316c426c395a5a8d34650b2fd1b6b46a0b017e

    useEffect(() => {
        props.onChange(items);
    }, [items]);
    useEffect(() => {
        setitems(props.items);
    }, [props.items]);
    let allEmpty = true;

<<<<<<< HEAD
  // for (let i = 0; i > items.length; i++) {
  //     if (items !== "") {
  //         allEmpty = false;
  //         break;
  //     }
  // }
=======
    // for (let i = 0; i > items.length; i++) {
    //     if (items !== "") {
    //         allEmpty = false;
    //         break;
    //     }
    // }
>>>>>>> b5316c426c395a5a8d34650b2fd1b6b46a0b017e

    return (
        <>
            <ul>
                {items.map(function (item, index) {
<<<<<<< HEAD
          // adding unordered list tag and looping around items by using map function //

            return (
                <li key={index}>
                    <input
                        type="text"
                        value={item}
                        aria-label="entry list input"
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
                        disabled={item.trim() === ""}
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
          {items.length !== 0 ? (
              <button
                  onClick={function () {
                      const emptyArry = [];
                      setitems(emptyArry);
                  }}
              >
                  Remove All
              </button>
          ) : null}
          {items.length !== 0 ? (
              <button
                  disabled={items.every(function (item) {
                      return item.trim() === "";
                  })}
                  onClick={function () {
                      const clearedItems = items.map(function () {
                          return "";
                      });
                      setitems(clearedItems);
                  }}
              >
                  Clear All
              </button>
          ) : null}
      </>
  );
=======
                    // adding unordered list tag and looping around items by using map function //

                    return (
                        <li key={index}>
                            <input
                                type="text"
                                value={item}
                                aria-label="entry list input"
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
                                className="btn" >
                                X
                            </button>
                            <button
                                disabled={item.trim() === ""}
                                onClick={function () {
                                    const itemArrayCopy = [...items];
                                    itemArrayCopy[index] = "";
                                    setitems(itemArrayCopy);
                                }}
                                className="btn">
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
                className="btn">
                Add
            </button>
            {items.length !== 0 ? (
                <button
                    onClick={function () {
                        const emptyArry = [];
                        setitems(emptyArry);
                    }}
                    className="btn">
                    Remove All
                </button>
            ) : null}
            {items.length !== 0 ? (
                <button
                    disabled={items.every(function (item) {
                        return item.trim() === "";
                    })}
                    onClick={function () {
                        const clearedItems = items.map(function () {
                            return "";
                        });
                        setitems(clearedItems);
                    }}
                    className="btn">
                    Clear All
                </button>
            ) : null}
        </>
    );
>>>>>>> b5316c426c395a5a8d34650b2fd1b6b46a0b017e
}
export default EntryList;
