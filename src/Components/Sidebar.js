import React from 'react';
import '../styles/Sidebar.css'
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import SidebarOption from "./SidebarOption";
import {useDispatch} from "react-redux";
import {openSendMessage} from "../features/emailSlice";

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <div className="composeButton">
                <Button
                    startIcon={<AddIcon fontSize={'large'} />}
                    className={'sidebarCompose'}
                    onClick={() => dispatch(openSendMessage())}
                >
                    Compose
                </Button>
            </div>

            <SidebarOption Icon={InboxIcon} title={'Inbox'} number={22} selected={true} />
            <SidebarOption Icon={StarIcon} title={'Starred'} number={4} />
            <SidebarOption Icon={LabelImportantIcon} title={'Important'} number={2} />
            <SidebarOption Icon={NearMeIcon} title={'Sent'} number={3} />
            <SidebarOption Icon={NoteIcon} title={'Drafts'} number={7} />
        </div>
    );
}

export default Sidebar;