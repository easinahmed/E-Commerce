import React from 'react';
import { facebook, instagram, twitter, linkedin } from "../constant/constant.ts"
import { Link } from 'react-router';
// Tailwind CSS classes are used directly within the className attribute

const Footer: React.FC = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-text pt-8 xs:pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[140px]">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">

        {/* --- Main Grid Layout for 5 Columns --- */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 pb-6 xs:pb-7 sm:pb-8 md:pb-10 lg:pb-12">

          {/* 1. Exclusive (Subscribe Column) */}

          <div>
            <div className='w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 overflow-hidden mb-2 xs:mb-2.5 sm:mb-3 md:mb-4'>
              <img className='w-full h-full object-contain' src="logo.avif" alt="logo" />
            </div>
            <h4 className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl font-poppins font-medium mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">Subscribe</h4>
            <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-2 xs:mb-2.5 sm:mb-3 md:mb-4">Get 10% off your first order</p>

            {/* Input with Icon */}
            <div className="relative border border-white rounded-sm w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[220px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-[10px] xs:text-xs sm:text-xs md:text-sm py-1.5 xs:py-2 sm:py-2 pl-2 xs:pl-2.5 sm:pl-3 pr-6 xs:pr-7 sm:pr-8 focus:outline-none w-full placeholder-gray-400"
              />
              <button className="absolute right-0 top-0 h-full px-1 xs:px-1.5 sm:px-2">
                {/* SVG for Send/Arrow Icon */}
                <img src="send.svg" alt="icon" className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          {/* 2. Support Column */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Support</h3>
            <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 leading-relaxed">
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm mb-1.5 xs:mb-2 sm:mb-3 md:mb-4">exclusive@gmail.com</p>
            <p className="text-[11px] xs:text-xs sm:text-xs md:text-sm">+88015-88888-9999</p>
          </div>

          {/* 3. Account Column */}
          <div>
            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Account</h3>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="/account" className="hover:underline hover:text-white transition">My Account</Link></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="/signup" className="hover:underline hover:text-white transition">Login / Register</Link></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="/cart" className="hover:underline hover:text-white transition">Cart</Link></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="/wishlist" className="hover:underline hover:text-white transition">Wishlist</Link></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="/shop" className="hover:underline hover:text-white transition">Shop</Link></li>
            </ul>
          </div>

          {/* 4. Quick Link Column */}
          <div className="hidden md:block">
            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">Quick Link</h3>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><a href="#" className="hover:underline hover:text-white transition">Privacy Policy</a></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><a href="#" className="hover:underline hover:text-white transition">Terms Of Use</a></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><a href="#" className="hover:underline hover:text-white transition">FAQ</a></li>
              <li className="text-[11px] xs:text-xs sm:text-xs md:text-sm"><Link to="contact" className="hover:underline hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* 5. Download App Column */}
          <div>
            {/* <h3 className="text-base sm:text-lg md:text-2xl font-inter font-bold mb-4 sm:mb-5 md:mb-6">Download App</h3>
            <p className="text-[10px] sm:text-xs mb-2 sm:mb-3 md:mb-2 text-gray-400">Save $3 with App New User Only</p> */}

            {/* QR Code and App Links */}
            {/* <div className="flex gap-1 sm:gap-2 md:gap-2 mb-4">
              <div className="shrink-0">
                <img src="Qr.svg" alt="qr code" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div> 
              <div className="flex flex-col gap-1 sm:gap-2">
                <a href="#" > <img src="playstore.svg" alt="playstore" className="h-8 sm:h-10" /></a>
                <a href="#" > <img src="appstore.svg" alt="appstore" className="h-8 sm:h-10" /></a>
              </div>
            </div> */}

            {/* Social Icons */}
            <div className="flex gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 mt-2 xs:mt-2.5 sm:mt-3 md:mt-4">
              <a href="#" className="hover:opacity-75 transition"> <img src={facebook} alt="facebook" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" /></a>
              <a href="#" className="hover:opacity-75 transition"> <img src={instagram} alt="instagram" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" /></a>
              <a href="#" className="hover:opacity-75 transition"> <img src={twitter} alt="twitter" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" /></a>
              <a href="#" className="hover:opacity-75 transition"> <img src={linkedin} alt="linkedin" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" /></a>

            </div>
          </div>
        </div>

      </div>

      {/* --- Copyright Section --- */}
      <div className="text-center pt-2 xs:pt-2.5 sm:pt-3 md:pt-4 text-gray-500 border-t border-gray-700 text-[10px] xs:text-xs sm:text-xs md:text-sm px-2 xs:px-3 sm:px-4">
        <p>&copy; Copyright Rimel {year}. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;