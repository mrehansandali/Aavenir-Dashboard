import React, { useState, useEffect } from 'react';
import "./Dashboard.css"
import LeftArrow from "../assets/back.png"
import Menu from "../assets/menu.png"
import Dashboardsvg from "../assets/dashboard.png"
import Farmsvg from "../assets/box.png"
import Boardsvg from "../assets/board-meeting.png"
import Bondsvg from "../assets/box.png"
import Referralsvg from "../assets/network.png"
import Accademysvg from "../assets/briefcase.png"
import Dropdownsvg from "../assets/down-arrow.png"
import Usericon from "../assets/profile.png"
import { DashboardLi, Farm, Boardroom, Bond, Referral, Portfolio } from './ListItems';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const renderContent = () => {
        switch (activeItem) {
            case 'dashboard':
                return <DashboardLi />;
            case 'farm':
                return <Farm />;
            case 'boardroom':
                return <Boardroom />;
            case 'bond':
                return <Bond />;
            case 'referral':
                return <Referral />;
            case 'portfolio':
                return <Portfolio />;
            default:
                return null;
        }
    };


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [scrollBackground, setScrollBackground] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrollBackground(true);
          } else {
            setScrollBackground(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div>
            <div className="dashboard">
                <div className={`dashboard ${sidebarOpen ? 'sidebar open' : 'sidebar'}`}>
                    <ul>
                        <li className='sidebarItem' onClick={toggleSidebar}>
                            {sidebarOpen ? <img src={LeftArrow} /> : <img src={Menu} />}
                        </li>
                        <li className={`sidebarItem ${activeItem === 'dashboard' ? 'active' : ''}`} onClick={() => handleItemClick('dashboard')}>
                            <img src={Dashboardsvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Dashboard</span>
                        </li>
                        <li className={`sidebarItem ${activeItem === 'farm' ? 'active' : ''}`} onClick={() => handleItemClick('farm')}>
                            <img src={Farmsvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Farm</span>
                        </li>
                        <li className={`sidebarItem ${activeItem === 'boardroom' ? 'active' : ''}`} onClick={() => handleItemClick('boardroom')}>
                            <img src={Boardsvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Boardroom</span>
                        </li>
                        <li className={`sidebarItem ${activeItem === 'bond' ? 'active' : ''}`} onClick={() => handleItemClick('bond')}>
                            <img src={Bondsvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Bond</span>
                        </li>
                        <li className={`sidebarItem ${activeItem === 'referral' ? 'active' : ''}`} onClick={() => handleItemClick('referral')}>
                            <img src={Referralsvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Referral</span>
                        </li>
                        <li className={`sidebarItem ${activeItem === 'portfolio' ? 'active' : ''}`} onClick={() => handleItemClick('portfolio')}>
                            <img src={Accademysvg} /><span className={sidebarOpen ? 'showText' : 'hideText'}>Portfolio</span>
                        </li>
                    </ul>
                </div>

                <div className={`content ${sidebarOpen ? 'expanded' : 'collapsed'}`}>
                    <div className={`button-container ${scrollBackground ? 'scroll-background' : ''}`}>
                        <button className="profile-button" onClick={toggleDropdown}>
                            <img className="profile-image" src={Usericon} alt="Profile" />
                            <h2>Dashboard</h2>
                            <img className="dropdown-icon" src={Dropdownsvg} alt="Dropdown" />
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    <ul>
                                        <li>Referral</li>
                                        <li>Settings</li>
                                        <li>Log In</li>
                                        <li>Log Out</li>
                                    </ul>
                                </div>
                            )}
                        </button>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;