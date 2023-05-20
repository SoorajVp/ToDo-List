import React from "react";
import ReactDOM from "react-dom/client";
import TextBox from "./Components/Textbox";

const Header = () => {

  return (
    <div>
      <h2 style={{textAlign: "center"}}>ToDoList</h2>
      <TextBox />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
