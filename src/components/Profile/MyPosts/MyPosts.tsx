import React from 'react';
import {Post} from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css"
import {DialogsDataType, MessagesDataType, PostsDataType} from "redux/state";



type MyPostsPropsType = {
    posts:PostsDataType[]
}

export const MyPosts = (props:MyPostsPropsType) => {


    const postsElements = props.posts.map(p=> <Post message={p.message}/>)

    return (
        <div className={s.mуPosts_wrapper}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    New posts
                </div>
            </div>
            <div className={s.posts}>
                {/*<Post message={"One message"}/>*/}
                {postsElements}
            </div>
        </div>
    )

};
