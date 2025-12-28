import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToCartApi: builder.mutation<any, { userId: number; products: Array<{ id: number; quantity: number }> }>({
      query: (cartInfo) => ({
        url: "/carts/add",
        method: "POST",
        body: cartInfo,
      }),
    }),
  }),
});

export const {
  useAddToCartApiMutation
} = cartApi;
