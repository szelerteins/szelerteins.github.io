'use client';

import { useState } from 'react';
import { CartProvider } from '@/lib/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import CartModal from '@/components/CartModal';
import CheckoutModal from '@/components/CheckoutModal';
import Toast from '@/components/Toast';
import { products } from '@/data/products';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  // ============ CART FUNCTIONS ============
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      let newCart;
      
      if (existingProduct) {
        newCart = prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      
      showToast(`${product.name} agregado al carrito`);
      return newCart;
    });
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeFromCart(index);
    } else {
      setCart(prevCart =>
        prevCart.map((item, i) =>
          i === index ? { ...item, quantity: parseInt(quantity) } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // ============ MODAL FUNCTIONS ============
  const handleOpenCart = () => {
    if (cart.length === 0) {
      showToast('El carrito está vacío');
      return;
    }
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

  const handleConfirmOrder = (formData) => {
    const subtotal = getSubtotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    showToast(`¡Pedido realizado! ${formData.firstName}, recibirás un email de confirmación.`);
    setCart([]);
    setIsCheckoutOpen(false);
  };

  // ============ TOAST NOTIFICATION ============
  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2500);
  };

  return (
    <CartProvider>
      <Header onCartClick={handleOpenCart} cartCount={getTotalItems()} />
      <main>
        <Hero />
        <ProductSection
          id="categoria-mascotas"
          title="Para Mascotas en General"
          categoryId="mascotas"
          products={products}
          onAddToCart={addToCart}
        />
        <ProductSection
          id="categoria-perros"
          title="Para Perros"
          categoryId="perros"
          products={products}
          onAddToCart={addToCart}
        />
        <ProductSection
          id="categoria-gatos"
          title="Para Gatos"
          categoryId="gatos"
          products={products}
          onAddToCart={addToCart}
        />
        <ProductSection
          id="categoria-accesorios"
          title="Accesorios"
          categoryId="accesorios"
          products={products}
          onAddToCart={addToCart}
        />
      </main>
      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCheckout={handleOpenCheckout}
      />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        cart={cart}
        onConfirmOrder={handleConfirmOrder}
      />
      <Toast show={toast.show} message={toast.message} />
    </CartProvider>
  );
}
