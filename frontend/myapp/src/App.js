import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import MainComponent from './Components/MainComponent';

import io from "socket.io-client";
let socket = io.connect("http://localhost:5000");

function App() {
  return (
    <div className=" h-full w-full overflow-hidden">
      <MainComponent socket={socket}></MainComponent>
    </div>
  );
}

export default App;
