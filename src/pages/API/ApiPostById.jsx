import {postsApi} from "../../shared/Api/ApiService";

export const getPostById = postsApi.injectEndpoints({

    endpoints: (build) => ({
        post: build.query({
            query: (id) => {
                return {url: `/posts/${id}`}
            }
        })
    })

})

export const {usePostQuery} = postsApi;