import { AppBar } from "./componenets/AppBar";
import {
  Button, Container,
} from "@material-ui/core";
import { RouterPage } from "./componenets/Router";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container maxWidth="md">
        <RouterPage />
      </Container>
    </div>
  );
}

export default App;
