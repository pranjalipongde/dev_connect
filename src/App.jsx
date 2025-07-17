import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthChange } from "./features/auth/AuthService";
import { logoutUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //sync firebase user state with Redux store
    const unsubscribe = onAuthChange((user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe(); //clean up lisntener
  }, [dispatch]);

  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;
