import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdCreate} from 'react-icons/md'
import {MdWidgets} from 'react-icons/md'
import {MdMoreVert} from 'react-icons/md'
import {RiCloseFill} from 'react-icons/ri'
import ChannelsComponent from './ChannelsComponent'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Sidebar({ username,  openSidebar, setOpenSidebar, reloadChannels, rooms, kontakte, setCurrentRoom}) {
    
    return (
        <header>
            <div className=" h-screen lg:w-64 w-full fixed bg-primary top-0">
            <div className="text-white font-bold text-md p-3 px-5 h-16 border-t border-b border-bordercolor flex flex-row items-center justify-between">
                <div className=" flex flex-row items-center">
                    <p className="mr-1">{username}</p>
                </div>
                <div className="bg-white w-9 h-9 rounded-full flex flex-row lg:hidden items-center justify-evenly">
                    <GiHamburgerMenu onClick={() => {openSidebar? setOpenSidebar(false): setOpenSidebar(true)}} color="#3F0E40"></GiHamburgerMenu>
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
            <ChannelsComponent reloadChannels={reloadChannels} rooms={rooms} setCurrentRoom={setCurrentRoom} setOpenSidebar={setOpenSidebar}></ChannelsComponent>
            
        </div>
        </header>
        
    )
}


//<DirektnachrichtenComponent kontakte={kontakte}></DirektnachrichtenComponent>