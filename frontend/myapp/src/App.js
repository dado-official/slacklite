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
  const [credentials, setcredentials] = useState()

    //get All rooms
    let rooms = 
    [
      {
          roomId:0,
          name:"BestChannel"
      },{
          roomId:1,
          name:"BestChannel"
      }
    ]
  
    //get All Kontkte
    let kontakte = 
    [
      {
        id:0,
        username:"Seppele"
      },{
        id:1,
        username:"Hansele"
      }
    ]
  const [currentRoom, setCurrentRoom] = useState(rooms[0])

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

  useEffect(() => {
    //join all Rooms
    if(socket){
      socket.emit('joinRooms', rooms)
    }
  }, [socket])



  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token != null ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register" exact>
          <MainRegister setToken={setToken} setcredentials={setcredentials}></MainRegister>
        </Route>
        <Route path="/login" exact>
          <MainLogin setToken={setToken} setcredentials={setcredentials}></MainLogin>
        </Route>
        <Route path="/home" exact>
          <Sidebar rooms={rooms} kontakte={kontakte} setCurrentRoom={setCurrentRoom}></Sidebar>
          <MainComponent socket={socket} currentRoom={currentRoom} credentials={credentials}></MainComponent>
        </Route>
        <Route path="/channel/:id" exact>
          <Sidebar rooms={rooms} kontakte={kontakte} setCurrentRoom={setCurrentRoom}></Sidebar>
          <MainComponent socket={socket} currentRoom={currentRoom} credentials={credentials}></MainComponent>
        </Route>
        <Route path="/kontakt/:id" exact>
          <Sidebar rooms={rooms} kontakte={kontakte} setCurrentRoom={setCurrentRoom}></Sidebar>
          <MainComponent socket={socket} currentRoom={currentRoom} credentials={credentials}></MainComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
