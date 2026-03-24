import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface py-20">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-wider mb-6 uppercase">
              THÀNH LẬP TỪ 1994
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tight">
              Nhà Sản Xuất Gấu Bông B2B <span className="text-secondary">Hàng Đầu</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-body">
              Nâng tầm thương hiệu với giải pháp gấu bông OEM/ODM tinh xảo. Từ mascot doanh nghiệp đến bộ sưu tập bán lẻ, chúng tôi kết hợp 30 năm kinh nghiệm với quy trình sản xuất công nghiệp chuẩn xác.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rfq">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-container transition-all shadow-xl shadow-primary/10 w-full sm:w-auto">
                  Nhận Báo Giá Miễn Phí
                </button>
              </Link>
              <Link to="/products">
                <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/5 transition-all w-full sm:w-auto">
                  Xem Bộ Sưu Tập
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Luxury plush mascot"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP4cPFZCjkMJqTsF94kNMHWeO9HnaCKu2Y8hevjdELlf6TITxilD3BNZOFno38P4UzTeVuNEiNsLCqD1OBLQtj7ktY0fgpMSefejcOzAU_kGASxCgmOu1wHZURSwp9ZRstA6jjmRzTq01L_fiUugojvC1q_iSvSU8CAkcHpcnxPMyvtAEE5n4ddafFwKX8jdnVyg9EYtKiLMvZxm7sqoEm5_nRX6hmkTgqcqh03m4PqRjvMiK4dre1h7zv69H8nqlZtDYLR2IE6g4"
              />
            </div>
            <div className="absolute top-8 right-8 glass-card p-6 rounded-2xl shadow-lg border border-white/30 text-center flex flex-col items-center">
              <span className="text-4xl font-black text-secondary">30</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Năm</span>
              <span className="text-sm font-bold text-primary">Kinh Nghiệm Sản Xuất</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Heritage */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-variant">
                <img
                  alt="Manufacturing detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZwogtu7rTZnFVIrL8yEnjm-OomRtIG2_wcmaYzyKXnihai1CBNO7iao5_4_bceTMDVNM0eFqZK8zxYjlUYZm2Za8G3p1YGJjTqp71AvjAqYbgtb7ucKcZo2e5vKPXbqq2z-hRr_WURAsKmSG8YGvf8XLMnO9oF02w-cyEItGN4E468Vu5Lvyhjvk7dHsJrnLp37L2PLMQpUUV4x2LAqouWtCuiQE6k4tmwrwDvKg3il5hw6I7oAm77r4CAWvY8jL51rL0gRxgnk"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-video rounded-xl overflow-hidden border-8 border-surface-container-low shadow-xl">
                <img
                  alt="Fabric rolls"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm2IXZNoImAR-zibtUEQ_KOMPjqedE2tOjWtc0q4kjOHuzqEJ5WA_u1AgwVSrRHwfGmSmsXEj3jocg5VeVAkOSlbNjZxKfElqboIt3-jxRgGeRiAlDEoZJmMZJhbbjOmznk6otLJZaBaze4JmkHtUU9L9U8k1O84VubVw6ttxOTBfHXrxD7F2elHgnGbn3tcSUDndSAV0Qkl80FPMV6bbjgZ80ogArfw32zf3ZCTuU0wPu19qpNcRPYmukezOc-28uMJ159E9FO8Q"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-6 leading-tight">Di Sản Trong Từng Mũi Kim</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                <p>Được thành lập từ năm 1994, Hoa Thái đã phát triển từ một xưởng thủ công nhỏ thành trung tâm sản xuất B2B hàng đầu. Hành trình của chúng tôi được định nghĩa bởi cam kết về nghệ thuật thủ công, chuyên sâu trong việc tạo ra các mascot nhồi bông đại diện cho linh hồn của các thương hiệu toàn cầu.</p>
                <p>Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn an toàn quốc tế, đảm bảo mỗi sản phẩm đều an toàn và thẩm mỹ. Bảng màu tông đất phản ánh triết lý của chúng tôi: ưu tiên chất lượng, độ bền và tính chuyên nghiệp hơn là những xu hướng nhất thời.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">500k+</div>
                  <div className="text-sm font-semibold uppercase tracking-wide opacity-70">Năng Suất Hàng Năm</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm font-semibold uppercase tracking-wide opacity-70">Chuẩn An Toàn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Giải Pháp Sản Xuất Doanh Nghiệp</h2>
            <p className="text-on-surface-variant">Dịch vụ toàn diện được thiết kế riêng cho chủ thương hiệu, nhà bán lẻ và các đơn vị quảng cáo trên toàn thế giới.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-2xl group hover:bg-primary transition-colors duration-500">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-on-primary">Sản Xuất OEM/ODM</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 leading-relaxed">Hiện thực hóa tầm nhìn của bạn với dây chuyền sản xuất tiên tiến, khả năng đáp ứng sản lượng lớn mà không làm mất đi chi tiết thủ công tinh xảo.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl group hover:bg-primary transition-colors duration-500">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">draw</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-on-primary">Tư Vấn Thiết Kế</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 leading-relaxed">Đội ngũ thiết kế in-house chuyển đổi từ phác thảo 2D sang mẫu thử 3D, tối ưu hóa vật liệu và độ chính xác của nhân vật.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl group hover:bg-primary transition-colors duration-500">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">public</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-on-primary">Logistics Xuất Khẩu</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 leading-relaxed">Vận chuyển quốc tế thuận tiện với đầy đủ hồ sơ tuân thủ cho thị trường EU, Mỹ và Châu Á.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-2">Sản Phẩm Tiêu Biểu</h2>
              <p className="text-on-surface-variant">Các dự án chọn lọc thể hiện năng lực sản xuất đa dạng của chúng tôi.</p>
            </div>
            <Link to="/projects" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Xem Toàn Bộ Dự Án <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img alt="Plush bear" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU18dyw-KF5nSfXoCLd1s5EVEB-_Ju5Pzt_2mZjn31xB-kbS83OT1Q66rxgKEmk7XRlcO2b7wo9urvr-al9nbaLEP20qJcuc7KwnB179rCLEkZwH2IcUSEIvdhrFZdfSRFmg1Uq1YkvuEur6hc_PBmoY2uok3baKRTll5B5zGk2J_Dmk5ua6WVyjQMNVOVePZjKQryctSXA1FT2Hmyz3qCEs1v5GRzhX3-YdkviGf82HQVJ_6Y7HZDZjxjaaU_jujqftm2RbT0wIg" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Bộ Sưu Tập Bán Lẻ</span>
                <h4 className="text-xl font-bold text-primary">Gấu Heritage Cổ Điển</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img alt="Custom mascot" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd24Xkuip6el1_9qmJp1oEe135-IN8PlnHf3ib_DWpbagTYA2w66bHqppn_Uls8LxnlR5KtEMduf18lLcHT9X4hfPmiILSTt1nmDaAylbeA28PJam8vZgx_ezT7fbMPuUt55IUTNCMrpnZBY4FjbzGJPV4JH-H8avi8Z-zMpgMGMwIXNp9krQJcQPqj34TxISPjie_KHz9pMo98NLQJUnobt5gGKgyFYZWvgJsGPtRtTznXiTSczcW5cDcN1moMX6F1-Gxsr6iqwM" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Mascot OEM</span>
                <h4 className="text-xl font-bold text-primary">Thương Hiệu Tech-Corp</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img alt="Abstract plush" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQINfP2q_EJ78vcPqw7dAS6PNlRXwTq2ZavFF0ETCBoBgJQMmyEgRshlXTB1rKnuFx2oGFEedSM6Zo5aWZiDoRfvRcmDla6ZAzD-sWyX_BXqavIQzi2Ie-cYX89xr-bFuRqfEDGBn2oaWeIi9FLcTT_mjn_UDo91CMyclJnBerIKNZNSpSeBjuTnuSaBErPqu3trW0Q9XHKE3w00ohVct1w-Z8NgQTrLNPzYZNF2JfseBvqvAYMA-KSmLLoKFqdrOVbiQe7smn_8c" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Thiết Kế ODM</span>
                <h4 className="text-xl font-bold text-primary">Dòng Nordic Hiện Đại</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img alt="Luxury plush" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkDqvryFsheDneI7vyqCFMPOGSO5L6iqLSdyaYjr48jq7mzen6gtLcxb4byCwR7lgVRP4NYxOv5eMNgURKPD6r1vlXVDtnBB2IS2TnINQ8l9D_T7SqOwTszEGMheEo8yaFTzYW0HG3AS2plrh3BAJ02fGK9xWHkFXI_gKu_XvQMxKfD4Djgl2x9VU3GIcEDB03PGH8mGS0OZ0V_Z0FtU6FwZwB-xmbHK865zsVic5irr-gXscqbDgbe7RK5t5Mh9W267p_5HNM36E" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Bộ Sưu Tập Wilderness</span>
                <h4 className="text-xl font-bold text-primary">Savanna Artisans</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Timeline Overview */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-primary">Quy Trình 6 Bước</h2>
            <p className="text-on-surface-variant mt-4">Quy trình sản xuất chuẩn xác được tinh chỉnh qua ba thập kỷ.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 relative">
            {[
              { id: '01', title: 'Tư vấn', icon: 'lightbulb' },
              { id: '02', title: 'Thiết kế mẫu', icon: 'architecture' },
              { id: '03', title: 'Duyệt mẫu', icon: 'inventory_2' },
              { id: '04', title: 'Sản xuất', icon: 'factory' },
              { id: '05', title: 'QC & An toàn', icon: 'verified' },
              { id: '06', title: 'Giao hàng', icon: 'local_shipping' },
            ].map((step) => (
              <div key={step.id} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-surface-container-high rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors relative z-10">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container text-2xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full text-white text-[10px] flex items-center justify-center font-bold">{step.id}</div>
                </div>
                <h5 className="font-bold text-primary">{step.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary-container rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 lg:w-1/2 flex flex-col justify-center text-on-primary">
              <h2 className="text-4xl font-bold mb-6">Yêu Cầu Báo Giá & Mẫu Thử</h2>
              <p className="text-lg opacity-80 mb-10">Bắt đầu hành trình sản xuất của bạn bằng một buổi tư vấn. Các chuyên gia của chúng tôi sẽ phản hồi trong vòng 24 giờ với lộ trình dự án sơ bộ.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>Tư vấn thiết kế ban đầu miễn phí</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>Bảng đặc tính vật liệu chi tiết</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>Ước tính thời gian sản xuất mẫu</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-low p-12 lg:p-20 lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Tên Công Ty</label>
                    <input className="w-full bg-surface border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 transition-colors" placeholder="Công ty của bạn..." type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Email Liên Hệ</label>
                    <input className="w-full bg-surface border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 transition-colors" placeholder="name@company.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Mô Tả Dự Án</label>
                  <textarea className="w-full bg-surface border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 transition-colors" placeholder="Hãy kể cho chúng tôi về ý tưởng mascot hoặc sản phẩm bán lẻ của bạn..." rows="4"></textarea>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer">
                    <span className="material-symbols-outlined text-sm">upload_file</span>
                    <span>Tải lên thiết kế (PDF/JPG)</span>
                  </div>
                  <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:bg-secondary transition-colors" type="submit">Gửi Yêu Cầu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
