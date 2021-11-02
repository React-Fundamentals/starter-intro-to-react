import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const element = <h2>Hey there!</h2>;

const result = 10 - 5;
const subtract = <h3>10 - 5 = {result}</h3>;

const anotherElement = <h1 className="heading">Hou Chia</h1>;

const headingLevel = 1;
const yetAnotherElement = (
  <h1 className={`heading-${headingLevel}`}>Hou Chia</h1>
);

const greeting = (
  <div>
    <h1>Hello!</h1>
    <h2>Good morning</h2>
  </div>
);

// const invalidJSX = (
//     <h1>Hello, world!</h1>
//     <h2>Hou</h2>
// );

const validJSX = (
  <>
    <h1>Hello, world!</h1>
    <h2>Hou</h2>
  </>
);

// function Potato({ color }) {
//   const potatoName = `${color} potato`;
//   return <h1>My favorite potato is {potatoName}</h1>;
// }

// const Potato = ({ color = "blue" }) => <h1>My favorite potato is {color}</h1>;

const Potato = ({ color, count, names = [] }) => {
  const text = count === 1 ? `${count} potato` : `${count} potatoes`;

  names.forEach((name) => console.log(name));

  return color ? (
    <>
      <h1>My favorite potato is {color}.</h1>
      <p>I ate {text} yesterday.</p>
    </>
  ) : null;
};

const names = ["Hou", "John", "Jane", "Bob"];

ReactDOM.render(
  <React.StrictMode>
    {element}
    {subtract}
    {anotherElement}
    {yetAnotherElement}
    {greeting}
    {validJSX}
    {/* <App /> */}
    <Potato color="yellow" count={1} names={names} />
    <Potato color="yellow" count={10} />
    <Potato color="red" count={5} />
  </React.StrictMode>,
  document.getElementById("root")
);
