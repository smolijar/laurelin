import {
  AppBar as AppBarMaterial,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import firebase from "firebase";
import { signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { usePostsQuery } from "../generated-types";
import { Fragment } from "react";

export const MainFeed = () => {
  const { data, loading, error } = usePostsQuery();
  return <Fragment>{(data?.posts?.posts ?? []).map((p) => (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://cataas.com/cat/gif?${p.text}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{p.text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ))}</Fragment>;
};
