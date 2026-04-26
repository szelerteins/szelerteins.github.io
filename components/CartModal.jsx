'use client';

import { useCart } from '@/lib/CartContext';

const CartModal = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, getSubtotal } = useCart();

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal-content" style={{ maxWidth: '600px', width: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Tu Carrito</h2>
          <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={onClose}>✕</button>
        </div>

        <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '1.5rem' }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>Tu carrito está vacío</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)} c/u</p>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => updateQuantity(index, item.quantity - 1)}>−</button>
                  <input
                    type="number"
                    className="qty-input"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)}
                  />
                  <button className="qty-btn" onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-item-total">
                  <p className="subtotal">${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="btn-remove" onClick={() => removeFromCart(index)}>Eliminar</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div style={{ borderTop: '1px solid var(--border-thin)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Subtotal:</span>
                <span id="cartSubtotal">${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Impuesto (10%):</span>
                <span id="cartTax">${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700' }}>
                <span>Total:</span>
                <span id="cartTotal" style={{ color: 'var(--primary-green)' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-primary" style={{ flex: 1 }} onClick={onCheckout}>
                Proceder al pago
              </button>
              <button className="btn-secondary" style={{ flex: 1, background: 'var(--bg-light)', color: 'var(--text-dark)', border: '1px solid var(--border-thin)' }} onClick={onClose}>
                Continuar comprando
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
