import React from 'react'
import HeaderComponent from './Header/HeaderComponent'
import Sidebar from './Sidebar/SidebarComponent'

export default function MainComponent() {
    return (
        <div className="h-full w-full">
            <HeaderComponent></HeaderComponent>
            <Sidebar></Sidebar>
        </div>
    )
}
