import EntryList from "./EntryList";
import "./App.css";
import { useEffect } from "react";

let items = ["carrot ", "Orange ", "Banana "];
if (localStorage.getItem("foo")) {
  items = JSON.parse(localStorage.getItem("foo"));
}
function App() {
  useEffect(() => {
    fetch("http://localhost:9300/").then((response) => {
      response.json(items).then((item) => { });
    }).catch(error => {
      console.log("error==>", error)
    })
  }, []);

  return (
    <div className="App">
      <EntryList
        items={items}
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
