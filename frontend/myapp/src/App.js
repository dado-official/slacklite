import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import MainComponent from './Components/MainField/MainComponent';
import MainLogin from './Components/Login/MainLogin';
import React,{useEffect, useState, } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Sidebar from './Components/Sidebar/SidebarComponent';
import useToken from './Components/useToken';
import MainRegister from './Components/Login/MainRegister';
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3333"

async function fetchAllChannels() {
  return fetch('http://localhost:5000/channel', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json())
}


function App() {
  
  const { token, setToken } = useToken("");
  const [socket, setSocket] = useState()
  const [credentials, setcredentials] = useState({
    username:"username"
  })
  const [rooms, setrooms] = useState()
  const [openSidebar, setOpenSidebar] = useState(true);

  let initialroom = {
    name: "welcome",
    roomId : 9999
  }
  const [currentRoom, setCurrentRoom] = useState(initialroom)

  useEffect(async() => {
    setrooms(await fetchAllChannels())
    console.log("rooms loaded")
    if(socket){
      socket.emit('joinRooms', rooms)
    }
  }, [])

  useEffect(() => {
    if(localStorage.getItem('token')){
      setcredentials({username:localStorage.getItem('token').replaceAll("\"","" )})
    }
  }, [])


  async function reloadChannels(){
    setrooms(await fetchAllChannels())
    socket.emit('joinRooms', fetchAllChannels())
    console.log("roosms joined")
  }


  useEffect(() => {
    setSocket(socketIOClient(ENDPOINT));
    console.log("socket definited")
  }, [])

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
          {openSidebar? <Sidebar username={credentials.username} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} reloadChannels={reloadChannels} rooms={rooms} setCurrentRoom={setCurrentRoom}></Sidebar>: null}
          <MainComponent socket={socket} currentRoom={currentRoom} credentials={credentials} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}></MainComponent>
        </Route>
        <Route path="/channel/:id" exact>
          {openSidebar? <Sidebar username={credentials.username} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} reloadChannels={reloadChannels} rooms={rooms} setCurrentRoom={setCurrentRoom}></Sidebar>: null}
          <MainComponent socket={socket} currentRoom={currentRoom} credentials={credentials} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}></MainComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
