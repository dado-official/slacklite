import React, {useEffect} from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import Kanal from './Kanal'
import MessageInputComponent from './MessageInputComponent'
import TextField from './TextField'
import Sidebar from '../Sidebar/SidebarComponent'


export default function MainComponent({socket, setMessage, message, currentRoom, credentials, openSidebar, setOpenSidebar}) {

   useEffect(() => {
       console.log("mainComponent rerender")
   }, [])

    return (
        <div className={`w-full ${openSidebar? "pl-64": ""}  h-full`}>
            <div className="w-full h-full p-2">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="h-16 border-b border-gray-400 p-2">
                        <Kanal name={currentRoom.name} setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}></Kanal>
                    </div>
                    <TextField socket={socket} currentRoom={currentRoom}></TextField> 
                    <MessageInputComponent socket={socket} currentRoom={currentRoom} credentials={credentials}></MessageInputComponent>
                </div>
            </div>
        </div>
    )
}
