import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name] = useState("My Name");
  return (
    <div className="App">
      <h1> App </h1>
      <GrandChild n={name} />
    </div>
  );
}

const Child = (props) => {
  return (
    <div>
      <h2> Child : {props.n} </h2>
    </div>
  );
};

const GrandChild = (props) => {
  return (
    <div>
      <h3> GrandChild </h3>
      <Child n={props.n} />
    </div>
  );
};
