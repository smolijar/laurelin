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
import { Fragment as div, useEffect, useState } from "react";
import { navigate } from "hookrouter";

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
  const LIMIT = 12;
  const { data, loading, fetchMore } = usePostsQuery({ variables: { first: LIMIT } });

  
  const isScrolling = (e: any) => {
    const position = window.innerHeight + document.documentElement.scrollTop;
    const max = document.documentElement.offsetHeight;
    console.log({ position, max, loading })
    if (loading) return
    if (position === max) {
      fetchMore({ variables: { after: data?.posts?.pageInfo?.endCursor, first: LIMIT } })
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [loading, fetchMore, data]);
  

  const nodes = data?.posts?.edges.map((edge) => edge.node);
  const pageInfo = data?.posts?.pageInfo;

  const { post, container } = useStyles();
  return (
    <Grid container spacing={3} className={container}>
      {(nodes ?? []).map((p) => (
        <Grid item xs={12} md={6} lg={4} key={p.id}>
          <Card className={post} onClick={() => {
            navigate(`/article/${p.id}`);
          }}>
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
               console.log(pageInfo)
               fetchMore({ variables: { after: data?.posts?.pageInfo?.endCursor } })
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
