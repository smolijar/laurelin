import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyCDaw5bK5TjyR2q2NvaaFZcnzSf5FFKpEA",
  authDomain: "laurelin-ee065.firebaseapp.com",
  databaseURL: "https://laurelin-ee065.firebaseio.com",
  projectId: "laurelin-ee065",
  storageBucket: "laurelin-ee065.appspot.com",
  messagingSenderId: "633680340597",
  appId: "1:633680340597:web:00c4ce7201f94194",
};

firebase.initializeApp(firebaseConfig)

export const signInWithGoogle = async () => {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    return result.user
}

let currentUser: firebase.User | null | undefined
let userReady: any
firebase.auth().onAuthStateChanged(user => {
  currentUser = user
  userReady(user)
})
const getCurrentUser = () => new Promise<firebase.User | null | undefined>(resolve => { currentUser === undefined ? userReady = resolve : currentUser })

// export const getCurrentToken = () => Promise.resolve(firebase.auth().currentUser?.getIdToken())
export const getCurrentToken = async () => {
  console.log({ cu: firebase.auth().currentUser })
  return (await getCurrentUser())?.getIdToken()
}