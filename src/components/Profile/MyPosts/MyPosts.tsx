import React, {ChangeEvent, FC} from "react";
import { Post } from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css";
import {PostsDataType} from "redux/store";



type MyPostsPropsType = {
    posts: PostsDataType[]
    newPostsText:string
    addPost:(newPostText:string) => void
    updateNewPostText:(value:string)=>void
}

export const MyPosts:FC<MyPostsPropsType> = (props) => {

    const addPost = () => {
        if (props.newPostsText.trim() !== "") {
            // dispatch(addPostAC(storeMyPosts.newPostsText));
            props.addPost(props.newPostsText)
        }
    };

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // dispatch(updateNewPostTextAC(event.currentTarget.value));
        props.updateNewPostText(event.currentTarget.value)
    };


    const renderPostsElements = props.posts.map((p) => (
        <Post message={p.message} key = {p.id} />
    ));



    return (
        <div className={s.my_Posts_wrapper}>
            <div>
                {/*<h3>My posts</h3>*/}
                <div>
                    <textarea className={s.textarea}
                              placeholder={"Что у вас нового?"}
                              onChange={onChangeHandler}
                              value={props.newPostsText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Опубликовать</button>
                </div>
                {/*<div>New posts</div>*/}
            </div>
            <div className={s.posts_wrapper}>{renderPostsElements}</div>
        </div>
    );
};
