import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';


const Navbar = () => {

    // need state : when mobile size then convert menu icons to texts
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

    useEffect(() => {
        // Update the isMobile state when the window is resized
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 690);
        };
        // when window resize then call handleResize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {/* navbar container */}
            <nav id="navbar" className={`nav_container  flex items-center justify-between md:px-10  h-16 bg-slate-100 min-w-full `} >
                {/* header section left part */}
                <div className="header ml-3 flex items-center gap-3">
                    <a to="/profile" className="menu_link p-[.1rem] flex rounded-full custom-transition bg-blue-200 shadow-md shadow-blue-200 ">
                        <img src="" alt="user" className='w-9 h-9 rounded-full border-[1px] border-gray-400' srcSet="" />
                    </a>
                    <a to="/" className='user_name font-bree text-gray-800 sm:text-xl md:text-2xl hover:opacity-90 custom-transition ' >
                        Takeshwar janghel
                    </a>
                </div>
                {/* right part */}
                <ul
                    style={{ left: '100%' }}
                    className='menu_links flex items-center justify-center gap-3 ' >

                    {/* upload project menu link */}
                    <li>
                        <a to="/" className=" custom-nav-link rounded-sm hover:bg-blue-100  ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="New Project" arrow className='custom-tooltip'>
                                            <CloudUploadIcon
                                                id="upload_project"
                                                className='text-blue-900'
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                                
                            }

                        </a>
                    </li>

                    {/* Notification menu link */}
                    <li>
                        <a to="/notification" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="Notification" arrow>
                                            <NotificationsIcon className='text-blue-900'
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                            }
                        </a>
                    </li>
                    {/* Notification menu link */}
                    <li>
                        <a to="/notification" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="Notification" arrow>
                                            <NotificationsIcon className='text-blue-900'
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                            }
                        </a>
                    </li>
                    {/* Message icon menu link */}
                    <li>
                        <a to="/message" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">
                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="Message" arrow>
                                            <MessageIcon className='text-blue-900'
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                            }
                        </a>
                    </li>
                    {/* Logout icon menu link */}
                    <li>
                        <a to="/auth" className="menu_link flex items-center  justify-center  hover:bg-blue-100   px-3 py-2 custom-transition hover:opacity-90 rounded-2xl ">
                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="Logout" arrow>
                                            <LogoutIcon 
                                                className='text-blue-900 '
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                            }
                        </a>
                    </li>
                </ul>

                {/* menu button which is visible when mobile screen */}
                {/* <a to="/" className="menu_bar rounded-md flex custom-transtion ">

                    <MenuIcon
                        onClick={toggleMenu}
                        className="hover:opacity-80" style={{ fontSize: '2.5rem', display: showMenu ? 'none' : 'block' }} />
                    <CloseIcon
                        onClick={toggleMenu}
                        className="hover:opacity-80" style={{ fontSize: '2.5rem', display: showMenu ? 'block' : 'none' }} />

                </a> */}
            </nav>

        </>
    )
}

export default Navbar
