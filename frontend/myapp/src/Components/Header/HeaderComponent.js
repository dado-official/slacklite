import React from 'react'
import { MdHistory, MdHelpOutline} from 'react-icons/md'
import InputField from './InputField'

export default function HeaderComponent() {
    return (
        <div className="h-5pro w-full bg-secondary flex flex-row items-center justify-center p-1 ">
            <MdHistory color="white" size="20px"></MdHistory>
            <InputField className=" bg-white mx-2  w-40 rounded-lg border-bordercolor">
                <p></p>
            </InputField>
            <MdHelpOutline color="white" size="20px" ></MdHelpOutline>
        </div>
    )
}
