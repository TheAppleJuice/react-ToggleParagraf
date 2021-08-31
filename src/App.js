import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraf, setShowParagraf] = useState(false);

  console.log("showParagraf");

  const toggleParagrafHandler = () => {
    setShowParagraf(!showParagraf);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraf}></DemoOutput>
      <Button onClick={toggleParagrafHandler}>Toggle Paragraf!</Button>
    </div>
  );
}

export default App;
