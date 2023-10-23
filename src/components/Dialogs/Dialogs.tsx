import React, { ChangeEvent, useState } from 'react';
import s from './Dialogs.module.css'
import { DialogItem } from "components/Dialogs/DialogItem/DialogItem";
import { Message } from "components/Dialogs/Message/MessageItem";
import { sendMassageAC, StateDialogsPageType, updateNewMassageBodyAC } from "redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "redux/redux-store";

export const Dialogs = () => {
    const [value, setValue] = useState("");

    const storeDialogs = useSelector<RootStateType, StateDialogsPageType>(state => state.dialogsPage);
    const dispatch = useDispatch();

    const dialogsElement = storeDialogs.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />
    );
    const messagesElement = storeDialogs.messages.map(m =>
        <Message message={m.message} />
    );

    const onSendMassageClick = () => {
        if (value.trim() !== '') {
            dispatch(sendMassageAC(value));
            setValue(""); // Сбросить значение после отправки сообщения
        }
    };

    const onNewMassageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    };

    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
            <textarea
                value={value}
                onChange={onNewMassageChange}
                placeholder="Enter your massage"
            ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMassageClick}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
