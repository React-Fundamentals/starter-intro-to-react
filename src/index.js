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

const Potato = ({ color, count, names = [], firstName, lastName }) => {
  const text = count === 1 ? `${count} potato` : `${count} potatoes`;

  // names.forEach((name) => console.log(name));
  const namesListItems = names.map((name, index) => (
    <li key={`${name}-${index}`}>{name}</li>
  ));

  return color ? (
    <>
      <h1>My favorite potato is {color}.</h1>
      <p>I ate {text} yesterday.</p>
      <ul>{namesListItems}</ul>
      <Person firstName={firstName} lastName={lastName} />
    </>
  ) : null;
};

function Person({ firstName, lastName }) {
  return (
    <h1>
      My name is {firstName} {lastName}
    </h1>
  );
}

const names = ["Hou", "John", "Jane", "Bob"];

function LoginButton() {
  return <button>Login</button>;
}

function LogoutButton() {
  return <button>Logout</button>;
}

function LoginControl({ isLoggedIn }) {
  let button;
  if (isLoggedIn) {
    button = <LogoutButton />;
  } else {
    button = <LoginButton />;
  }

  return (
    <>
      <h2>isLoggedIn: {`${isLoggedIn}`}</h2>
      {button}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoginControl isLoggedIn />
    <LoginControl isLoggedIn={false} />
    {element}
    {subtract}
    {anotherElement}
    {yetAnotherElement}
    {greeting}
    {validJSX}
    <Potato
      firstName="Jane"
      lastName="Doe"
      color="yellow"
      count={1}
      names={names}
    />
    <Potato firstName="John" lastName="Doe" color="yellow" count={10} />
    <Potato firstName="Hou" lastName="Chia" color="red" count={5} />
  </React.StrictMode>,
  document.getElementById("root")
);
