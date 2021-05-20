import React from 'react'
import MessageBlock from './MessageBlock'
import DateMessage from './DateMessage'

export default function TextField() {

    useEffect(() => {
        socket.on("message", msg => {
            setMessages(messages => [...messages, msg]);
        })

        socket.on("notification", notif => {
            toast({
                position: "top",
                title: notif?.title,
                description: notif?.description,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        })
    }, [socket, toast])

    return (
        <div className=" flex-grow justify-center overflow-y-auto overflow-x-hidden">
            <MessageBlock></MessageBlock>
            <DateMessage></DateMessage>
            <MessageBlock></MessageBlock>
        </div>
    )
}