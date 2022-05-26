import React from 'react';

import './App.css';
function MyList(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <li>{item}</li>
  );
  function App() {
    return (
      <ul>{listItems}</ul>
    );
  }
  ReactDOM.render(
    <MyList items={items} />,
    document.getElementById('root')
  );
}
export default App;
