import React from 'react';
import './EmailRow.css';
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";
import {useHistory} from 'react-router-dom';

function EmailRow({title, mail, message, time}) {
    const history = useHistory();

    return (
        <div onClick={() => history.push('/mail')} className="emailRow">
            <div className="emailRowOptions">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <h3 className="emailRowTitle">
                {mail}
            </h3>
            <div className="emailRowMessage">
                <span className={'emailRowMessageTitle'}>
                    {title}
                </span>
                <span className={'emailRowMessageContent'}>
                    - {message}
                </span>
            </div>
            <div className="emailRowRight">
                {time}
            </div>
        </div>
    );
}

export default EmailRow;