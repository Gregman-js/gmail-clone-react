import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Email from "./Email";
import EmailList from "./EmailList";
import SendEmail from "./SendEmail";
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/emailSlice";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

    return (
        <Router>
            <div className="app">
                <Header/>
                <div className="appBody">
                    <Sidebar/>
                    <Switch>
                        <Route exact path={'/'} component={EmailList} />
                        <Route exact path={'/mail'} component={Email} />
                    </Switch>
                </div>
                {sendMessageIsOpen && <SendEmail/>}
            </div>
        </Router>
    );
}

export default App;
