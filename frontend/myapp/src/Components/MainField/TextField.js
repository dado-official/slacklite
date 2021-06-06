import React,{useState, useEffect} from 'react'
import MessageBlock from './MessageBlock'
import DateMessage from './DateMessage'
import Message from './Message'

export default function TextField({socket}) {
    const [listState, setlistState] = useState([])

    useEffect(() => {
        if(socket){
            socket.on("chat message", (msg) => {
                setlistState((prev) => [...prev, <p>{msg}</p>]);
            });
        }
        
    }, [socket])


    return (
        <div className=" flex-grow justify-center overflow-y-auto overflow-x-hidden">
            {listState}
        </div>
    )
}



