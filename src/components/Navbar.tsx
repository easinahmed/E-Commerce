import React, { useEffect, useRef, useState } from 'react';
import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Icon } from '@iconify/react';
import { DropdownMenuItem, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import ProductSearch from './sections/ProductSearch';
import { logout } from '../features/user/userSlice';
import { logoutUser } from '../firebase/auth';
import { useNavigate } from 'react-router';

export default function NavBar() {
  const navbar = useRef<HTMLElement>(null);
  const themeButton = useRef<HTMLLabelElement>(null);
  const { wishList } = useSelector((state: RootState) => state.wishlist);
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [position, setPosition] = React.useState("bottom")

  const [dark, setDark] = useState("light")

 

  const handleTheme = (mode: string) => {
    setDark(mode)
  }

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light")
    document.querySelector("html")?.classList.remove("dark")
    document.querySelector("html")?.classList.remove("device")
    document.querySelector("html")?.classList.add(dark)
  }, [dark])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
    { to: '/signup', label: 'Sign Up' },
  ];

  // scroll event listener for navbar shadow
  useEffect(() => {
    // const handleScroll = ;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        navbar.current?.classList.add('fixed_header');
        themeButton.current?.classList.add('fixed_theme_button');
      } else {
        navbar.current?.classList.remove('fixed_header');
        themeButton.current?.classList.remove('fixed_theme_button');
      }
    });
   
  }, []);

 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const handleLogout = async () => {
    await logoutUser();
    dispatch(logout());
    navigate('/');
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handlePopularSearch = (term: string) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const allNavLinks = navLinks.map((link) => {
    if (!user) {
      if (link.to === "/signup") {
        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `${isActive ? "active" : ""} buttons text-[16px] font-medium leading-6`}
          >
            {link.label}
          </NavLink>
        )
      } else if (link.to !== "/signup") {
        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `${isActive ? "active" : ""} buttons text-[16px] font-medium leading-6`}
          >
            {link.label}
          </NavLink>
        );
      }
    }

    if (user && link.to !== "/signup") {
      return (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${isActive ? "active" : ""} buttons text-[16px] font-medium leading-6`}
        >
          {link.label}
        </NavLink>
      );
    }
  });

  return (
    <>
      {/* Top Header Design  */}
      <div className="py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-black max-w-full text-text relative px-2 xs:px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-0">
          <div className="flex flex-col xs:flex-col sm:flex-row items-center justify-between gap-1.5 xs:gap-2 sm:gap-3 md:gap-4">
            <div className="w-12 xs:w-14 sm:w-16 md:w-20 hidden sm:block"></div>
            <p className="font-poppins text-center text-amber-50 text-[11px] xs:text-xs sm:text-sm md:text-base flex-1">Summer Sale Free Delivery - OFF 50%! <span><Link className="underline underline-offset-1 font-poppins text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold" to="/shop">Shop Now</Link></span></p>
            <select className="font-grotesk text-amber-50 text-[10px] xs:text-xs sm:text-sm bg-black border border-amber-50 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded">
              <option className=' bg-black text-amber-50 ' value="english">English</option>
              <option className=' bg-black text-amber-50 ' value="bengali">Bengali</option>
            </select>
          </div>
        </div>
      </div>

      <nav ref={navbar} className="bg-white container max-w-full dark:bg-black border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between w-full py-1.5 xs:py-3 sm:py-3 md:py-3">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center justify-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-0.5 xs:p-1 sm:p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 dark:text-amber-50" />
                ) : (
                  <Menu className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 dark:text-amber-50" />
                )}
              </button>
            </div>

            {/* Center: Logo mobile */}
            <div className="absolute lg:hidden left-1/2  transform -translate-x-20 ">
              <Link to="/" className="flex items-center">
                <div className="w-20 h-8 xs:w-24 xs:h-9 sm:w-[140px] sm:h-[50px] md:w-[180px] md:h-[70px] rounded-lg flex items-center justify-center">
                  <div className='w-12 h-12 overflow-hidden py-2'>
                    <img src="logo.avif" className='w-full h-full' alt="" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: Action Icons */}
            <div className="flex items-center justify-center gap-0.5 xs:gap-1 sm:gap-2 md:gap-3 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-0.5 xs:p-1 sm:p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle search"
              >
                {isSearchOpen ? (
                  <X className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 dark:text-amber-50" />
                ) : (
                  <Search className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 dark:text-amber-50" />
                )}
              </button>

              <Link to="/wishlist" className="p-0.5 xs:p-1 sm:p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-500 rounded-lg transition-colors relative">
                <Heart className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 stroke-red-600" />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] xs:text-[10px] sm:text-xs rounded-full h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {wishList.length}
                </span>
              </Link>

              <button
                className="p-0.5 xs:p-0.5 sm:p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
                aria-label="Shopping cart"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 dark:text-amber-50" />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[9px] xs:text-[10px] sm:text-xs rounded-full h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden pt-4 md:pt-4 lg:pt-4 xl:pt-4 pb-4 md:pb-4 lg:pb-5 xl:pb-6 lg:flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 justify-between">

            <div >
              <Link to={"/"} className=' text-lg md:text-xl lg:text-2xl font-bold leading-6 font-inter' >
                <div className='w-12 h-12 overflow-hidden'>
                  <img className='w-full h-full object-contain' src="/logo.avif" alt="logo" />
                </div>
              </Link>
            </div>

            <div className='lg:flex items-center gap-6 lg:gap-8 xl:gap-12 justify-center hidden' >
              {allNavLinks}
            </div>

            <div>
              <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
                <div className="hidden lg:block translate-y-[-5px] z-80" >
                  <ProductSearch />
                </div>

                <div className="flex items-center gap-1.5 lg:gap-3" >
                  <Link to={"/wishlist"} className='p-1.5 md:p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative'>
                    <Heart size={24} color="#000000" strokeWidth={2} absoluteStrokeWidth className='dark:stroke-white w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8' />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4.5 w-4.5 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 flex items-center justify-center text-[9px] md:text-[10px]">
                      {wishList.length}
                    </span>
                  </Link>

                  <Link to={"cart"}>
                    <button
                      className="p-1.5 md:p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
                      aria-label="Shopping cart"
                    >
                      <ShoppingCart size={24} color="#000000" strokeWidth={2} className='dark:stroke-white w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8' />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4.5 w-4.5 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 flex items-center justify-center text-[9px] md:text-[10px]">
                        {cart.length}
                      </span>
                    </button>
                  </Link>



                  {user && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className='focus:outline-0 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full data-[state=open]:bg-button2 data-[state=open]:text-white cursor-pointer'><Icon icon="lucide:user" width="24" height="24" /></DropdownMenuTrigger>
                      <DropdownMenuContent align='end' className='min-w-56 pt-4.5 pl-5 pb-2.5 pr-3 bg-[rgba(0,0,0,0.50)] backdrop-blur-[100px] text-white  border-none space-y-[13px]' >
                        <DropdownMenuLabel >
                          <Link className='flex items-center justify-start gap-4' to={"/account"}><Icon icon="lucide:user" width="30" height="30" />Manage My Account</Link>
                        </DropdownMenuLabel>

                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="mage:shopping-bag" width="30" height="30" />My Order</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="material-symbols-light:cancel-outline" width="30" height="30" />My Cancellation</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link className='flex items-center justify-start gap-4' to={"/#"}><Icon icon="stash:star" width="30" height="30" /> My Reviews</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <button className='flex items-center justify-start gap-4 w-full' onClick={handleLogout}><Icon icon="tabler:logout-2" width="30" height="30" /> Log Out</button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

       



        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="container mx-auto px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 md:py-4">
              <ul className="space-y-0.5 xs:space-y-1 sm:space-y-1.5">
                {/* Dynamic Mobile Links based on User State */}
                {navLinks.map((link) => {
                  if (user && link.to === '/signup') return null; // Hide Sign Up if logged in
                  if (!user && link.to === '/signup') {
                    return (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          className="block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 font-semibold text-xs xs:text-sm sm:text-base dark:bg-slate-600 dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    )
                  }
                  return (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className="block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 font-semibold text-xs xs:text-sm sm:text-base dark:bg-slate-600 dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  )
                })}

                {/* Additional Mobile Links for Authenticated Users */}
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/account"
                        className="block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 font-semibold text-xs xs:text-sm sm:text-base dark:bg-slate-600 dark:text-amber-50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Manage My Account
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 font-semibold text-xs xs:text-sm sm:text-base text-red-600 dark:bg-slate-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        Log Out
                      </button>
                    </li>
                  </>
                )}
                <div className="pt-1.5 xs:pt-2 sm:pt-2.5 md:pt-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className='w-full text-[11px] xs:text-xs sm:text-sm' variant="outline">Mood</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 sm:w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem onClick={() => handleTheme("device")} value="top"> Device </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem onClick={() => handleTheme("light")} value="bottom"> Light </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem onClick={() => handleTheme("dark")} value="right"> Dark </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </ul>
            </div>
          </div>
        )}

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div className="bg-white ml-2 lg:hidden dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="container mx-auto px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-5 md:py-6">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    className="w-full px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 md:py-4 pr-8 xs:pr-10 sm:pr-12 text-xs xs:text-sm sm:text-base md:text-lg border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-amber-50 dark:placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSearch(searchQuery)}
                    className="absolute right-1.5 xs:right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 p-0.5 xs:p-1 sm:p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">
                  <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 xs:mb-2">Popular Searches</p>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((term) => (
                      <button
                        key={term}
                        onClick={() => handlePopularSearch(term)}
                        className="px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-[10px] xs:text-xs sm:text-sm dark:text-amber-50 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}