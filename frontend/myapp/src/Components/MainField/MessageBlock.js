import React, {useEffect, useState} from 'react'
import DateMessage from './DateMessage'
import {FaUserAlt} from 'react-icons/fa'
import Message from './Message'

export default function MessageBlock({sender, date, listOfMessagesFromUser, lastMessage}) {
    const [listState, setlistState] = useState([])

    useEffect(() => {
        setlistState([])
        if(listOfMessagesFromUser !== null){
            listOfMessagesFromUser.map((element) => {
                setlistState((prev) => [...prev, <Message text={element.messageContent}/>]);
            })
            setlistState((prev) => [...prev, <Message text={lastMessage.messageContent}/>]);
        } else {
            setlistState(<Message text={lastMessage.messageContent}/>)
        }
    }, [listOfMessagesFromUser])

    return (
        <div className=" w-full flex flex-row items-start m-3 mt-5">
            <div className=" bg-blue-600 w-9 h-9 rounded-md flex flex-row justify-evenly items-center">
                <FaUserAlt color="white"></FaUserAlt>
            </div>
            <div className="px-2 w-full">
                <div className="flex flex-row items-baseline ">
                    <p className="font-bold ">{sender}</p>
                    <p className="ml-2 font-light text-sm">{date}</p>
                </div>
                <div>
                    {listState}
                </div>
            </div>
        </div>
    )
}
