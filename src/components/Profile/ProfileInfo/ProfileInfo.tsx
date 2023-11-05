import React from 'react';
import s from './ProfileInfo.module.css'
import wallImg from "../../assets/img/wallImg.webp"


export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wall}>
                <img className={s.wall_img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIw-b1SPTd7ouxkj9IqHjcSktmN3sBs5r0mA&usqp=CAU"} alt=""/>
            </div>
            <div className={s.description}>
                <img className={s.ava}/>
                <div className={s.body_wrapper}>
                    <h4 className={s.user_name}>Vitaly Vronsky</h4>
                    <p className={s.user_status}>Web designer and frontend developer</p>
                </div>
            </div>
        </div>
    );
};

