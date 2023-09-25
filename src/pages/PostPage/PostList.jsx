import s from "./postList.module.css"
import PostItem from "../../entities/PostItem";
import {useState} from "react";
import Loader from "../../shared/utils/loader/loader";
import {useGetAllQuery} from "../../shared/Api/ApiService";


const PostList = () => {
    const [limit, setLimit] = useState(100)
    const {isLoading, data} = useGetAllQuery(limit)

    return (
        <div>

            <div className={s.main}>
                <h1>Список постов</h1>
                {
                    isLoading ?
                        <><Loader/></>
                        :
                        <> {data && data.map(posts =>
                            <PostItem key={posts.id} posts={posts}/>)}</>

                }
            </div>

        </div>
    );
};


export default PostList;