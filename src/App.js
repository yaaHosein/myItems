import EntryList from "./EntryList";
import "./App.css";
import { useEffect, useState } from "react";
let items = [];
if (localStorage.getItem("foo")) {
  console.log(localStorage.getItem("foo"))
  items = JSON.parse(localStorage.getItem("foo"));
}
function App() {
  let [xxx, setXxx] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("foo") !== null) {
      setXxx(items);
      console.log(setXxx);
    } else {
      fetch("http://localhost:9300/")
        .then((response) => {
          response.json().then((parsedServerData) => {
            setXxx(parsedServerData);
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
