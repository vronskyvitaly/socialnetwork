import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "components/Dialogs/DialogItem/DialogItem";
import {Message} from "components/Dialogs/Message/MessageItem";
import {DialogsDataType, MessagesDataType} from "redux/store";
import {Redirect} from "react-router-dom";


type DialogsPropsType = {
    valueInput: string
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    sendMassage: ( value: string ) => void
    updateNewMassage: ( value: string ) => void
    isAuth: boolean
}


export const Dialogs: FC<DialogsPropsType> = ( props ) => {

    const dialogsElement = props.dialogs.map ( d =>
        <DialogItem name={d.name} id={d.id} key = {d.id}/>
    );
    const messagesElement = props.messages.map ( m =>
        <Message message={m.message} key = {m.id}/>
    );

    const onSendMassageClick = () => {
        if (props.valueInput.trim () !== '') {
            props.sendMassage ( props.valueInput );
        }
    };

    const onNewMassageChange = ( event: ChangeEvent<HTMLTextAreaElement> ) => {
        props.updateNewMassage ( event.currentTarget.value )
    };

    if (!props.isAuth) return <Redirect to = {"/login"} />


    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages_wrapper}>
                <div >
                    {messagesElement}
                </div >
                <div className={s.textarea_wrapper}>
                    <textarea
                        className={s.textarea}
                        value={props.valueInput}
                        onChange={onNewMassageChange}
                        placeholder="Enter your massage">
                   </textarea>
                    <button onClick={onSendMassageClick}>Добавить</button>
                </div>

            </div>
        </div>

    );
};
