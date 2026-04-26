'use client';

import { useState } from 'react';
import { CartProvider } from '@/lib/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';
import CheckoutModal from '@/components/CheckoutModal';
import { products } from '@/lib/products';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <CartProvider>
      <Header onCartClick={handleOpenCart} />
      <main>
        <Hero />
        <ProductSection id="categoria-mascotas" title="Para Mascotas en General" categoryId="mascotas" products={products} />
        <ProductSection id="categoria-perros" title="Para Perros" categoryId="perros" products={products} />
        <ProductSection id="categoria-gatos" title="Para Gatos" categoryId="gatos" products={products} />
        <ProductSection id="categoria-accesorios" title="Accesorios" categoryId="accesorios" products={products} />
      </main>
      <Footer />
      
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} onCheckout={handleOpenCheckout} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </CartProvider>
  );
}
