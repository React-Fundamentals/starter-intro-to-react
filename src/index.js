import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LogoutButton from "./components/LogoutButton";

const element = <h1>My Title</h1>;

const total = 10 + 5;
const sum = <h2>10 + 5 = {total}</h2>;

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

// const invalidGreeting = (
//     <h1>Hello!</h1>
//     <h2>Good morning</h2>
// );

const fragmentedGreeting = (
  <>
    <h1>Hello fragmentedGreeting!</h1>
    <h2>Good morning fragmentedGreeting</h2>
  </>
);

function Potato() {
  // return <h1>My favorite potato is sweet potato</h1>;
  return <></>;
}

const PotatoArrowFunction = () => <h2>Potato with Arrow Function</h2>;

function PotatoWithProps({ name = "pink potato", greeting = "hello world" }) {
  return (
    <h1>
      Your favorite potato is {name}. {greeting}
    </h1>
  );
}

function Person({ hobbies, greeting }) {
  // props.greeting = "hello";
  hobbies.forEach((hobby) => {
    console.log(hobby);
  });

  const hobbiesListItems = hobbies.map((hobby, index) => (
    <li key={`${hobby}-${index}`}>{hobby}</li>
  ));

  return (
    <>
      <p>Hello, {greeting}?</p>
      <h3>My Hobbies</h3>
      <ul>
        {hobbiesListItems}
        {/* <li>{hobbies[0]}</li>
        <li>{hobbies[1]}</li>
        <li>{hobbies[2]}</li>
        <li>{hobbies[3]}</li> */}
      </ul>
    </>
  );
}

function LoginButton() {
  return <button>Login</button>;
}

function LoginControl({ isLoggedIn }) {
  // let button;

  // if (isLoggedIn) {
  //   button = <LogoutButton />;
  // } else {
  //   button = <LoginButton />;
  // }

  let button = isLoggedIn ? <LogoutButton /> : <LoginButton />;

  return (
    <>
      <h2>isLoggedIn</h2>
      {button}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <LoginControl isLoggedIn />
    <LoginControl isLoggedIn={false} />
    <Person
      greeting="how are you"
      hobbies={["javascript", "react", "travel", "yoga"]}
    />
    <PotatoArrowFunction />
    <PotatoWithProps />
    <PotatoWithProps name="white potatoes" greeting="ni hao" />
    <PotatoWithProps name="green potatoes" />
    <PotatoWithProps name="blue potatoes" />
    <Potato />
    {element}
    {sum}
    {anotherElement}
    {yetAnotherElement}
    {greeting}
    {fragmentedGreeting}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
