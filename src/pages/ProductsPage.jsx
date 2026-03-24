import React from 'react';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      category: 'Gấu bông',
      title: 'Gấu Teddy Heritage Cổ Điển',
      moq: '300 con',
      badge: 'Bán chạy nhất',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYy5jaVuwg4HpQz4WpxUr3Eil29bJ6Wy_4C7j1WEp-p35-FCBTBjhEPxxybr4gjNAjVNkXp5qnzTB_3YXatc34xxHEjwAhkzL7hCA7xcd2i-r1Z_FufA9YIqSS3YzpOWyRlKnsArxxhZUsQr97a8F0Z8_cBpB_3u1wm4JrZcYUg2rC_bCT0w29qq5C08T0IvS9C7BOwA-OjkwgqIegsLyjYvhKAkImRcaWN4taVw0TVB62iAcTRDHXL3JruHaJ8-Oa17x0OHnGajs'
    },
    {
      id: 2,
      category: 'Mascot',
      title: 'Mascot Thể Thao Tùy Chỉnh',
      moq: '300 con',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2en2qgm1lelhhnmzNVJ5XlkI4tnkegYYX3UW0r1Lb6_3FqwHKH_ZRxp2lhUUtTRtnJ0ooPuC5dqFfop8lohU0ny-Hq4emmdyacF8bqdxiTBn2wKlIVoT07hXjBzX0XUiiLxcphRZb4mz5caADifr2uKEeu76Kt_0VJDy89p9m0U4teBqZ1hg4uBkprfAXO577Fy8ECdodjcA7NHncmVXT_ZdjjaKkk26V4b0xcRxeTnilC0_Iz6zKeAuCvBrunCl41qFZR8cJwvU'
    },
    {
      id: 3,
      category: 'Quà tặng doanh nghiệp',
      title: 'Gấu Bông Thương Hiệu Eco',
      moq: '300 con',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwzxJbXAPwAlu8cYNZirx8wDCP6kGCZFMlPlelvbkO3Uv5Qbwf7TzAbeUXcmONhSvd_eLTEWrUMATeELiSLK20KhOtVgf7JPXjlJyq2AbHTbM3Hj7HORPosR99leo-k4dK0yOuzbgaw_nefmz3thaF0YobDyOk6i5314mn2wNcnFCSN2V9m8UYrR9GxupHNiNUdRXLbO7n1O5l1jwZotsuUWLNiyyTntAerMAiICqKCS_HxjBQipfKJnysPEjp__ZgiXrOtkrTSHw'
    },
    {
      id: 4,
      category: 'Gối ôm',
      title: 'Gối Lười Cloud-Soft Sloth',
      moq: '300 con',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCPWF3cLdh0eEsnWvdLzGD5yWaKH5VPvC9EP97FwzMvH2nKsJ29ia-zEO_lz3TAJaEBhjHJ91-7-142GeFX6x53XcugNRxK2PVFkpO79Z4agw0cC5a80LDGspHgV9vGdp9SJyKKps-JPKDqiokMDPCLyU10a2-JFDyiOSx9_pk6qZ3XCX6OqOAQvTKOy4w-UQ6J-ahKI0xWCFy4YDa3D5wpRu6Bny8cp_Nts8oJFJGhIpE5kUsndPqj4H5Qvr1f3J7Xvm_uY2vMYQ'
    },
    {
      id: 5,
      category: 'Gấu bông',
      title: 'Tuần Lộc Phiên Bản Mùa Đông',
      moq: '300 con',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUzeawi_4OIChNe3WzgE_C8KrKjq4UZaf4Or6dii3mmgkW446c8WB1Fe07_5kwJ2eDomqagOMI-9D8C17fK3WsLz23_yPJO55FwcSSnRgxMYJtXlOY8C0YvuilGNaaKSWZu1miBlyzA9LyOETQv_Y2uYIabPKSxXWbj_Bgb0Uze4WaXB3gUh7QTqoJnFIqrgQCChaFNSWzGyAbVLPnEXCx1NTflj4kCFpylO81x95pKnBe2UQzPDRcsTGtt718myV5vJA5femxBug'
    },
    {
      id: 6,
      category: 'Gấu bông',
      title: 'Cún Goldie Cao Cấp',
      moq: '300 con',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBh9i7LY8khUnl4lPYlxAGAIXFrCihmVe9LqFkYRC009me6S2Musor3B44TMQdbvpmrPw-WvYyZfRWqKVRgZ4AoPUBqMJ5s5-0lV17cen0tkS0wPgFc_ztltVENkbccH2oOgsRXhWBUrm_kgnKksb0NgDotSR7nTBu3EMZtUsLeUBor_-Q1RtlcpE33NC_V4Q_iHZUXJK4A-KkWYBaNmVb7dWxEeS8KUTPEfSl8r2UnFkB-voRpMh2k6U174ZLXGxbfOmbWW7AIW4'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 py-16">
      {/* Header Section */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-primary tracking-tight mb-4 leading-tight">Bộ Sưu Tập Của Chúng Tôi</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed opacity-90">
          Khám phá năng lực sản xuất cao cấp của chúng tôi. Lưu ý rằng chúng tôi hoạt động chuyên biệt là nhà sản xuất B2B. Tất cả các mặt hàng được liệt kê chỉ dành cho bán buôn thương mại số lượng lớn và hợp đồng sản xuất theo yêu cầu.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filter Sidebar */}
        <aside className="w-full lg:w-64 space-y-10">
          <div>
            <h3 className="font-headline font-bold text-lg mb-6 text-primary">Danh mục</h3>
            <ul className="space-y-4 font-body">
              {['Gấu bông', 'Mascot', 'Quà tặng doanh nghiệp', 'Gối ôm'].map((cat, idx) => (
                <li key={cat}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input defaultChecked={idx === 0} className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-on-surface group-hover:text-secondary transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg mb-6 text-primary">Chất liệu</h3>
            <ul className="space-y-4 font-body">
              {['Vật liệu tái chế thân thiện môi trường', 'Nhung cao cấp', 'Bông Cotton kháng khuẩn'].map((mat) => (
                <li key={mat}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input className="w-5 h-5 border-outline-variant text-secondary focus:ring-secondary" name="mat" type="radio" />
                    <span className="text-on-surface group-hover:text-secondary transition-colors">{mat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg mb-6 text-primary">Kích thước</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-label uppercase tracking-widest text-outline">
                <span>10cm</span>
                <span>200cm</span>
              </div>
              <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary" type="range" />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-surface-container-lowest overflow-hidden transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <img alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={product.image} />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="pt-6">
                  <p className="text-[10px] font-label uppercase tracking-widest text-secondary mb-2">{product.category}</p>
                  <h4 className="text-xl font-bold text-primary mb-2">{product.title}</h4>
                  <p className="text-sm text-outline mb-4">MOQ: {product.moq}</p>
                  <button className="w-full py-3 border border-outline-variant rounded-full text-primary font-headline font-bold text-sm transition-all hover:bg-primary hover:text-on-primary hover:border-primary">Nhận báo giá</button>
                </div>
              </div>
            ))}
          </div>

          {/* Bulk Order / OEM Section */}
          <div className="mt-20 relative bg-surface-container-low p-12 rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.4,87.1,-15.7,85.5,-0.9C83.9,13.9,77.3,27.7,68.9,39.8C60.5,51.8,50.3,62.1,38,69.5C25.7,76.9,12.8,81.4,-0.4,82.1C-13.6,82.7,-27.2,79.5,-39.8,72.4C-52.4,65.2,-64,54.1,-71.4,40.8C-78.7,27.5,-81.8,12,-80.6,-3.2C-79.4,-18.4,-73.9,-33.4,-64.3,-45.1C-54.7,-56.8,-41,-65.2,-27.1,-72.1C-13.2,-79,0.9,-84.4,14.8,-83.1C28.7,-81.8,42.5,-73.9,44.7,-76.4Z" fill="#50290b" transform="translate(100 100)"></path>
              </svg>
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-primary mb-6">Thiết Kế Theo Yêu Cầu (OEM/ODM) - Thế Mạnh Của Chúng Tôi</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Bạn đang tìm kiếm một mascot thương hiệu độc đáo hay một dòng sản phẩm độc quyền? Các nghệ nhân bậc thầy của chúng tôi sẽ hiện thực hóa các bản phác thảo 2D của bạn thành sản phẩm 3D với 30 năm kinh nghiệm sản xuất tinh xảo.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Phát triển mẫu thử trong vòng 7-10 ngày', 'Tuân thủ các tiêu chuẩn an toàn toàn cầu (CE, ASTM)', 'Quản lý chuỗi cung ứng từ đầu đến cuối'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-primary font-medium">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface p-8 rounded-2xl border-2 border-dashed border-outline-variant hover:border-secondary transition-colors cursor-pointer text-center flex flex-col items-center justify-center space-y-4">
                <span className="material-symbols-outlined text-5xl text-outline-variant">cloud_upload</span>
                <div className="space-y-1">
                  <p className="font-headline font-bold text-primary">Tải lên thiết kế của bạn để nhận báo giá</p>
                  <p className="text-sm text-outline">Chấp nhận file PDF, AI, JPG (Tối đa 20MB)</p>
                </div>
                <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-headline font-bold text-sm shadow-xl shadow-secondary/20 hover:scale-105 transition-transform">Bắt Đầu Ngay</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductsPage;
