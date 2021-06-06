import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import MainComponent from './Components/MainComponent';
import MainLogin from './Components/Login/MainLogin';
import React,{useEffect, useState, } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Sidebar from './Components/Sidebar/SidebarComponent';
import useToken from './Components/useToken';
import MainRegister from './Components/Login/MainRegister';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3333"

function App() {
  
  const { token, setToken } = useToken("");
  const [socket, setSocket] = useState()

  useEffect(() => {
    if(!token){
      console.log("no token")
     
    } else {
      console.log("have Token")
    }
    
  }, [])

  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
    console.log("socket definited")
  }, [])

  //get All channels
  let channels = 
  [
    {
        id:1,
        name:"BestChannel",
        partecipants:10
    }
  ]


  //get All Kontkte
  let kontakte = 
  [
    {
      id:1,
      username:"Seppele"
    },{
      id:2,
      username:"Hansele"
    }
  ]

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token != null ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register" exact>
          <MainRegister setToken={setToken}></MainRegister>
        </Route>
        <Route path="/login" exact>
          <MainLogin setToken={setToken}></MainLogin>
        </Route>
        <Route path="/home" exact>
          <Sidebar channels={channels} kontakte={kontakte}></Sidebar>
          <MainComponent socket={socket}></MainComponent>
        </Route>
        <Route path="/channel/:id" exact>
          <Sidebar channels={channels} kontakte={kontakte}></Sidebar>
          <MainComponent socket={socket}></MainComponent>
        </Route>
        <Route path="/kontakt/:id" exact>
          <Sidebar channels={channels} kontakte={kontakte}></Sidebar>
          <MainComponent socket={socket}></MainComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
