import React,{useState} from 'react'
import MessageBlock from './MessageBlock'
import DateMessage from './DateMessage'
import Message from './Message'

export default function TextField({socket}) {
    const [listState, setlistState] = useState([])

    let list = []

    socket.on("room", (msg) => {
        console.log(list)
        list.push(msg)
        setlistState(list)
    })


    return (
        <div className=" flex-grow justify-center overflow-y-auto overflow-x-hidden">
            {listState.map(() => (<p>Hello, </p>))}
            <Message text={"msg"}></Message>
        </div>
    )
}