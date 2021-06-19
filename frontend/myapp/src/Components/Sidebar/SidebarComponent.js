import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdCreate} from 'react-icons/md'
import {MdWidgets} from 'react-icons/md'
import {MdMoreVert} from 'react-icons/md'
import ChannelsComponent from './ChannelsComponent'
import DirektnachrichtenComponent from './DirektnachrichtenComponent'
import Abo from './Abo'

export default function Sidebar({rooms, kontakte, setCurrentRoom}) {
    
    return (
        <div className=" h-screen w-64 fixed bg-primary top-0">
            <div className="text-white font-bold text-md p-3 px-5 h-16 border-t border-b border-bordercolor flex flex-row items-center justify-between">
                <div className=" flex flex-row items-center">
                    <p className="mr-1">Dado</p>
                    <MdKeyboardArrowDown color="white" size="20px"></MdKeyboardArrowDown>
                </div>
                <div className="bg-white w-9 h-9 rounded-full flex flex-row items-center justify-evenly">
                    <MdCreate color="#3F0E40"></MdCreate>
                </div>
            </div>
            <div className="py-0.813">
                <div className="text-notselected flex flex-row items-center px-7 py-1 hover:bg-secondary hover:text-white">
                    <MdWidgets color="#998099"></MdWidgets>
                    <p className=" ml-2">Slack Connect</p>
                </div>
                <div className="text-notselected flex flex-row items-center px-7 py-1 hover:bg-secondary hover:text-white">
                    <MdMoreVert color="#998099"></MdMoreVert>
                    <p className="ml-2">Slack durchsuchen</p>
                </div>
            </div>
            <ChannelsComponent rooms={rooms} setCurrentRoom={setCurrentRoom}></ChannelsComponent>
            
        </div>
    )
}


//<DirektnachrichtenComponent kontakte={kontakte}></DirektnachrichtenComponent>