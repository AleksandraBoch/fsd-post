import React from 'react';
import {Routes,Route} from "react-router-dom";
import PostList from "../../pages/PostPage/PostList";
import PostIdPage from "../../pages/PostId/PostIdPage";

const AppWithRouter = () => {
    return (
            <Routes>
                <Route  path={'/'} element={<PostList/>}/>
                <Route  path={'/posts'} element={<PostList/>}/>
                <Route  exact path={'/posts/:id'} element={<PostIdPage/>}/>
            </Routes>
    );
};

export default AppWithRouter;