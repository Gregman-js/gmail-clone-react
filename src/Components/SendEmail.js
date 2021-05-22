import React from 'react';
import '../styles/SendEmail.css'
import {Close} from "@material-ui/icons";
import {Button, IconButton} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {closeSendMessage} from "../features/emailSlice";
import {useDispatch} from "react-redux";
import {db} from "../firebase";
import firebase from 'firebase';

function SendEmail() {
    const {register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = formData => {
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className={'sendEmail'}>
            <div className="sendEmailHeader">
                <h3>New Message</h3>
                <IconButton onClick={() => dispatch(closeSendMessage())}>
                    <Close className={'sendEmailClose'} />
                </IconButton>
            </div>

            <form className={'sendEmailForm'} action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={"Email"} {...register('to', {required: true})}/>
                <input type="text" placeholder={'Subject'} {...register('subject', {required: true})}/>
                <textarea placeholder={"Message"} {...register('message', {required: true})} />

                <div className="sendEmailOptions">
                    <Button className={'sendEmailButton'} type={'submit'}>Send</Button>
                </div>
            </form>
        </div>
    );
}

export default SendEmail;