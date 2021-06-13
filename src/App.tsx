import { AppBar } from "./componenets/AppBar";
import {
  Button, Container,
} from "@material-ui/core";
import { RouterPage } from "./componenets/Router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <AppBar />
      <Container maxWidth="md">
        <RouterPage />
      </Container>
      </Router>
    </div>
  );
}

export default App;
