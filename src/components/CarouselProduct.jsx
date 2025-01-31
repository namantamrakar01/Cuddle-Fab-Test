import React from 'react';
import '../Css/ImageCarousel.css'; // Import the CSS file

const CarouselProduct = ({ imageUrl, title, price }) => {
    return (
        <div className="carousel-product">
            <div className="carousel-product-image-wrapper">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="carousel-product-info">
                <div className="carousel-product-title">{title}</div>
                <div className="carousel-product-price">{price}</div>
            </div>
        </div>
    );
};

export default CarouselProduct;