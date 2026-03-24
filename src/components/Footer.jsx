import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8 font-body text-sm leading-relaxed mt-20 rounded-t-[2rem]">
      <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-primary">
        <div className="space-y-6 opacity-90 hover:opacity-100 transition-opacity">
          <Link to="/" className="text-lg font-bold mb-4 block">
            <img
              alt="Hoa Thái Logo"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ugdYHYqZeIoJ0lmdXFz2jE4sdb6_1oQf5ax8GIWGmgKrDExlUBuobUam3vjIDJzLIHlHAmRera6UYcR5PXTnX660WJ4K7BBlPPvoRFh0NK4h9nyDPqcAhDHMaeI341Ugca6fYKAJpLBwUtzw1yGokJs0QB1Xc1cgWEoD9D3_Ol0DY0ig1pfp9ymi0NMofc7j7bQTBLqB0aMoj2MIbSicCnjkXgoJFhJYIDUlT9AWXUcZUHkQz8ecPepoHpz3Yb4I4111xebB9oscA"
            />
          </Link>
          <p className="opacity-80">
            Đối tác sản xuất hàng đầu Việt Nam cho các sản phẩm gấu bông chất lượng cao. Kết hợp ba thập kỷ kỹ năng thủ công với năng lực công nghiệp hiện đại.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">mail</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">call</span>
          </div>
        </div>
        <div className="space-y-6 opacity-90 hover:opacity-100 transition-opacity">
          <h4 className="font-headline font-bold uppercase tracking-widest text-xs">Liên kết nhanh</h4>
          <ul className="space-y-3">
            <li><Link className="opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-1 transition-transform inline-block" to="/">Công ty</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-1 transition-transform inline-block" to="/products">Sản phẩm</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-1 transition-transform inline-block" to="/process">Quy trình sản xuất</Link></li>
            <li><Link className="opacity-80 hover:opacity-100 hover:text-secondary hover:translate-x-1 transition-transform inline-block" to="/projects">Dự án tiêu biểu</Link></li>
          </ul>
        </div>
        <div className="space-y-6 opacity-90 hover:opacity-100 transition-opacity">
          <h4 className="font-headline font-bold uppercase tracking-widest text-xs">Trụ sở chính</h4>
          <div className="opacity-80 space-y-3">
            <p>Khu công nghiệp xã Tam Hiệp, Huyện Phúc Thọ</p>
            <p>Hà Nội, Việt Nam</p>
            <p><a className="text-secondary font-medium hover:underline" href="#">Hỗ trợ Zalo</a></p>
          </div>
          <div className="mt-6 flex gap-4 text-xs">
            <a className="opacity-60 hover:opacity-100 transition-opacity hover:underline" href="#">Chính sách bảo mật</a>
            <a className="opacity-60 hover:opacity-100 transition-opacity hover:underline" href="#">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="opacity-60 text-xs">© 2024 Hoa Thái Artisanal Manufacturing. All rights reserved.</p>
        <div className="flex gap-8 opacity-60 text-xs">
          <span>Sản xuất tại Việt Nam</span>
          <span>Chứng nhận ISO 9001</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
