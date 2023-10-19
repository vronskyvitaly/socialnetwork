import React, {RefObject} from 'react';
import {Post} from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css"
import {ActionTypes, PostsDataType, } from "redux/store";
import {updateNewPostTextAC} from "redux/profile-reducer";




type MyPostsPropsType = {
    posts: PostsDataType[]
    newPostsText: string
    dispatch :(action:ActionTypes)=>void

}


export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.posts.map(p => <Post message={p.message}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            if (text.trim() !== "") {
                // первый способ
                let action:ActionTypes = {type: "ADD-POST"};
                props.dispatch(action)
            }

        }
    };

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextAC(text))
        }
    }



    return (
        <div className={s.my_Posts_wrapper}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChangeHandler}
                              ref={newPostElement}
                              value={props.newPostsText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    New posts
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};
