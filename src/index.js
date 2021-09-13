import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

// JSX: You can store JSX in a variable
const element = <h1>Hello World</h1>;

// JSX: You can use curly brackets {} to embed and evaluate any JavaScript expression
const total = 5 + 5;
const sum = <p>5 + 5 = {total}</p>;

// JSX: You can add a class to a JSX element with the `className` attribute
const anotherElement = <h1 className="heading">Hou Chia</h1>;

// JSX: You may also use curly braces to embed a JavaScript expression in an attribute
const headingLevel = 1;
const yetAnotherElement = (
  <h1 className={`heading-${headingLevel}`}>Hou Chia</h1>
);

// JSX: JSX tags may contain children
const greeting = (
  <div>
    <h1>Hello!</h1>
    <h2>Good morning</h2>
  </div>
);

// JSX: You may only have one parent tag per JSX expression
// const invalidJSX = (
//   <h1>Hello, world!</h1>
//   <h2>Hou</h2>
// )

// JSX: If we don't use JSX, we'd have to call React.createElement() to render components to the page, which as you can see has a less intuitive syntax.
// ReactDOM.render(
//       React.createElement('h1',{},'Hello, world!'),
//       document.getElementById('root')
//   );

// COMPONENTS & PROPS: Function components are JavaScript functions that accept arbitrary inputs (called “props”) and return React elements that describe a piece of the UI.
function Potato() {
  // The return keyword is required method
  return <h1>My favorite potato is sweet potato</h1>;
}

// COMPONENTS & PROPS: Components can accept inputs called props
function PotatoWithProps({ type }) {
  return <h1>My mom's favorite potato is {type}</h1>;
}

// COMPONENTS & PROPS: Always start component names with a capital letter. React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.
function Person(props) {
  // COMPONENTS & PROPS: Props are read-only. The following line will throw an error: TypeError: Cannot assign to read only property 'age' of object '#<Object>'
  // props.age = 5;

  props.hobbies.forEach((hobby) => {
    console.log(hobby);
  });

  return (
    <h2>
      Hello my name is {props.name}. I live in {props.city}. I'm an
      {props.occupation}. My favorite food is {props.favoriteFood}. I'm{" "}
      {props.age}.
    </h2>
  );
}

function PersonDestructuredProps({
  age,
  city,
  favoriteFood,
  hobbies,
  name,
  occupation,
}) {
  // LISTS & KEYS: Use map() to render a list of elements to the page. Each element in the list must include a key, which is a special string attribute that helps React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
  const hobbiesListItems = hobbies.map((hobby, index) => (
    <li key={`${hobby}-${index}`}>{hobby}</li>
  ));

  // Embed hobbiesListItems in JSX using curly braces
  return (
    <>
      <h2>
        Hello my name is {name}. I live in {city}. I'm an
        {occupation}. My favorite food is {favoriteFood}. I'm {age}.
      </h2>
      <ul>{hobbiesListItems}</ul>
    </>
  );
}

// CONDITIONAL RENDERING: In React, you can create separate components and render only some of them conditionally.
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

// CONDITIONAL RENDERING: Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.
function LoginControlWithTernaryOperator({ isLoggedIn }) {
  const button = isLoggedIn ? <LogoutButton /> : <LoginButton />;
  const status = (
    <p>
      The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
    </p>
  );
  return (
    <>
      {status}
      {button}
    </>
  );
}

// COMPONENTS & PROPS: You can only pass a single top-level/parent element to ReactDOM. Components can refer to other components in their output. You can compose smaller components to create a new component.
ReactDOM.render(
  <React.StrictMode>
    {element}
    {sum}
    {anotherElement}
    {yetAnotherElement}
    {greeting}
    {/* {invalidJSX} */}
    <Potato />
    <PotatoWithProps type="white potato" />
    <PotatoWithProps type="red potato" />
    <PotatoWithProps type="white potato" />
    <Person
      name="Hou Chia"
      city="Cleveland"
      occupation="instructor"
      favoriteFood="ramen"
      age={33}
      hobbies={["javascript", "react", "travel", "yoga"]}
      address={{ zipcode: "10011", country: "USA" }}
    />
    <PersonDestructuredProps
      name="Hou Chia"
      city="Cleveland"
      occupation="instructor"
      favoriteFood="ramen"
      age={33}
      hobbies={["javascript", "react", "travel", "yoga"]}
      address={{ zipcode: "10011", country: "USA" }}
    />
    <LoginControl isLoggedIn />
    <LoginControl isLoggedIn={false} />
    <LoginControlWithTernaryOperator isLoggedIn />
    <LoginControlWithTernaryOperator isLoggedIn={false} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
