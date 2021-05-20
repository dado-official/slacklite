import React from 'react'

export default function DateMessage() {
    return (
        <div>
            <div className="flex felx-row">
                <div className=" flex-grow-0 border-t mt-3 border-gray-300 w-full flex justify-around"></div>
                <div className="sticky top-0 rounded-full border border-gray-300 ">
                    <p className="p-1 px-2 text-sm whitespace-nowrap">Montag, 17 Mai</p>
                </div>
                <div className="flex-grow-0 border-t mt-3 border-gray-300 w-full flex justify-around"></div>
            </div>
        </div>
    )
}
