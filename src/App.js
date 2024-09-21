import React from "react";
import './App.css';
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";


function App() {
  return (
    <div className="App">
      <Header />
      <SignInForm />
      <SignUpForm />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
