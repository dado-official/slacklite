import React,{useState} from 'react'
import {FiHash} from 'react-icons/fi'

export default function ChannelComponent({name}) {
    const [hover, setHover] = useState(false)
    return (
        <div 
            className="flex flex-row items-center pl-12 p-1 text-notselected hover:text-white hover:bg-secondary"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
        >
            <FiHash color={hover === true ? "white" : "#998099"}></FiHash>
            <p className="ml-1 ">{name}</p>
        </div>
    )
}
