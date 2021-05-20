import React from 'react'
import DateMessage from './DateMessage'
import Message from './Message'

export default function MessageBlock({}) {
    return (
        <div className=" w-full flex flex-row items-start m-3 mt-5">
            <div className="bg-green-600 w-9 h-9 rounded-md">

            </div>
            <div className="px-2 w-full">
                <div className="flex flex-row items-baseline ">
                    <p className="font-bold ">Daniel Nagler</p>
                    <p className="ml-2 font-light text-sm">20:57</p>
                </div>
                <div>
                    <Message text="Hallo"></Message>
                    <Message text="Hallo"></Message>
                    <Message text="Hallo"></Message>
                    <Message text="Hallo"></Message>
                    <Message text="Hallo"></Message>
                </div>
            </div>
        </div>
    )
}
