import React from 'react'

export default function InputForMessageComponent({message, setmessage}) {


    function changeEventHandler(e){
        //console.log(e.target.value)
        setmessage(e.target.value)
    }

    return (
        <input onChange={changeEventHandler} placeholder="Nachrichten senden an #kanal" className="h-10 w-full rounded-t-xl focus:outline-none p-3">
        
        </input>
    )
}
