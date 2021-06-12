import { Button } from "@material-ui/core";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, signOut } from "../firebase";

export const ProfilePage = () => {
    const [user, loading, error] = useAuthState(firebase.auth());
    if (!user) {
        return <div>
        <Button color="inherit" onClick={async () => await signInWithGoogle()}>
          Login with Google
        </Button>
    </div>;    
    }
    return <div>
          Logged in as {user?.displayName}
          <Button color="inherit" onClick={async () => await signOut()}>
          Sign out
        </Button>
          
    </div>;
}