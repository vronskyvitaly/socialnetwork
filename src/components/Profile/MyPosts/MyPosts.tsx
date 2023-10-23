import React, { ChangeEvent, RefObject, useState } from "react";
import { Post } from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css";
import {
    addPostAC,
    StateProfilePageType,
} from "redux/profile-reducer";

import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "redux/redux-store";

export const MyPosts = () => {
    const storeMyPosts = useSelector<RootStateType, StateProfilePageType>(
        (state) => state.profilePage
    );
    const dispatch = useDispatch();

    const [value, setValue] = useState("");


    const addPost = () => {
        if (value.trim() !== "") {
            dispatch(addPostAC(value));
            setValue("")
        }
    };

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    };


    const renderPostsElements = storeMyPosts.posts.map((p) => (
        <Post message={p.message} />
    ));


    return (
        <div className={s.my_Posts_wrapper}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onChangeHandler} value={value}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>New posts</div>
            </div>
            <div className={s.posts}>{renderPostsElements}</div>
        </div>
    );
};
