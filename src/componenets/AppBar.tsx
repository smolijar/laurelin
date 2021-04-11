import {
  AppBar as AppBarMaterial,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import firebase from "firebase";
import { signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const AppBar = () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  return (
    <AppBarMaterial position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">News</Typography>
        <Avatar alt={user?.displayName ?? undefined} src={user?.photoURL ?? undefined} />
        <Button color="inherit" onClick={async () => await signInWithGoogle()}>
          Login {user?.displayName}
        </Button>
      </Toolbar>
    </AppBarMaterial>
  );
};
