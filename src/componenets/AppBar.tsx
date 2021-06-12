import {
  AppBar as AppBarMaterial,
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import firebase from "firebase";
import { signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { navigate } from "hookrouter";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBar = () => {
  const classes = useStyles();
  const [user, loading, error] = useAuthState(firebase.auth());
  return (
    <AppBarMaterial position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" onClick={() => navigate('/')}>Laurelin</Typography>
        <div>
        <Avatar alt={user?.displayName ?? undefined} src={user?.photoURL ?? undefined} />
        <Button color="inherit" onClick={() => navigate('/profile')}>
          Login {user?.displayName}
        </Button>
        </div>
      </Toolbar>
    </AppBarMaterial>
  );
};
