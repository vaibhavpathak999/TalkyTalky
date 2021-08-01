import React from "react";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Navbar from "./Components/Common/Navar";
import Footer from "./Components/Common/Footer";
import Home from "./Components/General/Home";
import Profile from "./Components/General/Profile";
import SignIn from "./Components/General/SignIn";
import SignUp from "./Components/General/SignUp";
import CreatePost from "./Components/General/CreatePost";
import './app.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/create">
            <CreatePost/>
          </Route>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
