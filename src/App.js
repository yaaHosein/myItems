import EntryList from "./EntryList";
import "./App.css";
import { useEffect, useState } from "react";

var items=["carrot","banana"];
if (localStorage.getItem("zoo",items)) {
  items=JSON.parse(localStorage.getItem("zoo"))
  // console.log(typeof(items));
  
}
function App() {
  const [items_, setItems_] = useState([]);
  // console.log(items_);
  // console.log(localStorage.getItem("foo"));
  useEffect(() => {
    if (1===1) {
      setItems_(items_);
      // console.log(items);
      
    } else {
      fetch("http://localhost:9000/")
        .then((response) => {
          response.json().then((parsedServerData) => {
            setItems_(parsedServerData);     
          });
        })
        .catch((error) => {
          console.log("error==>", error);
        });
    }
  }, []);
  return (
    <div className="App">
      <EntryList
        items={items_}
        onChange={function (newItems) {
          if (Array.isArray(newItems)) {
            const json = JSON.stringify(newItems);
            localStorage.setItem("zoo", json);
          // console.log(typeof(newItems))
            // console.log(newItems)
            // if(newItems=== Array){ 
            //  } ====> we can not
            // console.log(JSON);
            // console.log(json);
            // save new items in local storage
          }
        }}
      />
    </div>
  );
}


export default App;

// let journal = [
//   {events: ["work", "touched tree", "pizza",
//   "running", "television"],
//   squirrel: false},
//   {events: ["work", "ice cream", "cauliflower",
//   "lasagna", "touched tree", "brushed teeth"],
//   squirrel: false},
//   {events: ["weekend", "cycling", "break", "peanuts",
//   "beer"],
//   squirrel: true},
  
//   /* and so on... */
//   ];

//   console.log(journal);
  
  // → ["carrot", "exercise", "weekend", "bread", …

// let journal = [];
// function addEntry(events, squirrel) {
// journal.push({events, squirrel});
// }



// addEntry(["work", "touched tree", "pizza", "running",
//   "television"], false);
//   addEntry(["work", "ice cream", "cauliflower", "lasagna",
//   "touched tree", "brushed teeth"], false);
//   addEntry(["weekend", "cycling", "break", "peanuts",
//   "beer"], true);

//   addEntry()
//   console.log(journal);

// function Coffee(roast, ounces) {
//   this.roast = roast;
//   this.ounces = ounces;
//   this.getSize = function() {
//   if (this.ounces === 8) {
//   return "small";
//   } else if (this.ounces === 12) {
//   return "medium";
//   } else if (this.ounces === 16) {
//   return "large";
//   }
//   };
//   this.toString = function() {
//   return "You've ordered a " + this.getSize() + " " 
//   + this.roast + " coffee.";
//   };
//  }
//  var houseBlend = new Coffee("House Blend", 12);
//  console.log(houseBlend);
//  var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());
 