import React from 'react';
import '../styles/Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import {login} from "../features/userSlice";
import {useDispatch} from "react-redux";

function Login(props) {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className={'login'}>
            <div className="loginContainer">
                <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt=""/>
                <Button variant={'contained'} color={'primary'} onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;