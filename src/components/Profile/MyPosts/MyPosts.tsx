import React, {RefObject} from 'react';
import {Post} from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css"
import {PostsDataType} from "redux/state";


type MyPostsPropsType = {
    posts: PostsDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.posts.map(p => <Post message={p.message}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.my_Posts_wrapper}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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
