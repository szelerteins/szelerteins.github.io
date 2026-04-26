'use client';

import ProductCard from './ProductCard';

const ProductSection = ({ id, title, categoryId, products, onAddToCart }) => {
  return (
    <section className="cards-section" id={id}>
      <div className="cards-wrapper">
        <h2 className="section-title">{title}</h2>
        <div className="cards-grid">
          {products[categoryId]?.map((product, index) => (
            <ProductCard key={index} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
