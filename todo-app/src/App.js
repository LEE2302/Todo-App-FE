import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import styled from "styled-components"

const Button = styled.button`
width: 50px;
height: 50px;
`

function App() {
  const [number, setNumber] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {number}
        <div>
          <Button>+</Button>
          <Button>-</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
