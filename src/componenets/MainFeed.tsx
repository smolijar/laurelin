import {
  AppBar as AppBarMaterial,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import firebase from "firebase";
import { signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { usePostsQuery } from "../generated-types";
import { Fragment as div, useState } from "react";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  post: {
    width: "100%",
    marginBottom: "2em",
  },
});

export const MainFeed = () => {
  const LIMIT = 5;
  const { data, fetchMore } = usePostsQuery();

  const nodes = data?.posts?.edges.map((edge) => edge.node);
  const pageInfo = data?.posts?.pageInfo;

  const { post, container } = useStyles();
  return (
    <Grid container spacing={3} className={container}>
      {(nodes ?? []).map((p) => (
        <Grid item xs={12} md={6} lg={4} key={p.id}>
          <Card className={post}>
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
                <Typography variant="body2" color="textSecondary" component="p">
                  {p.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={async () => {
               console.log('click')
               fetchMore({ variables: { token: data?.posts?.pageInfo?.endCursor } })
              }}>
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
