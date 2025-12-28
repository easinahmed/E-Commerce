import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "./features/user/userSlice";
import type { RootState } from "./store/store";
import Loading from "./components/Loading";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/easin/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import LoginPages from "./pages/Login";
import ErrorPages from "./pages/Error";
import ProductDetails from "./pages/easin/ProductDetails";
import CheckOut from "./pages/easin/CheckOut";
import Wishlist from "./pages/easin/Wishlist";
import SearchPage from "./pages/SearchPage";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "contact", Component: Contact },
			{ path: "account", Component: Account },
			{ path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
			{ path: "shop", Component: Shop },
			{ path: "signup", Component: Signup },
			{ path: "login", Component: LoginPages },
			{ path: "product/details/:id", Component: ProductDetails },
			{ path: "checkout", Component: CheckOut },
			{ path: "wishlist", element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
			{ path: "*", Component: ErrorPages },
			{ path: "product/search", Component: SearchPage },
		],
	},
]);

const App: React.FC = () => {
	/* import useSelector from react-redux moved to top */
	/* import Loading from components moved to top */
	/* import RootState type moved to top */

	const dispatch = useDispatch();
	const { isLoading } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL
				}));
			} else {
				dispatch(setLoading(false));
			}
		});

		return () => unsubscribe();
	}, [dispatch]);

	if (isLoading) {
		return <Loading />;
	}

	return <RouterProvider router={router} />;
};

export default App;
