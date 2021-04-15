import { Button } from "@material-ui/core";
import { MainFeed } from "../componenets/MainFeed";
import { usePostsQuery } from "../generated-types";
import logo from "../logo.svg";

export const HomePage = () => {
      const { data, loading, error } = usePostsQuery();

    return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Hello! Edit <code>src/App.tsx</code> and save to
      reload.
    </p>
    <MainFeed />
  </header>);
}