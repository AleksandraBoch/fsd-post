import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
            getAll: build.query({
                query: (limit = 10) => ({
                    url: `/posts`,
                    params: {
                        _limit: limit
                    }
                })
            }),
        }

    ),

})

export const {useGetAllQuery, useGetPostByIdQuery} = postsApi;



