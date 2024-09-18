import React from "react";
import Header from "./components/Header";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default App;
