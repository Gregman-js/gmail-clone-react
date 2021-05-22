import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header(props) {
    return (
        <div className="header">
            <div className="headerLeft">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt=""/>
            </div>
            <div className="headerMiddle">
                <SearchIcon/>
                <input type="text" placeholder={"Search mail"}/>
                <ArrowDropDownIcon className={'headerInputCaret'} />
            </div>
            <div className="headerRight">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar/>
            </div>
        </div>
    );
}

export default Header;