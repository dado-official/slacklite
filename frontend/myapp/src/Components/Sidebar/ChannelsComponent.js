import React, {useState} from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {IoReloadOutline} from 'react-icons/io5'
import {MdAdd} from 'react-icons/md'
import {MdCheck} from 'react-icons/md'
import ChannelComponent from './ChannelComponent'

async function fetchNewChannel(name) {
    console.log(name)
    return fetch('http://localhost:5000/channel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    })
      .then(data => data.json())
}


export default function ChannelsComponent({reloadChannels, rooms, setCurrentRoom, setOpenSidebar}) {
    const [hoverChannelHeader, setHoverChannelHeader] = useState(false)
    const [clickAdd, setclickAdd] = useState(false)
    const [channelName, setchannelName] = useState()
    let list ;
    if (rooms) {
        list = rooms.map(c => <ChannelComponent setCurrentRoom={setCurrentRoom} room={c} setOpenSidebar={setOpenSidebar}></ChannelComponent>);
    }

    async function createnewChannel(){
        const response = await fetchNewChannel({channelName})
        if(response.token === true){
            //ok
            console.log("ok channel")
        } else {
            //fehler
            console.log("no channel")
        }
        reloadChannels()
    }

    function changeEventHandler(e){
        setchannelName(e.target.value)
    }

    return (
        <div className="mt-3">
            <div 
                className="px-4 text-notselected p-1 flex flex-row items-center justify-between hover:text-white hover:bg-secondary" 
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
                            <IoReloadOutline onClick={() => reloadChannels()} size="13" color="white"></IoReloadOutline>
                        </div> 
                        <div className="ml-2 h-5 w-5 hover:bg-hover rounded-md flex flex-row items-center justify-evenly">
                            <MdAdd color="white" onClickCapture={() => {clickAdd === true? setclickAdd(false): setclickAdd(true)}}></MdAdd>
                        </div> 
                    </div> 
                :null}  
                  
            </div>
            {clickAdd? 
                <div className="flex flex-row items-center px-6 pb-2">
                    <input placeholder="channel name" onChange={(e) => changeEventHandler(e)} className=" rounded-md px-2 w-full outline-none"></input>
                    <div onClick={() => createnewChannel()} className=" bg-blue-600 ml-2 w-6 h-6 rounded-md flex flex-row items-center justify-evenly">
                        <MdCheck></MdCheck>
                    </div>
                </div> 
            :null}  
            {list}           
        </div>
    )
}
