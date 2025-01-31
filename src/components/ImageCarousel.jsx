import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../Css/ImageCarousel.css'; // Separate CSS file

// Import images
import image6 from "../assets/image6.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image4.jpg";
import image3 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import image1 from "../assets/image1.jpg";

const ImageCarousel = () => {
  const itemData = [
    { img: image1, title: "Munchkin Outfit", price: "$25" },
    { img: image2, title: "Baba Suit", price: "$30" },
    { img: image3, title: "Kiddo Set", price: "$20" },
    { img: image4, title: "Snuggle Wear", price: "$28" },
    { img: image5, title: "Tiny Tot Dress", price: "$22" },
    { img: image6, title: "Junior Style", price: "$35" },
  ];

  return (
    <section id="image-carousel" aria-label="Beautiful Images">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          arrows: true,
          pagination: false, // Removes dots
          perPage: 4, // Show 4 slides at a time
          perMove: 1,
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {itemData.map((item, index) => (
          <SplideSlide key={index}>
          <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={item.img} alt={item.title} />
          </div>
          <p className="image-title">{item.title}</p>
          <p className="image-price">{item.price}</p>
      </SplideSlide>
      
        ))}
      </Splide>
    </section>
  );
};

export default ImageCarousel;
