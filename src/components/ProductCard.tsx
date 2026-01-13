import { Heart, Eye } from 'lucide-react';
import type { Product, ProductCart } from '../types';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeWishlist } from '../features/wishlist/wishlistSlice';
import type { RootState } from '../store/store';
import { addTocart, removecart } from '../features/cart/cartSlice';
import { Bounce, toast } from 'react-toastify';
// import { useAddToCartApiMutation } from '../api/cartApi';


interface ProductCardProps {
  product: Product;
}




export default function ProductCard({ product }: ProductCardProps) {
  const { wishList } = useSelector((state: RootState) => state.wishlist);
  const { cart } = useSelector((state: RootState) => state.cart);
  const isExist = wishList.find(item => item.id === product.id);
  const isExistCart = cart?.find(item => item.id === product.id);



  //  const [addToCartApi] = useAddToCartApiMutation()

  const user = {
    id: 1,
    name: "John Doe",
    password: "password123",
    email: "admin@example.com"
  };
  const navigate = useNavigate();
  const notify = () => toast.success('❤ Successfuly added to wishlist', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const handleAddToWishlist = (product: ProductCart) => {
    if (!user) {
      alert("Please login to add items to wishlist");
      navigate('/login');
      return;
    } else {
      if (isExistCart) {
        notify()
        dispatch(removecart(product.id));
        dispatch(addToWishList({ ...product, quantity: 1, subtotal: product.price } as ProductCart));
      } else {
        notify()
        dispatch(addToWishList({ ...product, quantity: 1, subtotal: product.price } as ProductCart));
      }
    }
  }

  const notifyCard = () =>
      toast.success("❤ Successfuly added to cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

  const handleCartAdd = (product: ProductCart) => {
    if (!user) {
      alert("Please login to add items to wishlist");
      navigate('/login');
      return;
    } else {
      if (!isExistCart) {
        notifyCard()
        dispatch(addTocart({ ...product, quantity: 1, subtotal: product.price }));
        dispatch(removeWishlist(product.id));
      } else {
        notifyCard()
        dispatch(removecart(product.id));
      }
    }
  }


  const navigation = useNavigate();
  const dispatch = useDispatch();



  return (
    <div className='w-full font-poppins'>
      <div className='group relative bg-secondary dark:bg-slate-400 cursor-pointer rounded-sm aspect-square mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 overflow-hidden flex items-center justify-center py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10'>
        {/* Image */}
        {/* Wishlist and view icon */}
        <div className="absolute top-1.5 xs:top-2 sm:top-3 right-1.5 xs:right-2 sm:right-3 flex flex-col gap-1 xs:gap-1.5 sm:gap-2">
          <button onClick={() => handleAddToWishlist({ ...product, quantity: 1, subtotal: 1 })} className={`${isExist ? "bg-red-100" : "bg-white"} p-1 xs:p-1.5 sm:p-2 rounded-full shadow hover:bg-gray-100 flex justify-center items-center transition`}>

            {!isExist ? <Heart className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-600" /> :
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path className='fill-red-600' d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
            }
          </button>
          <button onClick={() => navigation(`/product/details/${product.id}`)} className="bg-white p-1 xs:p-1.5 sm:p-2 flex justify-center items-center rounded-full shadow hover:bg-gray-100 transition">
            <Eye className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>

        {/* Discount */}
        <span className="absolute top-1.5 xs:top-2 sm:top-3 left-1.5 xs:left-2 sm:left-3 bg-button2 text-white text-[9px] xs:text-[10px] sm:text-xs font-poppins font-semibold px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm">
          -{product.discountPercentage}%
        </span>

        <div onClick={() => navigation(`/product/details/${product.id}`)}>
          <img className='h-full w-full object-contain' src={product.thumbnail} alt="image" />
        </div>


        <button disabled={isExistCart ? true : false} onClick={() => handleCartAdd({ ...product, quantity: 1, subtotal: 1 })} className={`disabled:cursor-not-allowed w-full text-center absolute bg-button p-1 xs:p-1.5 sm:p-2 md:p-2.5 text-white text-[11px] xs:text-xs sm:text-sm font-poppins transition-all duration-500 cursor-pointer rounded-b-sm opacity-0 group-hover:opacity-100 bottom-0 ${isExistCart ? "bg-green-500" : "bg-button"}`}>
          {isExistCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>


      {/* title */}
      <h2 onClick={() => navigation(`/product/details/${product.id}`)} className='cursor-pointer font-medium mb-1 xs:mb-1.5 sm:mb-2 line-clamp-1 text-[11px] xs:text-xs sm:text-sm md:text-base' title={product.title}>
        {product.title}
      </h2>

      {/* Price */}
      <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 mb-1 xs:mb-1.5 sm:mb-2">
        <span className="text-button2 font-medium text-[11px] xs:text-xs sm:text-sm md:text-base">${product.price}</span>
        <span className="text-gray-400 line-through text-[9px] xs:text-[10px] sm:text-xs">
          ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-1">
        <div className="flex text-xs xs:text-sm sm:text-lg">
          {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
            <span className='text-yellow-400' key={i}>★</span>
          ))}
          {Array.from({ length: 5 - Math.round(product.rating) }).map((_, i) => (
            <span className='text-gray-400' key={i}>★</span>
          ))}
        </div>
        <span className="text-gray-600 text-[9px] xs:text-[10px] sm:text-xs ml-0.5">{product.rating}</span>
      </div>
    </div>

  );
}