import React from 'react';
import {Post} from "components/Profile/MyPosts/Post/Post";
import s from "./MyPosts.module.css"


type PostsDataType = {
    id:number
    message:string
}

export const MyPosts = () => {


    const postsData:PostsDataType[] = [
        {id:1 , message:"One message"},
        {id:2 , message:"Two message"},
    ]

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
                {postsData.map(po=>{

                    return(
                        <Post message={po.message}/>
                    )
                })}

            </div>
        </div>
    )

};
