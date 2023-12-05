import React, {FC} from 'react';
import s from "components/Users/Users.module.css";
import userPhoto from "../../components/assets/img/userPhoto.webp"
import {NavLink} from "react-router-dom";
import {UserType} from "api/users-api";


type T_Users = {
    users:UserType []
    totalUsersCount:number
    pageSize:number
    onPageChanged:(pageNumber:number) =>void
    followingInProgress: number[]
    upFollowTC : (userID:number) => void
    followTC : (userID:number) => void
}

const Users:FC<T_Users> = (props) => {


    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={s.usersContainer_wrapper}>
            <div className={s.buttons_selectPage_wrapper}>
                {pages.map(p=> {
                    return <button onClick={()=> props.onPageChanged(p)} key={p} className={s.selectedPage}>{p}</button>
                })}
            </div>
            {props.users.map(u=> {
                return (
                    <div className={s.user_wrapper} key={u.id}>
                        <div className={s.blockOne}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={s.img} src={u.photos.small != null ? u.photos.small: userPhoto}/>
                            </NavLink>
                            {u.followed ? (
                                <button className={s.btn + " " + s.btn__unfollow}
                                        disabled={props.followingInProgress.some(id=> id === u.id)}
                                        onClick={() => {props.upFollowTC(u.id)}}>Удалить из друзей</button>
                            ) : (
                                <button className={s.btn }
                                        disabled={props.followingInProgress.some(id=> id === u.id)}
                                        onClick={() => {props.followTC(u.id)}}>Добавить в друзья</button>
                            )}

                        </div>
                        <div className={s.blockTwo}>
                            <h4>{u.name}</h4>
                            <div className={s.location_wrapper}>
                                {/*<p className={s.location}>{u.location.city}</p>*/}
                                {/*<p className={s.location}>{u.location.country}</p>*/}
                            </div>
                            {/*<p className={s.status}>{u.status}</p>*/}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;


