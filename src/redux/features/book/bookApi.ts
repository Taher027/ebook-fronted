import api from "../../api/apiSlice";

export const bookApi = api.injectEndpoints({
    endpoints:(builder)=>({
        addBook :builder.mutation({
            query:(data)=>({
                url:"/books/add-book",
                method:"POST",
                body:data,
            })
        })
    })
})
export const {useAddBookMutation}= bookApi
