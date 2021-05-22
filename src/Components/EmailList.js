import React, {useEffect, useState} from 'react';
import '../styles/EmailList.css';
import {Checkbox, IconButton} from "@material-ui/core";
import {MoreVert, ArrowDropDown, Redo, Settings, KeyboardHide, ChevronRight, ChevronLeft} from "@material-ui/icons";
import EmailRow from "./EmailRow";
import {db} from "../firebase";

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))));
    }, []);

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
                {emails.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow
                        id={id}
                        key={id}
                        mail={to}
                        title={subject}
                        message={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    );
}

export default EmailList;