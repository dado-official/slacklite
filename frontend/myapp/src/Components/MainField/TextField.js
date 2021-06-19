import React,{useState, useEffect, useRef} from 'react'
import MessageBlock from './MessageBlock'
import DateMessage from './DateMessage'
import Message from './Message'

export default function TextField({socket, currentRoom}) {
    const [listState, setlistState] = useState([])
    const [lastSender, setlastSender] = useState()
    const [room, setroom] = useState({})
    const [newMessage, setnewMessage] = useState()
    const [listOfMessagesFromUser, setlistOfMessagesFromUser] = useState([])
    const reference = useRef(newMessage);

    useEffect(() => {
        //change room
        setlistState([])
        setroom(currentRoom)
    }, [currentRoom])

    useEffect(() => {
        if(newMessage){
            if(room.roomId == newMessage.room.roomId){
                if(listState.length === 0 || lastSender !== newMessage.sender){
                    setlastSender(newMessage.sender)
                    setlistOfMessagesFromUser([])
                    setlistOfMessagesFromUser((prev) => [...prev, newMessage])
                    setlistState((prev) => [...prev, 
                        <MessageBlock 
                            key={newMessage.date} 
                            sender={newMessage.sender}
                            date={newMessage.date}
                            listOfMessagesFromUser={null}
                            lastMessage={newMessage}
                        />]);
                } else {
                    let tmpArrayCopy = [...listState]
                    console.log(listOfMessagesFromUser.length)
                    tmpArrayCopy[tmpArrayCopy.length-1] =
                        <MessageBlock 
                            key={newMessage.date} 
                            sender={newMessage.sender}
                            date={newMessage.date}
                            listOfMessagesFromUser={listOfMessagesFromUser}
                            lastMessage={newMessage}
                        />
                    setlistState(tmpArrayCopy)
                    setlistOfMessagesFromUser((prev) => [...prev, newMessage]) 
                    console.log(newMessage.messageContent) 
                }          
            };
        }
    }, [newMessage])



    useEffect(() => {
        if(socket){
            socket.on("chat message", function(msg) {  
                setnewMessage(msg)
            });
        }
    }, [socket])

    return (
        <div className=" flex-grow justify-center overflow-y-auto overflow-x-hidden">
            {listState}
        </div>
    )
}



