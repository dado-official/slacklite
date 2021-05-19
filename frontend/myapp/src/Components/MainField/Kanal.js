import React,{useState} from 'react'
import {MdStarBorder, MdStar, MdInfoOutline} from 'react-icons/md'
import {AiOutlineUserAdd} from 'react-icons/ai'

export default function Kanal({name}) {
    const [Fav, setFav] = useState(false)

    return (
        <div className="flex flex-row items-center justify-between">
            <div>
                <div className="flex flex-row items-center">
                    <p className=" font-bold mr-1">{name}</p>
                    {Fav === false ? 
                    <MdStarBorder onClick={()=> Fav === true ? setFav(false) : setFav(true)}/> : 
                    <MdStar onClick={()=> Fav === true ? setFav(false) : setFav(true)}/>}
                </div>
                <p>Thema hinzufügen</p>
            </div>
            <div className="flex flex-row items-center">
                <div className="hover:bg-gray-200 mx-1 p-1 rounded-md">
                    <AiOutlineUserAdd size="1.5rem"></AiOutlineUserAdd>
                </div>
                <div className="hover:bg-gray-200 mx-1 p-1 rounded-md">
                    <MdInfoOutline size="1.5rem"></MdInfoOutline>
                </div>
            </div>
        </div>
       
    )
}
