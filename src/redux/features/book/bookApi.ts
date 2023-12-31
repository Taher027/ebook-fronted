import api from "../../api/apiSlice";


export const bookApi = api.injectEndpoints({
    endpoints:(builder)=>({
        getAllBooks:builder.query({
            query:(filter)=>{
                const queryParams = [];
                for(const item in filter){
                    queryParams.push(
                        `${item}=${encodeURIComponent(filter[item])}`
                    )
                }
                const queryString = queryParams.join("&")
                return {
                    url:`/books?${queryString}`,
                    method:"GET"
                }
            }
        }),

        getSingleBook:builder.query({
            query:(id)=>`/books/${id}`
        }),
        addNewBook:builder.mutation({
            query:(data)=>({
                url:"/books/add-book",
                method:"POST",
                body:data
            })
        }),
        editBook:builder.mutation({
            query:(data)=>({
                url:`/books/${data.bookId}`,
                method:"PATCH",
                body:data
            })
        }),
        deleteBook:builder.mutation({
            query:(id)=>({
                url:`/books/${id}`,
                method:"Delete"
            })
        })
    })
})

export const {useGetAllBooksQuery, useAddNewBookMutation, useEditBookMutation,useDeleteBookMutation}= bookApi