import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarLinks } from './SidebarData';
import './Sidebar.css';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <div className={isSidebarOpen ? 'show sidebar' : 'sidebar'}>
                <div>
                    <div className="sidebar_head">
                        <h1>LODGN</h1>
                    </div>
                    <div className="sidebar_body">
                        <ul>
                            {
                                sidebarLinks.map((currValue) => {
                                    const { id, link, path } = currValue;
                                    return (
                                        <li key={id}>
                                            <NavLink className={'sidebar_link'} to={path}>{link}</NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="sidebar_foot">
                    <NavLink className={'btn'} to={'/'}>Log-Out</NavLink>
                    <div className='sidebar_foot_info'>
                        <p>Help-Desk</p>
                        <p>786-874 9988</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;