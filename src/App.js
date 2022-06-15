import { useEffect, useState } from "react";
import "./App.css";

function resize(setWidth) {
  setWidth(window.innerWidth);
}

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("widht", width);
  let content = <h1>Hello world</h1>;
  if (width > 1200) {
    content = (
      <div>
        Height: {window.innerHeight} Width: {width}
      </div>
    );
  }
  useEffect(() => {
    window.addEventListener("resize", () => resize(setWidth));
    return () => {
      window.removeEventListener("resize", () => resize(setWidth));
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">{content}</header>
    </div>
  );
}

export default App;
