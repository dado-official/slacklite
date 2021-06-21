import React,{useState} from 'react'
import {MdInfoOutline} from 'react-icons/md'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Kanal({name, setOpenSidebar, openSidebar}) {

    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center">
                <div className={` w-10 h-10 bg-primary mr-2 rounded-full lg:hidden flex flex-row items-center justify-evenly`}>
                    <div
                        className="cursor-pointer"
                        onClick={() => {openSidebar? setOpenSidebar(false): setOpenSidebar(true)}}
                    >
                        <GiHamburgerMenu color="white" size="18" />
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <p className=" font-bold">{name}</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="hover:bg-gray-200 p-1 rounded-md">
                    <AiOutlineUserAdd size="1.5rem"></AiOutlineUserAdd>
                </div>
                <div className="hover:bg-gray-200 p-1 rounded-md">
                    <MdInfoOutline size="1.5rem"></MdInfoOutline>
                </div>
            </div>
        </div>
       
    )
}
