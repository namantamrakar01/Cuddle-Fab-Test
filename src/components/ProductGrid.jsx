import React from 'react';
import Product from './Product';
import image6 from "../assets/image6.jpg";
import image5 from "../assets/image5.jpg";
import image4 from "../assets/image4.jpg";
import image3 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import image1 from "../assets/image1.jpg";
import '../Css/ProductGrid.css'; // Import the CSS file

const ProductGrid = () => {
    const products = [
        { img: image1, title: "Munchkin Outfit" },
        { img: image2, title: "Baba Suit" },
        { img: image3, title: "Kiddo Set" },
        { img: image4, title: "Snuggle Wear" },
        { img: image5, title: "Tiny Tot Dress" },
        { img: image6, title: "Junior Style" },
    ];

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <Product key={index} imageUrl={product.img} title={product.title} />
            ))}
        </div>
    );
};

export default ProductGrid;