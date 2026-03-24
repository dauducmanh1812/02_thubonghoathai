import React from 'react';

const ProcessPage = () => {
  const steps = [
    { id: '01', title: 'Tư vấn', en: 'Consultation', icon: 'forum', desc: 'Phân tích yêu cầu và nghiên cứu tính khả thi của dự án.' },
    { id: '02', title: 'Thiết kế', en: 'Design', icon: 'edit_note', desc: 'Phác thảo rập và lựa chọn chất liệu vải phù hợp.' },
    { id: '03', title: 'Duyệt mẫu', en: 'Prototype', icon: 'task_alt', desc: 'Sản xuất mẫu vật lý để khách hàng kiểm duyệt chất lượng.' },
    { id: '04', title: 'Sản xuất', en: 'Production', icon: 'precision_manufacturing', desc: 'Sản xuất hàng loạt tại cơ sở hiện đại của chúng tôi.' },
    { id: '05', title: 'QC', en: 'Kiểm định', icon: 'verified_user', desc: 'Kiểm soát chất lượng đa điểm nghiêm ngặt trước khi đóng gói.' },
    { id: '06', title: 'Giao hàng', en: 'Delivery', icon: 'local_shipping', desc: 'Vận chuyển logistics toàn cầu và giao hàng tận nơi.' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 pb-32 overflow-hidden bg-surface snap-start">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sản xuất gấu bông chất lượng cao"
            className="w-full h-full object-cover opacity-15 grayscale contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Jk6X-n2Z3uB5bUsH8ekhl1O2EuEqxMRjOov96QthelBFo8nDDF6860LhLoCGSYDVlkchz8qz2YLXhRXG_8tewfQvDTTo6qdaX7USee24KUy60z8j7IFbFtVZYMLSF6KfcOtGxrOsrSSzlLfzC-aypUBou3tIOIwPstaOelRjxZs4zK39Pc_EV5aVWO8EkEaGksA2zwa9-0m4Xbcjt6_VpS1G6SbnbMWThryj7mVRzTaOvHTyGpd3I0oDXp9X3Jfi0MUVNoUO-r4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest mb-6 uppercase">
              30 Năm Kinh Nghiệm Sản Xuất Nghệ Thuật
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tighter">
              Ý tưởng của bạn,<br/><span className="text-secondary italic">Tay nghề của chúng tôi.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl font-body">
              Kết hợp tay nghề thủ công truyền thống với độ chính xác công nghiệp. Chúng tôi biến các khái niệm thành thú nhồi bông cao cấp cho các thương hiệu toàn cầu, đảm bảo mỗi mũi khâu đều phản ánh cam kết chất lượng suốt ba thập kỷ.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/10">
                Bắt đầu dự án ngay
              </button>
              <div className="flex items-center gap-4 bg-surface-container-low/70 backdrop-blur-md px-6 py-4 rounded-xl border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                <div>
                  <p className="text-xs font-label font-bold text-primary opacity-60">CHỨNG NHẬN</p>
                  <p className="text-sm font-bold text-primary">Tuân thủ ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity & Credentials Bento */}
      <section className="py-24 bg-surface-container-low snap-start">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-headline text-3xl font-bold text-primary mb-4">Năng lực sản xuất công nghiệp</h3>
                <p className="text-on-surface-variant max-w-md mb-8">
                  Với hơn 15.000 m2 không gian sản xuất, nhà máy của chúng tôi tích hợp hoàn thiện thủ công truyền thống với công nghệ cắt laser tự động.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-extrabold text-secondary mb-1 tracking-tighter">50k+</p>
                    <p className="text-sm font-label text-primary font-bold opacity-60 uppercase">SẢN PHẨM MỖI THÁNG</p>
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-secondary mb-1 tracking-tighter">200+</p>
                      <p className="text-sm font-label text-primary font-bold opacity-60 uppercase">NGHỆ NHÂN LÀNH NGHỀ</p>
                  </div>
                </div>
              </div>
              <img
                alt="Nhà máy sản xuất"
                className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7D4K4cT7okMAjaez0cHXf9gz6eYsfp886iHsHb3vCY_Rwtj9c-RBvYhs-WflWEb8AA8t5K4F8lDp5A9WwqznrTVYw9PupgBAC02c_zdd_A5g5tczEsMnTTcfh_yMQqfyZ8dpnD4Uea7MQx6DNigVBVDjV2LR_7HYRC8T_itF2zxNDP3ObftA_rg9SiasKw1GfS2y5lAQYLfoDDrC7UzRTqRguQN9kmIL9mDaVzQ2Txp6AyVbtwG93mxaTIg-8k2G3T5ju5l0_a0"
              />
            </div>
            <div className="bg-primary p-10 rounded-2xl text-on-primary">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-6" style={{fontVariationSettings: "'FILL' 1"}}>factory</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Chuyên gia OEM/ODM</h3>
              <p className="text-primary-fixed opacity-80 leading-relaxed">
                Từ thiết kế nhân vật đến cung ứng nguyên vật liệu, chúng tôi cung cấp giải pháp sản xuất toàn diện phù hợp với các tiêu chuẩn xuất khẩu toàn cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Visual Timeline */}
      <section className="py-32 bg-surface snap-start">
        <div className="max-w-7xl mx-auto px-8 text-center mb-20">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">Quy trình sản xuất</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Quy trình làm việc 6 bước tinh chỉnh của chúng tôi đảm bảo tính minh bạch, chất lượng và độ chính xác từ bản phác thảo đầu tiên đến lô hàng cuối cùng.</p>
        </div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
                </div>
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">BƯỚC {step.id}</span>
                <h4 className="font-headline font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-xs text-on-surface-variant font-medium">({step.en})</p>
                <p className="mt-4 text-sm text-on-surface-variant px-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Contact Section */}
      <section className="py-24 max-w-7xl mx-auto px-8 snap-start">
        <div className="bg-surface-container-highest rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-primary/5">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">Bắt đầu dự án của bạn ngay</h2>
            <p className="text-on-surface-variant mb-10 leading-relaxed">
              Sẵn sàng hiện thực hóa các nhân vật thương hiệu của bạn? Đội ngũ kỹ sư và nghệ nhân của chúng tôi luôn sẵn sàng thảo luận về các thông số kỹ thuật của bạn.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-primary opacity-60 uppercase">Họ và tên</label>
                  <input className="w-full bg-surface-container-highest border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors" placeholder="Nguyễn Văn A" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-primary opacity-60 uppercase">Email công việc</label>
                  <input className="w-full bg-surface-container-highest border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors" placeholder="contact@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-primary opacity-60 uppercase">Mô tả dự án</label>
                <textarea className="w-full bg-surface-container-highest border-b border-outline-variant/40 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors" placeholder="Hãy cho chúng tôi biết về nhu cầu sản xuất của bạn..." rows="3"></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-full font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-3" type="submit">
                  Gửi yêu cầu
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              alt="Sản phẩm hoàn thiện"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJi2pJpq3b9zKFjufSJa0wAt8_CJqN2OlMeWZSkxSZM9Vl7YVW6WbTt9dxKG3oGW4euYJtqgPzhU00TgrWCgk4YgX8cfDaWT825fdxW-JcxQ-TL2rqAgpNb820_GgTK53waZaW-AAbrMfkEzB4LJNIYFPZiDriKlkNjVR6tnFKvyeC_lgBU9CrDrxvvoaVG06liKiysXG6SjNyJBnnGiZm8In5anRpH-5Ah459BkZxbZ3UO9dOS-S4MfxZwqaGOfAp_Ovt8jNjYs"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-multiply"></div>
            <div className="absolute bottom-12 left-12 right-12 bg-surface-container/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
              <p className="font-headline font-bold text-primary text-lg mb-2 italic">"Sự tỉ mỉ và chú trọng vào an toàn vật liệu đã vượt xa các tiêu chuẩn bán lẻ quốc tế của chúng tôi."</p>
              <p className="text-sm font-label text-primary font-bold">— ĐỐI TÁC THƯƠNG HIỆU TOÀN CẦU</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessPage;
