import React from 'react';
import s from "./Preloader.module.css";


type PreloaderPropsType = {

}
export const Preloader = (props:PreloaderPropsType) => {
    return (
        <div className={s.louder}></div>
    );
};

