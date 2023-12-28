/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://ebook-backend-53gk8qf7b-taher027.vercel.app/api/v1"
    }),
    endpoints:(builder) =>({}),
})

export default api;