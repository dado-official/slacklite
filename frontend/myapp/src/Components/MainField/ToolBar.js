import React,{useState} from 'react'
import {AiOutlineThunderbolt, AiFillThunderbolt, AiOutlineStrikethrough} from 'react-icons/ai'
import {GoBold,GoItalic} from 'react-icons/go'
import {BiCodeAlt} from 'react-icons/bi'

export default function ToolBar({Action}) {
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
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
            </div>
            
            <div className="flex flex-row items-center">
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
                <div className="w-7 h-7 hover:bg-gray-300 flex flex-row items-center justify-center rounded-sm">
                    d
                </div>
            </div>
        </div>
    )
}
