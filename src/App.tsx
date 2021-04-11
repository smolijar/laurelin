import logo from "./logo.svg";
import "./App.css";
import { useTestQuery } from "./generated-types";
import { AppBar } from "./componenets/AppBar";
import {
  Button,
} from "@material-ui/core";

function App() {
  const { data, loading, error } = useTestQuery();
  return (
    <div className="App">
      <AppBar />      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {data?.user.email}! Edit <code>src/App.tsx</code> and save to
          reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {loading}
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
