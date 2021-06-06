import React,{useState} from 'react'
import {FiHash} from 'react-icons/fi'
import { Link } from "react-router-dom";

export default function ChannelComponent({key, id, name, participants}) {
    const [hover, setHover] = useState(false)


    function onClickEventHandler(){
        
    }

    return (
        <Link 
            to={"/channel/" + id}
            className="flex flex-row items-center pl-12 p-1 text-notselected hover:text-white hover:bg-secondary"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            onClick={() => onClickEventHandler()}
        >
            <FiHash color={hover === true ? "white" : "#998099"}></FiHash>
            <p className="ml-1 ">{name}</p>
        </Link>
    )
}
