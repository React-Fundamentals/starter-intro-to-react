import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const element = <h1>Hello World</h1>;

const total = 5 + 10;
const sum = <p>5 + 5 = {total}</p>;

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
//   <h1>Hello, world!</h1>
//   <h2>Hou</h2>
// )

// function Person(props) {
//   return (
//     <h2>
//       Hello my name is {props.name}. I live in {props.city}. I'm an
//       {props.occupation}. My favorite food is {props.favoriteFood}. I'm
//       {props.age}.
//     </h2>
//   );
// }

function Person({ name, city, occupation, favoriteFood, age, hobbies }) {
  const hobbiesListItems = hobbies.map((hobby, index) => (
    <li key={`${name}-${index}`}>{hobby}</li>
  ));
  const headingText = (
    <h2>
      Hello my name is {name}. I live in {city}. I'm an
      {occupation}. My favorite food is {favoriteFood}. I'm
      {age}.
    </h2>
  );

  return (
    <>
      {headingText}
      <ul>{hobbiesListItems}</ul>
    </>
  );
}

function LoginButton() {
  return <button>Login</button>;
}

function LogoutButton() {
  return <button>Logout</button>;
}

function LoginControl({ isLoggedIn = false }) {
  // let button;

  // if (isLoggedIn) {
  //   button = <LogoutButton />;
  // } else {
  //   button = <LoginButton />;
  // }

  const button = isLoggedIn ? <LogoutButton /> : <LoginButton />;

  return (
    <>
      <h2>LoginControl</h2>
      {button}
    </>
  );
}

const validJSX = (
  <>
    <h1>Hello, world!</h1>
    <h2>Hou</h2>
  </>
);

// ReactDOM.render(
//       React.createElement('h1',{},'Hello, world!'),
//       document.getElementById('root')
//   );

ReactDOM.render(
  <React.StrictMode>
    {element}
    {sum}
    {anotherElement}
    {yetAnotherElement}
    {greeting}
    {/* {invalidJSX} */}
    {validJSX}
    <Person
      name="Hou Chia"
      city="Cleveland"
      occupation="instructor"
      favoriteFood="ramen"
      age={33}
      hobbies={["javascript", "react", "travel", "yoga"]}
    />
    <Person
      name="asdf"
      city="Miami"
      occupation="teacher"
      favoriteFood="pizza"
      age={93}
      hobbies={["javascript", "react", "travel", "yoga"]}
    />
    <LoginControl isLoggedIn />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
