import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* function extractClassNameToClass(htmlCode) {
  let answer = "";
  let pattern = /className/g;
  answer = htmlCode.replace(pattern, "class");
  console.log(answer);
}

extractClassNameToClass(``); */
