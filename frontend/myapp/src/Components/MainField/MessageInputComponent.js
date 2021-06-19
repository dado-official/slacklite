import React,{useState} from 'react'
import InputForMessageComponent from './InputForMessageComponent'
import ToolBar from './ToolBar'

export default function MessageInputComponent({socket, currentRoom, credentials}) {
    const [Action, setAction] = useState(false)
    const [message, setmessage] = useState("initialState")
    
    return (
        <div className="border border-gray-600 rounded-md mx-3 mb-3 bottom-0"
            onMouseEnter={()=>setAction(true)}
            onMouseLeave={()=>setAction(false)}
        >
            <InputForMessageComponent socket={socket} message={message} setmessage={setmessage}></InputForMessageComponent>
            <ToolBar socket={socket} Action={Action} message={message} currentRoom={currentRoom} credentials={credentials}></ToolBar>
        </div>
    )
}
