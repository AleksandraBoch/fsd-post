import React from 'react';
import s from './postItem.module.css'
import {useNavigate} from "react-router-dom";


const PostItem = (post) => {
    const router = useNavigate()
    return (
        <div className={s.post}>
            <div className={s.post_content}>
                <strong>{post.id}</strong>
                <div className={s.title}>
                    {post.posts.id}.{post.posts.title}</div>
                <div className={s.text}>{post.posts.body}</div>
                <button
                    className={s.button}
                    onClick={() => router(`/posts/${post.posts.id}`)}>открыть
                </button>
            </div>
        </div>
    );
};

export default PostItem;