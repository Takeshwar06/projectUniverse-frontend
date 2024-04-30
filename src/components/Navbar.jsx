import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
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
                <div className="header ml-3 flex cursor-pointer items-center gap-3">
                    <Link to="/profile" className="menu_link p-[.1rem] flex rounded-full custom-transition bg-blue-200 shadow-md shadow-blue-200 ">
                        <img src="https://res.cloudinary.com/do3fiil0d/image/upload/v1707374136/dlz7sat4yianjpmdr9bi.jpg" alt="user" className='w-9 h-9 rounded-full border-[1px] border-gray-400' srcSet="" />
                    </Link>
                    <Link to="/" className='user_name cursor-pointer font-bree text-gray-800 sm:text-xl md:text-2xl hover:opacity-90 custom-transition ' >
                        Takeshwar janghel
                    </Link>
                </div>
                {/* right part */}
                <ul
                    style={{ left: '100%' }}
                    className='menu_links flex items-center justify-center gap-3 ' >

                    {/* upload project menu link */}
                    <li>
                        <Link to="/projectupload" className=" custom-nav-link rounded-sm hover:bg-blue-100  ">

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

                        </Link>
                    </li>

                    {/* Notification menu link */}
                    <li>
                        <Link to="/projectcode" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">

                            {/* we changing content when mobile size  */}
                            {
                                !isMobile && (
                                    <>
                                        <Tooltip title="Project" arrow>
                                            <FolderSpecialIcon className='text-blue-900'
                                                style={{ fontSize: '1.8rem' }}
                                            />
                                        </Tooltip>
                                    </>
                                ) 
                            }
                        </Link>
                    </li>
                    {/* Notification menu link */}
                    <li>
                        <Link to="/notifications" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">

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
                        </Link>
                    </li>
                    {/* Message icon menu link */}
                    <li>
                        <Link to="/messages" className="menu_link flex items-center justify-center hover:bg-blue-100  px-3 py-2  custom-transition hover:opacity-90 rounded-2xl ">
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
                        </Link>
                    </li>
                    {/* Logout icon menu link */}
                    <li>
                        <Link to="/auth" className="menu_link flex items-center  justify-center  hover:bg-blue-100   px-3 py-2 custom-transition hover:opacity-90 rounded-2xl ">
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
                        </Link>
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
