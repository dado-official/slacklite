import React from 'react'
import HeaderComponent from './Header/HeaderComponent'
import Kanal from './MainField/Kanal'
import MessageInputComponent from './MainField/MessageInputComponent'
import TextField from './MainField/TextField'
import Sidebar from './Sidebar/SidebarComponent'


export default function MainComponent({socket, setMessage, message}) {

   

    return (
        <div className="pl-64 h-full">
            <div className="h-full">
                <div className="h-full flex flex-col justify-between">
                    <div className="h-16 border-b border-gray-400 p-2">
                        <Kanal name="#kanal"></Kanal>
                    </div>
                    <TextField socket={socket}></TextField> 
                    <MessageInputComponent 
                        socket={socket} ></MessageInputComponent>
                </div>
            </div>
        </div>
    )
}
