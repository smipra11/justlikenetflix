import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth,onAuthStateChanged } from "./firebase";

import "./App.css";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
  useEffect(() => {
    const unubscribe = onAuthStateChanged(auth,(authUser) => {
      if (authUser) {
        console.log(authUser);
      } else {
      }
    });
    return unubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/test" element={<h1> Test screen</h1>} />

            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
