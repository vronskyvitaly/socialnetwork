import React, {FC} from 'react';
import {UserType} from "redux/users-reducer";
import s from "./Users.module.css"


type UsersPropsType = {
    users: UserType[]
    follow:(userID:number) =>void
    unfollow:(userID:number) => void
    setUsers:(users:UserType[])=>void
}

export const Users:FC<UsersPropsType> = (props) => {
    return (
        <div className={s.usersContainer_wrapper}>
            {props.users.map(u=> {
                return (
                    <div className={s.user_wrapper}>
                        <div className={s.blockOne}>
                            <img className={s.img}/>
                            {u.followed
                                ? <button onClick={()=>props.follow(u.id)}>follow</button>
                                : <button onClick={()=>(props.unfollow(u.id))}>unfollow</button>
                            }

                        </div>
                        <div className={s.blockTwo}>
                            <h4>{u.fullNane}</h4>
                            <div className={s.location_wrapper}>
                                <p className={s.location}>{u.location.city}</p>
                                <p className={s.location}>{u.location.country}</p>
                            </div>
                            <p className={s.status}>{u.status}</p>
                        </div>
                    </div>
                )
            })}
        </div>



    );
};
