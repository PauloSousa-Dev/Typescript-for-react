import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/CounterClass/CounterClass";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter Class example</h1>
      <Counter defaultCount={1} />

      <h1>Functional Component example</h1>
      <HelloWorld message="Hello World" />
    </>
  );
}

export default App;
