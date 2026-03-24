import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      category: 'Mascot',
      title: 'Sáng kiến Aero-Bear',
      desc: 'Thách thức: Tạo ra một linh vật cân bằng trọng lượng cho một hãng hàng không quốc tế bằng vật liệu chống cháy.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpx3_hy-2KriC4V2urrp68QM-rclXKp2Yr7xFXd8Aldp89aaqhzg_WuW8VgKYgSL2sHKSw-m_YupYKvjXWhr0ZUQH45CThsP6rlRe-Qod3ewTpFW8rDPhqd4g0VYi7mxuxt4zTl0W4A8vus-WzibjnGYuDUdm6Q5RqyJSA2gslb1A5qlmugpoyOs9RN4qWCVonN5eeMzh0P-ACb5sUChHznGEIF8Dk8K9twFvtMvXYSPIpQ6dXnT0FQGZXtGaEohBa_hB5H2f3V9U',
      wide: false,
    },
    {
      id: 2,
      category: 'Bộ sưu tập lẻ',
      title: 'Dòng sản phẩm Organic Earth',
      desc: 'Thách thức: Mở rộng quy mô kết cấu đan tay nghệ thuật vào dây chuyền sản xuất công nghiệp 50.000 đơn vị cho thị trường Châu Âu.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT8N2IselPvvzXMqBNPu80wm-OPCcOj6a-e4GHqtcUPEM496PY5_Lr4VNK6Tzpz_T-dYZnQ0_5Brd7PbEkPXIxX0r58P3twdE-fkDuNNrhsKJEB-58gm5325z28cd-rkHceaISyWUiMa1andHqiEITUPWUXev7NhI3Z0UxavtHCCD32tsBAgQ5ToxNhAdBWyj1Rsispe3PopO_5QP3iSsS1yqAnkf29_F5Z9EpMoZvpRTcKbzrmjJ4Qqzeic96SV2Tb0mXwIe44uQ',
      wide: false,
      offset: 'lg:mt-12'
    },
    {
      id: 3,
      category: 'Quà tặng doanh nghiệp',
      title: 'Gấu bông kỷ niệm Di sản',
      desc: 'Thách thức: Nhúng các mô-đun âm thanh hỗ trợ NFC vào bên trong gấu phong cách di sản cho lễ kỷ niệm 100 năm của một ngân hàng lớn.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOeks3reBaPosv3Untseas-ifC5wPRZhf0up4Cwb38ynd4BY20ZPGLKsDKp_SVfGZJ6G6BCG9erAedWP5WVIt0_D0zYOquTEgoQ-THJcSbgKqpqUcFxl5-DGQCY5iPYJhd821_DiT9Vmu2CKGd093BsJ5_vuaZEiYIs6frEHLm4P1Rx7wG81f2CXK4ixoi2m0G6-9V7XR4jY2rqxLNzR4v8KLnGWz2OyoKKKY9f8JMnrJRUe11D8_Iz4Xoo2oiBjx43BgKho88Cjc',
      wide: false,
    },
    {
      id: 4,
      category: 'Bộ sưu tập lẻ',
      title: 'Hợp tác Thiết kế: Velvet Noir',
      desc: 'Thách thức: Làm việc với nhung cao cấp và thêu kim loại phức tạp mà không ảnh hưởng đến các tiêu chuẩn an toàn.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXj31onwPZxiwcJUdnnOnrtiW3aeHIIGat7PyX0mnoUpyStxNPGUGjW9JrafZo9jl55KIFB_QpF5BcQE7xF7Z43bLf2JEtymogDYmo149J5yoS7TFsI-Tz_tmJt0zswIrTy2Rb60ugWMQHoTzXDz5tW19UX1RDTW6P3QGGFEVOCimEpRzn9PvKnx7tKGXCMTLyXWjUpQAEOgIzGTnKKqTc7357deBHW_-Fu4rb-A8TwR_3Uyn-NR9xcLJuwFJoBuRjaq5uSVoT430',
      wide: false,
      offset: 'md:-mt-8'
    },
    {
      id: 5,
      category: 'Mascot',
      title: "Global Games 'Lion Heart'",
      desc: 'Thách thức: Đạt được độ chính xác về màu sắc để thống nhất thương hiệu quốc tế trên 1 triệu đơn vị được sản xuất trong 6 tháng.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATT1mxnKjWbDu0LUBKMpfq974LWRk5CtGVzA3EHRvpTzWEUmRJchvR8lXRB0uosypKj5VmYW0cY5TqENwgn-96IO1P0rntI_SkF8NeqgRFc5o5PxIJNPvhXzQhn_txnKtDzU5AbGMmS2Rg2m2T9QpdfFdiG4Pvq2lQAtDRzFnPZMjpxtt6MJklHHt-MD5id46BIT_deelUvPVrKNFQ2MSVbzeAJjY3auhhj2s5o56HRsYGvIkHVHt7ea516CGy19H-ZkytMYE8UPg',
      wide: false,
    },
    {
      id: 6,
      category: 'Quà tặng doanh nghiệp',
      title: 'Bộ sưu tập Eco-Guardian',
      desc: 'Thách thức: Phát triển chuỗi cung ứng được chứng nhận GRS cho 100% linh kiện vải và bông nhồi tái chế.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCvpo22P1XMRz4sBL1PJmeS2BjTTIEmg0byM1E5_y05dwhvFa82lohNftikxpYSku8JFdt64VMnMRRWjYOtcfZqrCd8kh_szRhPyj8VXnzkLEX8YcaGhUHVxRC3pq1KBhICDFx66iwL0blTkKC1dBG9Py7NN1OF5duLTnFBj5Nfqju7A-q6c4F_AOR1dp1t0ATcVoQX-o11-ugrI5SronB2YvGqxDSGzB_ylgTQKLF39q9Qrdjkv-kuQ-COmkq3loxRL0gZbXXiQI',
      wide: false,
      offset: 'lg:mt-8'
    }
  ];

  return (
    <main className="pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="font-label text-secondary uppercase tracking-widest text-xs font-bold mb-4 block">30 Năm Kinh Nghiệm Sản Xuất Thủ Công</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary leading-tight mb-6">
              Dự án tiêu biểu
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Nơi trưng bày những thành tựu xuất sắc trong sản xuất công nghiệp. Từ những linh vật thương hiệu toàn cầu đến các bộ sưu tập bán lẻ giới hạn, hãy khám phá hành trình biến ý tưởng thành hiện thực của chúng tôi.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden editorial-shadow transform rotate-3 bg-surface-container-low">
              <img
                alt="Cận cảnh gấu bông nghệ thuật"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPYAyfG8o8wykd-XzOnfpeLnXuPRcaP8sxyWhJd_9oo6ypFaiP-72EdvJqRXdfCtyZ2kXp9RKruUbw4M179gNsOuepEqlf56FKahVtWapRvaQv2s7Ws4aHbb_b4tydzediLjgIVHfspWOpTtABhq-Q82z4AWQRkqbwmEcbKkqOHGplgsx3Du-epvx0Fhwbeygp_y64G40rrYyIOXWnaLFew6huU_FosW9lsofPLUoKt1yCGqP0Rayuz5DKjokhxy8yJ9ELkyAIehY"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container/70 backdrop-blur-xl p-6 rounded-2xl editorial-shadow border border-outline-variant/20 max-w-[200px]">
              <p className="font-headline font-bold text-primary leading-tight">Chất lượng sản xuất thủ công công nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-semibold transition-all">Tất cả</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high font-semibold transition-all">Mascot</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high font-semibold transition-all">Bộ sưu tập lẻ</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high font-semibold transition-all">Quà tặng doanh nghiệp</button>
        </div>
      </section>

      {/* Portfolio Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className={`group flex flex-col space-y-4 ${project.offset || ''}`}>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low">
                <img alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={project.image} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">{project.category}</div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{project.desc}</p>
                <button className="group/btn inline-flex items-center gap-2 text-secondary font-bold hover:underline underline-offset-4 decoration-2">
                  Báo giá tương tự
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-extrabold text-primary mb-4">Đối tác toàn cầu</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center p-8 bg-surface-container-lowest rounded-xl grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="h-12 w-32 bg-outline-variant/30 rounded flex items-center justify-center italic font-bold text-on-surface-variant/40">ĐỐI TÁC 0{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8 -mt-16 relative z-10">
        <div className="bg-primary-container p-12 md:p-16 rounded-3xl text-center editorial-shadow overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none"></div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-primary leading-tight mb-6">Bắt đầu hành trình sản xuất nghệ thuật của bạn</h2>
          <p className="text-on-primary-container mb-10 max-w-2xl mx-auto text-lg">Cho dù đó là một loạt thiết kế số lượng ít hay triển khai thương hiệu triệu đơn vị, cơ sở của chúng tôi đều được trang bị để đạt được sự xuất sắc.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-secondary text-on-secondary font-headline font-bold rounded-full text-lg shadow-lg hover:shadow-secondary/20 transition-all transform hover:-translate-y-1">Nhận báo giá</button>
            <button className="px-10 py-4 bg-surface-container-lowest text-primary font-headline font-bold rounded-full text-lg hover:bg-surface-bright transition-all">Tải hồ sơ năng lực</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
