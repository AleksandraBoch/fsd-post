
import s from "./postList.module.css"
import PostItem from "./PostCard/PostItem";
import {ApiService} from "../../shared/Api/Api";
import {useEffect, useState} from "react";


const PostList = () => {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        ApiService.getAll().then(res=>setPosts(res.date))
    },[])
// async function fetchPosts(){
//         const response=ApiService()
//     setPosts(response.data)
// }
async function getDate(){
        const newPosts=await ApiService.getAll()
    setPosts(newPosts)
}


    return (
        <div >
    <h1>Список постов</h1>
            <div className={s.main}>
                {/*{post.map(post,index=>*/}
                {/*<PostItem key={post.id} post={post} />)}*/}
                {posts && posts.map(posts=>
                    <PostItem
                    posts={posts}/>
                )}

                <button onClick={getDate}></button>
            </div>

        </div>
    );
};

export default PostList;