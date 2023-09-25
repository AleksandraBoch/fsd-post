import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
            getAll: build.query({
                query: (limit = 10,page=1) => ({
                    url: `/posts`,
                    params: {
                        _limit: limit,
                        _page:page
                    }
                })
            }),
        }

    ),

})

export const {useGetAllQuery, useGetPostByIdQuery} = postsApi;



