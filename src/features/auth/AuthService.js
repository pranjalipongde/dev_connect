//called when user clicks sign in with google

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, provider } from "../../firebase.config";

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  //save user to firestore if first time logging in

  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
    });
  }

  //return user data in a format that can be used in the app
  return {
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
};

// Sign out from Firebase
export const logoutFromFirebase = () => {
  return signOut(auth);
};

// Listen to Firebase auth state changes
export const onAuthChange = (cb) => {
  return onAuthStateChanged(auth, cb); // Executes callback when login/logout occurs
};
