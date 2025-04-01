import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ContentCarousel = () => {
  // ✅ ใช้รูปภาพที่กำหนดเอง
  const [images] = useState([
    "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/06/Product/hyperx-cloud-iii-gaming-headset-black-red-front-left-view.jpg",
    "https://your-image-url-2.jpg",
    "https://your-image-url-3.jpg",
    "https://your-image-url-4.jpg",
    "https://your-image-url-5.jpg"
  ]);

  return (
    <div>
      {/* สไลด์หลัก */}
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-80 object-cover rounded-md mb-4"
      >
        {images.map((url, i) => (
          <SwiperSlide key={i}>
            <img src={url} className="w-full h-full object-cover rounded-md" alt={`Slide ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* สไลด์แบบ Thumbnail */}
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
        className="mySwiper object-cover rounded-md"
      >
        {images.map((url, i) => (
          <SwiperSlide key={i}>
            <img src={url} className="rounded-md w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentCarousel;
