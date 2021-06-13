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
  import { usePostQuery } from "../generated-types";
  import { Fragment as div, useEffect, useState } from "react";
  import {
    useParams
  } from "react-router-dom";
  
  const useStyles = makeStyles({
    container: {
      width: "100%",
    },
    post: {
      width: "100%",
      marginBottom: "2em",
    },
  });
  
  export const ArticleDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = usePostQuery({ variables: { id: id } });
  
  
    const { post, container } = useStyles();
    return (
        <Card className={post}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://cataas.com/cat/gif?${data?.post?.content}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data?.post?.content}
            </Typography>
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
    );
  };
  