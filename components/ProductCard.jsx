'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article className="card">
      <div className="card-image">
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0' }} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-green)', margin: '0.5rem 0' }}>
          ${product.price.toFixed(2)}
        </p>
        <p className="card-desc">{product.desc}</p>
        <button
          className="btn-primary"
          style={{ width: '100%', marginTop: '0.75rem', opacity: isAdded ? '0.65' : '1' }}
          onClick={handleAddToCart}
        >
          {isAdded ? '✓ Agregado' : '🛒 Agregar al carrito'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
