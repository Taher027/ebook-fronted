import api from "../../api/apiSlice";


const reviewApi = api.injectEndpoints({
  endpoints: (builder: { mutation: (arg0: { query: (data: any) => { url: string; method: string; body: any } }) => any; query: (arg0: { query: (bookId: any) => string }) => any }) => ({
    addReview: builder.mutation({
      query: (data: any) => ({
        url: "/reviews/add-new",
        method: "POST",
        body: data,
      }),
    }),
    getAllReviews: builder.query({
      query: (bookId: any) => `reviews/${bookId}`,
    }),
  }),
})

export const { useAddReviewMutation, useGetAllReviewsQuery } = reviewApi
