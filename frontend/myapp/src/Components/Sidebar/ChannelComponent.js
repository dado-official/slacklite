import React,{useState} from 'react'
import {FiHash} from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function ChannelComponent({setCurrentRoom, room}) {
    const [hover, setHover] = useState(false)


    return (
        <Link 
            to={"/channel/" + room.roomId}
            className="flex flex-row items-center pl-12 p-1 text-notselected hover:text-white hover:bg-secondary"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            onClick={() => setCurrentRoom(room)}
        >
            <FiHash color={hover === true ? "white" : "#998099"}></FiHash>
            <p className="ml-1 ">{room.name}</p>
        </Link>
    )
}
