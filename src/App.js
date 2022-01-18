import { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [inputText, setInputText] = useState([]);
  const [result, setResult] = useState();
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText !== "") {
      let arr = inputText.split(",");
      setResult(
        arr.map((number) => {
          if (number !== "" && number >= "0" && number <= "9") {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return `${number} - is Not a Prime Number`;
            }
            return `${number} -  is a Prime Number`;
          }
          return `${number} - You Have Not Entered Anything Or You Entered A String`;
        })
      );
    } else {
      setResult(["Please Enter Something..."]);
    }

    setInputText("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prime Number Or Not</h1>
        <input
          placeholder="enter number with common"
          onChange={handleChange}
          value={inputText}
        ></input>
        <button onClick={handleClick}>Submit</button>

        <Table result={result} />
      </header>
    </div>
  );
}

export default App;
