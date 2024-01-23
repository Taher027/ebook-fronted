/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://ebook-backend-chi.vercel.app/api/v1"
    }),
    endpoints:(_builder) =>({}),
})

export default api;