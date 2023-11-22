import React, {FC} from 'react';
import s from "components/Users/Users.module.css";
import {UserType} from "redux/users-reducer";
import userPhoto from "../../components/assets/img/userPhoto.webp"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {GetProfileType} from "components/Profile/ProfileContainer";



type T_Users = {
    users:UserType []
    totalUsersCount:number
    pageSize:number
    onPageChanged:(pageNumber:number) =>void
    changeFollow:(userID:number, follow: boolean) =>void
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
                                <img src={u.photos.small != null ? u.photos.small: userPhoto} className={s.img}/>
                            </NavLink>
                            {u.followed ? (
                                <button className={s.btn + " " + s.btn__unfollow} onClick={() =>
                                {
                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "db9e3cd2-c07a-4ab2-ac3b-047c620e81a9"
                                                }
                                            })
                                        .then((res) => {
                                            if (res.data.resultCode == 0 ){
                                                console.log ("Одписался")
                                                props.changeFollow(u.id, false)
                                            }
                                        });

                                }

                                }>Удалить из друзей</button>
                            ) : (
                                <button className={s.btn } onClick={() =>

                                {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true})
                                        .then((res) => {
                                               if (res.data.resultCode == 0 ){
                                                   console.log ("Удалить из друзей")
                                                   props.changeFollow(u.id, true)
                                               }
                                        });

                                }

                                }>Добавить в друзья</button>
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