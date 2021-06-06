import React, {useState} from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdMoreVert} from 'react-icons/md'
import {MdAdd} from 'react-icons/md'
import ChannelComponent from './ChannelComponent'


export default function ChannelsComponent({channels}) {
    const [hoverChannelHeader, setHoverChannelHeader] = useState(false)

    let list ;
    if (channels) {
        list = channels.map(c => <ChannelComponent key={c.id} id={c.id} name={c.name} participants={c.participants}></ChannelComponent>);
    }

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

            {list}           
        </div>
    )
}
