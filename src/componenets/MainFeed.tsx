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
    width: '100%',
  },
  post: {
    width: '100%',
    marginBottom: '2em',
  }
});

export const MainFeed = () => {
  const LIMIT = 5
  const [pageToken, setPageToken] = useState<string>('')
  const { data, fetchMore } = usePostsQuery();
  console.log({ data, fetchMore })
  
  const fm = () => fetchMore({variables: { limit: LIMIT, token: pageToken }, updateQuery: (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) return prev;
    setPageToken(fetchMoreResult.posts?.nextPageToken ?? '')
    console.log(pageToken)
    return Object.assign({}, prev, {
      posts: [...(prev.posts?.posts || []), ...(fetchMoreResult.posts?.posts || [])]
    });
  }})
  fm();
  fm();
  fm();
  fm();
  fm();

  const { post, container } = useStyles()
  return (<Grid container spacing={3} className={container}>
    {(data?.posts?.posts ?? []).map((p) => (
      <Grid item xs={12} md={6} lg={4}>
        <Card className={post} key={p.text}>
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
        </Card></Grid>
    ))}
  </Grid>);
};
