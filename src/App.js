import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import './App.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to='/home' /> : <SignInForm onSignIn={handleSignIn} /> } />
          <Route path="/home" element={isAuthenticated ? <HomeScreen /> : <Navigate to="/" />} />
          <Route path="signin" element={<SignUpForm />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
