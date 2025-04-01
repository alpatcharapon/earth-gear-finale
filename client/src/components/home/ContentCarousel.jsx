import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  const [mainImages] = useState([
    "https://image.benq.com/is/image/benqco/zowie_iem_katowice_1920x530_desktop?$ResponsivePreset$",
    "https://rbtechngames.com/wp-content/uploads/2023/12/HyperX-BANNER-1040-x-500-px.png"
  ]);

  const [thumbnailImages] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Logitech_logo.png",
    "https://1000logos.net/wp-content/uploads/2019/09/Razer-logo.png",
    "https://www.highsense-gaming.com/wp-content/uploads/2024/04/Zowie-3.png.webp",
    "https://logos-world.net/wp-content/uploads/2023/05/HyperX-Logo.png",
    "https://cwsmgmt.corsair.com/press/CORSAIRLogo2020_stack_K.png"
  ]);

  return (
    <div>
      {/* Swiper ด้านบน (รูปใหญ่) */}
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[500px] rounded-md mb-4"
      >
        {mainImages.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              className="w-full h-full object-contain rounded-md"
              alt={`Main Slide ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper ด้านล่าง (Thumbnail) */}
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[100px] rounded-md"
      >
        {thumbnailImages.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              className="w-full h-full object-contain rounded-md"
              alt={`Thumbnail ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
