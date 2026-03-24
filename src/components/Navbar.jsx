import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-surface sticky top-0 z-50 w-full font-headline font-semibold text-sm tracking-wide shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center w-full">
        <div className="text-2xl font-bold text-primary tracking-tighter">
          <Link to="/" className="active:scale-95 duration-150 block">
            <img
              alt="Hoa Thái"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugdYHYqZeIoJ0lmdXFz2jE4sdb6_1oQf5ax8GIWGmgKrDExlUBuobUam3vjIDJzLIHlHAmRera6UYcR5PXTnX660WJ4K7BBlPPvoRFh0NK4h9nyDPqcAhDHMaeI341Ugca6fYKAJpLBwUtzw1yGokJs0QB1Xc1cgWEoD9D3_Ol0DY0ig1pfp9ymi0NMofc7j7bQTBLqB0aMoj2MIbSicCnjkXgoJFhJYIDUlT9AWXUcZUHkQz8ecPepoHpz3Yb4I4111xebB9oscA"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary hover:text-secondary transition-colors duration-300">Giới thiệu</Link>
          <Link to="/products" className="text-primary hover:text-secondary transition-colors duration-300">Sản phẩm</Link>
          <Link to="/process" className="text-primary hover:text-secondary transition-colors duration-300">Quy trình</Link>
          <Link to="/projects" className="text-primary hover:text-secondary transition-colors duration-300">Dự án</Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a className="hidden lg:block text-primary hover:opacity-80 transition-all duration-300" href="tel:+84123456789">+84 123 456 789</a>
          <Link to="/rfq">
            <button className="bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-80 active:scale-95 transition-all duration-150 scale-95">
              Yêu cầu báo giá
            </button>
          </Link>
          <span className="hidden md:block material-symbols-outlined text-primary cursor-pointer hover:text-secondary transition-all duration-300">chat</span>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-primary focus:outline-none">
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-surface-container-low px-8 py-6 space-y-4 shadow-lg absolute w-full left-0 top-full">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-primary hover:text-secondary transition-colors font-bold text-lg">Giới thiệu</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block text-primary hover:text-secondary transition-colors font-bold text-lg">Sản phẩm</Link>
          <Link to="/process" onClick={() => setIsOpen(false)} className="block text-primary hover:text-secondary transition-colors font-bold text-lg">Quy trình</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-primary hover:text-secondary transition-colors font-bold text-lg">Dự án</Link>
          <div className="pt-4 border-t border-surface-container-low flex items-center justify-between">
            <a className="text-primary font-bold" href="tel:+84123456789">+84 123 456 789</a>
            <span className="material-symbols-outlined text-primary">chat</span>
          </div>
        </div>
      )}

      <div className="bg-surface-container-low h-px w-full absolute bottom-0"></div>
    </nav>
  );
};

export default Navbar;
