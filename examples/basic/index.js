import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import Table from "react-dj-table";
import bots from "./data.json";

// get icons here https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css
function App() {


  return (
    <div className="App">
      <div className="title">
        <small>Semantic UI example, 1000 rows.</small>
        <small>Editable, Searchable, Pageable & Sortable.</small>
        <span className="secondspan">
          Yarn add
          <span className="firstspan">react-dj-table</span>
        </span>
      </div>
   
      <Table json={bots}   />
      <div className="robohash">
        <small> Robots lovingly preovided by</small>
        <a href="https://Robohash.org/" target=" _blank" rel="noreferrer">
          robohash.org
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
