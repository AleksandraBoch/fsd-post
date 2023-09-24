import React from 'react';
import s from './PostId.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {postsApi, useGetPostByIdQuery} from "../../../shared/Api/ApiService";
import Loader from "../../../shared/loader/loader";
import {usePostQuery} from "./API/ApiPostById";


const PostIdPage = () => {
    const {id} = useParams();
    const router = useNavigate();
    const {isLoading, data: post, isError} = usePostQuery(id);


    if (isLoading) {
        return <div><Loader/></div>;
    }

    if (isError) {
        return <div>Error loading post details</div>;
    }

    return (
        <div className={s.wrapper}>
            <h1>Вы перешли на страницу поста № {id}</h1>
            <div className={s.PostId_Block}>
                <div className={s.main}>
                    {post.id} {post.title}
                </div>
                <div className={s.text}>{post.body}</div>
                <button
                    className={s.button}
                    onClick={() => router(`/posts`)}
                >
                    Назад
                </button>
            </div>
        </div>
    );
};

export default PostIdPage;