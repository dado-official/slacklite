import React,{useState} from 'react'
import InputForMessageComponent from './InputForMessageComponent'
import ToolBar from './ToolBar'

export default function MessageInputComponent() {
    const [Action, setAction] = useState(false)
    return (
        <div className="border border-gray-600 rounded-md mx-3 mb-3 bottom-0"
            onMouseEnter={()=>setAction(true)}
            onMouseLeave={()=>setAction(false)}
        >
            <InputForMessageComponent></InputForMessageComponent>
            <ToolBar Action={Action}></ToolBar>
        </div>
    )
}
