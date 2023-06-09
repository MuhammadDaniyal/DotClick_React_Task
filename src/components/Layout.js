import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'

const Layout = ({ children }) => {
    return (
        <>
            <div className='layout-div'>
                <Sidebar />
                {children}
                <Chat />
            </div>
        </>
    )
}

export default Layout