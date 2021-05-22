import React from 'react';
import './EmailList.css';
import {Checkbox, IconButton} from "@material-ui/core";
import {MoreVert, ArrowDropDown, Redo, Settings, KeyboardHide, ChevronRight, ChevronLeft} from "@material-ui/icons";
import EmailRow from "./EmailRow";

function EmailList(props) {
    return (
        <div className="emailList">
            <div className="emailListSettings">
                <div className="emailListSettingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="emailListSettingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
            <div className="emailListList">
                <EmailRow mail={'twitch@twitch.com'} title={'Twitch'} message={'This is test'} time={'10pm'} />
            </div>
        </div>
    );
}

export default EmailList;