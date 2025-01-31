import React from 'react';
import '../Css/ProductGrid.css'; // Import the CSS file

const Product = ({ imageUrl, title }) => {
    return (
        <div className="product">
            <div className="vignette"></div>
            <img src={imageUrl} alt={title} />
            <div className="product-title">{title}</div>
        </div>
    );
};

export default Product;