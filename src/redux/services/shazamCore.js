import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreAPI = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b0cf7ac288msh5a203b1b7656df1p17bcdcjsn121653b37208')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreAPI