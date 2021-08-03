import React, { useContext, createContext, useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./Components/Common/Navar";
import Footer from "./Components/Common/Footer";
import Home from "./Components/General/Home";
import Profile from "./Components/General/Profile";
import SignIn from "./Components/General/SignIn";
import SignUp from "./Components/General/SignUp";
import CreatePost from "./Components/General/CreatePost";
import { reducer, initialState } from "./Components/Reducers/reducer";
import './app.css'

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      // if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
          <Navbar />
          <Routing />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
