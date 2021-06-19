import React, {useEffect} from 'react'
import HeaderComponent from './Header/HeaderComponent'
import Kanal from './MainField/Kanal'
import MessageInputComponent from './MainField/MessageInputComponent'
import TextField from './MainField/TextField'
import Sidebar from './Sidebar/SidebarComponent'


export default function MainComponent({socket, setMessage, message, currentRoom, credentials}) {

   useEffect(() => {
       console.log("mainComponent rerender")
   }, [])

    return (
        <div className="pl-64 h-full">
            <div className="h-full">
                <div className="h-full flex flex-col justify-between">
                    <div className="h-16 border-b border-gray-400 p-2">
                        <Kanal name={currentRoom.name}></Kanal>
                    </div>
                    <TextField socket={socket} currentRoom={currentRoom}></TextField> 
                    <MessageInputComponent socket={socket} currentRoom={currentRoom} credentials={credentials}></MessageInputComponent>
                </div>
            </div>
        </div>
    )
}
