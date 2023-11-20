import React, {FC} from 'react';
import s from "components/Users/Users.module.css";
import {UserType} from "redux/users-reducer";



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
                            <img className={s.img} alt={"Profiles photo"}/>
                            {u.followed ? (
                                <button onClick={() => props.changeFollow(u.id, false)}>Отписаться</button>
                            ) : (
                                <button onClick={() => props.changeFollow(u.id, true)}>Подписаться</button>
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