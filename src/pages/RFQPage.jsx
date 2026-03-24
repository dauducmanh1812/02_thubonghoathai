import React from 'react';

const RFQPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
      {/* Hero Title Section */}
      <header className="mb-16 snap-start">
        <span className="text-secondary font-label font-bold uppercase tracking-widest text-xs mb-4 block">Sản xuất B2B</span>
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-primary leading-tight max-w-3xl">
          Thổi hồn vào linh vật của bạn với <span className="text-secondary">độ chính xác nghệ thuật.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: RFQ Form */}
        <section className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_12px_40px_rgba(44,26,14,0.06)] snap-start">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Họ tên</label>
                <input className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4" placeholder="Nguyễn Văn A" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Công ty</label>
                <input className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4" placeholder="Công ty đồ chơi toàn cầu" type="text" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Số điện thoại</label>
                <input className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4" placeholder="+84 000 000 000" type="tel" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Email</label>
                <input className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4" placeholder="contact@company.com" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Loại sản phẩm</label>
                <select className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4 appearance-none">
                  <option>Thú bông Linh vật</option>
                  <option>Gối thương hiệu</option>
                  <option>Móc khóa mini</option>
                  <option>Thiết kế riêng</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Số lượng</label>
                <input className="w-full bg-surface-container-highest border-b border-outline-variant/20 border-t-0 border-l-0 border-r-0 focus:ring-0 focus:border-secondary transition-all py-3 px-4" placeholder="Tối thiểu 500 chiếc" type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-label font-semibold text-primary uppercase tracking-wider">Tải lên bản thiết kế / Phác thảo</label>
              <div className="border-2 border-dashed border-outline-variant/40 rounded-xl p-12 text-center hover:border-secondary transition-colors cursor-pointer group bg-surface-container-low/30">
                <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform inline-block">cloud_upload</span>
                <p className="text-on-surface-variant font-body">Kéo và thả tệp vào đây, hoặc <span className="text-secondary font-semibold underline">duyệt tệp</span></p>
                <p className="text-xs text-outline mt-2">Hỗ trợ: JPG, PNG, PDF (Tối đa 20MB)</p>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-full font-headline font-bold text-lg hover:bg-primary-container transition-colors shadow-lg shadow-primary/20" type="submit">
              Gửi yêu cầu báo giá
            </button>
            <p className="text-center text-xs text-outline italic">Chuyên gia sản xuất của chúng tôi sẽ phản hồi với báo giá sơ bộ trong vòng 24-48 giờ.</p>
          </form>
        </section>

        {/* Right Side: Trust & Info */}
        <aside className="lg:col-span-5 space-y-12">
          <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
            <h3 className="text-2xl font-headline font-bold text-primary mb-8">Tại sao chọn Hoa Thái?</h3>
            <ul className="space-y-8">
              {[
                { icon: 'history', title: '30 năm kinh nghiệm', desc: 'Nghề thủ công tinh xảo từ năm 1994, đáp ứng các đơn hàng xuất khẩu quốc tế lớn.' },
                { icon: 'verified', title: 'Chứng nhận ISO', desc: 'Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn đồ chơi toàn cầu (EN71, ASTM).' },
                { icon: 'bolt', title: 'Tạo mẫu nhanh', desc: 'Nhận mẫu thử nghiệm thực tế chỉ sau 7-10 ngày kể từ khi duyệt thiết kế.' },
                { icon: 'public', title: 'Giao hàng quốc tế', desc: 'Hỗ trợ hậu cần thông suốt cho các đơn hàng tại Châu Á, Châu Âu và Bắc Mỹ.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-primary">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
            <img
              alt="Cơ sở sản xuất"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk5LDXBeRDiOPH0dbLUyorBitUjFRfHpJAGj8q8TYKqpdztwiVrwxd_qhz9nl_4DshvDciLJB9RVP4lUSkY2syRgBecpvF-KHR_z03WOAzONvXWgESiI0yDooFIRQvEeOj-FcHS2_z3vRsxfm8Aztet0YGTQNWUECyP5XE5E171v8JVD5wrVs7IX127XZyjKtoiw2P1Bt7HY5xU7A7v3d0d6IIHOqYL-DT6o1vmNe4HSfzM7QkFqkgG8hXDPqatZUhMNSx8Zj4vWw"
            />
            <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-6 backdrop-blur-[2px]">
              <p className="text-white font-headline font-bold text-xl">Chất lượng nghệ thuật ở quy mô lớn.</p>
              <p className="text-white/80 text-sm">Tham quan xưởng sản xuất của chúng tôi trực tuyến hoặc trực tiếp.</p>
            </div>
          </div>

          <div className="bg-surface-container-highest p-8 rounded-xl space-y-4">
            <h4 className="text-lg font-headline font-bold text-primary">Cần hỗ trợ ngay?</h4>
            <div className="flex flex-col gap-3">
              <a className="flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors" href="tel:+84123456789">
                <span className="material-symbols-outlined">phone</span>
                +84 123 456 789
              </a>
              <a className="flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors" href="#">
                <span className="material-symbols-outlined">chat_bubble</span>
                Kết nối qua Zalo
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default RFQPage;
