import React from 'react';
import '../styles/EmailRow.css';
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {selectMail} from "../features/emailSlice";

function EmailRow({id, title, mail, message, time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            mail,
            message,
            time
        }));
        history.push('/mail');
    }

    return (
        <div onClick={openMail} className="emailRow">
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