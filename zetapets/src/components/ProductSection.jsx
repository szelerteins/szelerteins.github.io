import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ id, title, categoryId, products }) => {
  return (
    <section className="cards-section" id={id}>
      <div className="cards-wrapper">
        <h2 className="section-title">{title}</h2>
        <div className="cards-grid">
          {products[categoryId]?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
