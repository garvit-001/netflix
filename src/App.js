import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { auth } from "./firebase";
import UserContext from "./UserContext";
import ProfileScreen from "./screens/ProfileScreen";
import BrowseScreen from "./screens/BrowseScreen";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/browse" /> : <HomeScreen />}
            />
            <Route
              path="/browse"
              element={user ? <BrowseScreen /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={user ? <ProfileScreen /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
