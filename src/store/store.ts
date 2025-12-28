import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productApi";
import { categoriesApi } from "../api/categoriesApi";
import categoryReducer from "../features/category/categorySlice";
import WishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../features/cart/cartSlice";
import searchItemReducer from "../features/search-items/searchItemsSlice";
import productReducer from "../features/product/productSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productReducer,
		category: categoryReducer,
		wishlist: WishlistReducer,
		cart: cartReducer,
		searchItem: searchItemReducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[categoriesApi.reducerPath]: categoriesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(productsApi.middleware)
			.concat(categoriesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
