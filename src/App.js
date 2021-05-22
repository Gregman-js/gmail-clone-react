import React, {useEffect} from 'react';
import './styles/App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Email from "./Components/Email";
import EmailList from "./Components/EmailList";
import SendEmail from "./Components/SendEmail";
import {useDispatch, useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/emailSlice";
import {login, selectUser} from "./features/userSlice";
import Login from "./Components/Login";
import {auth} from "./firebase";

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();


    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                // logged in
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            }
        })
    }, []);


    return (
        <Router>
            {!user ? (
                <Login/>
            ) : (
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
            )}
        </Router>
    );
}

export default App;
