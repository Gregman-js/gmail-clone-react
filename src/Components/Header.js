import React from 'react';
import '../styles/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {logout, selectUser} from "../features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../firebase";

function Header(props) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    }

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
                <Avatar title={'Logout'} className={'avatar'} src={user?.photoUrl} onClick={signOut} />
            </div>
        </div>
    );
}

export default Header;