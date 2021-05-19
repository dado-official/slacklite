import React,{useState} from 'react'
import {MdClose} from 'react-icons/md'
export default function DirektnachrichtKontakt({name, profImg}) {
    const [Hover, setHover] = useState(false)
    return (
        <div  className="p-1 pl-12 pr-4 text-notselected hover:text-white hover:bg-secondary flex flex-row items-center justify-between"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            <div className="flex flex-row items-center">
                <div className="h-5 w-5 bg-hover rounded-md mr-2">
                    <img src={profImg === "" ? "https://i.pinimg.com/originals/9f/00/af/9f00af501d2d324ac7f8ebb559fc25dd.png" : profImg}></img>
                </div>
                <p>{name}</p>
            </div>
            {Hover === true ? <MdClose></MdClose> : null}
            
        </div>
    )
}
