import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogsPages_wrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    Виталий
                </div>
                <div className={s.dialog}>
                    Виталий
                </div>
                <div className={s.dialog}>
                    Виталий
                </div>
                <div className={s.dialog}>
                    Виталий
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you
                </div>
                <div className={s.message}>
                    Sorry
                </div>
            </div>
        </div>
    );
};

