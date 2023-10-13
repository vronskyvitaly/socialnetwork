import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "components/Dialogs/DialogItem/DialogItem";
import {Message} from "components/Dialogs/Message/MessageItem";
import {StoreType} from "redux/state";
import {sendMassageAC, updateNewMassageBodyAC} from "redux/dialogs-reducer";


type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage


    const dialogsElement = state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = state.messages.map(m =>
        <Message message={m.message}/>)
    let newMassageBody = props.store.getState().dialogsPage.newMassageBody

    const onSendMassageClick = () => {
        if (newMassageBody.trim() !== '') {
            props.store.dispatch(sendMassageAC())
        }
    }

    const onNewMassageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.store.dispatch(updateNewMassageBodyAC(body))

    }


    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMassageBody} onChange={onNewMassageChange}
                                   placeholder={"Enter your massage"}></textarea></div>
                    <div>
                        <button onClick={onSendMassageClick}>Добавить</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

