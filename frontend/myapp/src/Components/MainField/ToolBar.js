import React,{useState, useEffect} from 'react'
import {AiOutlineThunderbolt, AiFillThunderbolt, AiOutlineStrikethrough} from 'react-icons/ai'
import {GoBold,GoItalic, GoMention} from 'react-icons/go'
import {BiCodeAlt, BiLink, BiCodeBlock, BiSmile} from 'react-icons/bi'
import {BsListOl, BsListTask, BsBlockquoteLeft} from 'react-icons/bs'
import {FaRemoveFormat} from 'react-icons/fa'
import {IoMdSend} from 'react-icons/io'

import socketIOClient from "socket.io-client";


export default function ToolBar({Action, message, socket}) {

    
    function sendMessage(e){
        e.preventDefault();
         console.log("sendmessage")
         if (message) {
             console.log("message !== null")
             socket.emit('chat message',message);
         }
    }
  
    return (
        <div className={`w-full h-10 bg-${Action === true ? "gray-100": "white"} p-2 rounded-b-md flex flex-row items-center justify-between`}>
            <div className="flex flex-row items-center ">

                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <AiOutlineThunderbolt></AiOutlineThunderbolt>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <GoBold></GoBold>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <GoItalic></GoItalic>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <AiOutlineStrikethrough></AiOutlineStrikethrough>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BiCodeAlt></BiCodeAlt>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BiLink></BiLink>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BsListOl></BsListOl>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BsListTask></BsListTask>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BsBlockquoteLeft></BsBlockquoteLeft>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BiCodeBlock></BiCodeBlock>
                </div>
            </div>
            
            <div className="flex flex-row items-center">
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <FaRemoveFormat></FaRemoveFormat>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <GoMention></GoMention>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    <BiSmile></BiSmile>
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm"
                    onClick={(e) => sendMessage(e)}    
                >
                    <IoMdSend ></IoMdSend>
                </div>
            </div>
        </div>
    )
}