import React from 'react';
import './Email.css';
import {
    ArrowBack,
    CheckCircle,
    Delete,
    Error,
    LabelImportant,
    MoreVert,
    MoveToInbox,
    WatchLater
} from "@material-ui/icons";
import EmailIcon from '@material-ui/icons/Email';
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";

function Email(props) {
    const history = useHistory();

    return (
        <div className="email">
            <div className="emailTools">
                <div className="emailToolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="mailBody">
                <div className="mailBodyHeader">
                    <h2>Title</h2>
                    <LabelImportant className={'mailBodyHeaderTitleIcon'}/>
                    <p>Mail</p>
                    <p className={'mailBodyHeaderTimestamp'}>timestamp</p>
                </div>
                <div className="mailBodyMessage">
                    Message
                </div>
            </div>
        </div>
    );
}

export default Email;