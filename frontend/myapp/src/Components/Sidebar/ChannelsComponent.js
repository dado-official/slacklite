import React, {useState} from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdMoreVert} from 'react-icons/md'
import {MdAdd} from 'react-icons/md'
import ChannelComponent from './ChannelComponent'


export default function ChannelsComponent() {
    const [hoverChannelHeader, setHoverChannelHeader] = useState(false)

    return (
        <div>
            <div 
                className="px-6 text-notselected p-1 flex flex-row items-center justify-between hover:text-white hover:bg-secondary" 
                onMouseEnter={() => setHoverChannelHeader(true)}
                onMouseLeave={() => setHoverChannelHeader(false)}
            >
                <div className="flex flex-row items-center">
                    <div className="mr-1 h-5 w-5 hover:bg-hover rounded-md flex flex-row items-center justify-evenly">
                        <MdKeyboardArrowDown  color={hoverChannelHeader === true ? "white" : "#998099"}></MdKeyboardArrowDown>
                    </div>
                    <p>Channels</p>
                </div>

                {hoverChannelHeader === true ? 
                    <div className="flex flex-row items-center">
                        <div className="h-5 w-5 hover:bg-hover rounded-md flex flex-row items-center justify-evenly">
                            <MdMoreVert  color="white"></MdMoreVert>
                        </div> 
                        <div className="ml-2 h-5 w-5 hover:bg-hover rounded-md flex flex-row items-center justify-evenly">
                            <MdAdd color="white"></MdAdd>
                        </div> 
                    </div> 
                :null}      
            </div>
            <ChannelComponent name="channel 1" profImg=""></ChannelComponent>
            <ChannelComponent name="channel 1" profImg=""></ChannelComponent>
            <ChannelComponent name="channel 1" profImg=""></ChannelComponent>
            <ChannelComponent name="channel 1" profImg=""></ChannelComponent>

            <div className=" text-notselected hover:bg-secondary hover:text-white flex flex-row items-center pl-12 p-1">
                <div className="w-5 h-5 bg-hover rounded-md flex flex-row items-center justify-evenly">
                    <MdAdd></MdAdd>
                </div>
                <p className="pl-1">Channels hinzufügen</p>
            </div>
            
        </div>
    )
}
