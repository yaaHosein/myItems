<<<<<<< HEAD

import EntryList from "./EntryList";
import "./App.css";
import { useEffect, useState } from "react";
let items = [];

=======
import EntryList from "./EntryList";
import "./App.css";
import { useEffect, useState } from "react";
let items = [];

>>>>>>> b5316c426c395a5a8d34650b2fd1b6b46a0b017e
if (localStorage.getItem("foo")) {
  console.log(localStorage.getItem("foo"));
  items = JSON.parse(localStorage.getItem("foo"));
}

function App() {
  let [xxx, setXxx] = useState([]);
  console.log(xxx);
  console.log(items);
  console.log(localStorage.getItem("foo"));
  useEffect(() => {
    if (localStorage.getItem("foo") !== null) {
      setXxx(items);
      console.log(setXxx);
    } else {
      fetch("http://localhost:9300/")
        .then((response) => {
          response.json().then((parsedServerData) => {
            setXxx(parsedServerData);
            console.log(response);
          });
          console.log(response);
        })

        .catch((error) => {
          console.log("error==>", error);
        });
    }
  }, []);

  return (
    <div className="App">
      <EntryList
        items={xxx}
        onChange={function (newItems) {
          if (Array.isArray(newItems)) {
            const json = JSON.stringify(newItems);
            localStorage.setItem("foo", json);
            // save new items in local storage
          }
        }}
      />
    </div>
  );
}

export default App;

