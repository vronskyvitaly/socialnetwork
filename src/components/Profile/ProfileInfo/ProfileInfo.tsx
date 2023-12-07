import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileContainerType} from "components/Profile/ProfileContainer";
import {Preloader} from "components/common/Preloader/Preloader";
import userPhoto from "../../assets/img/userPhoto.webp"
import imgTest from "../../assets/img/imTest.jpg"
import {ProfileStatus} from "components/Profile/ProfileInfo/ProfileStatus";


export const ProfileInfo:FC<ProfileContainerType> = (props) => {
    if (!props.profile){
        return <Preloader/>
    }


    return (
        <div>
            <div className={s.wall}>
                <img className={s.wall_img} src={ imgTest} />
            </div>
            <div className={s.description}>
                <img className={s.ava} src={props.profile.photos.large !== null ? props.profile.photos.large: userPhoto }/>
                <div className={s.body_wrapper}>
                    <h4 className={s.user_name}>{props.profile.fullName}</h4>
                    <p className={s.user_status}>{props.profile.aboutMe}</p>
                    <ProfileStatus status = {props.status}  updateUserStatusTC = {props.updateUserStatusTC}/>
                </div>
            </div>
        </div>
    );
};

