import { Button } from "@material-ui/core";
import { MainFeed } from "../componenets/MainFeed";
import { usePostsQuery } from "../generated-types";
import logo from "../logo.svg";

export const HomePage = () => {
    return (<MainFeed />);
}