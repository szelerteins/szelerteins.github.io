'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: ''
  });
  const { cart, clearCart, getSubtotal } = useCart();

  if (!isOpen) return null;

  const subtotal = getSubtotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      alert('Por favor completa todos los campos');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido');
      return false;
    }
    if (!/^\d{7,}$/.test(phone.replace(/\s/g, ''))) {
      alert('Por favor ingresa un teléfono válido');
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (!formData.paymentMethod) {
      alert('Por favor selecciona un método de pago');
      return;
    }
    alert(`¡Pedido realizado! ${formData.firstName}, recibirás un email de confirmación.`);
    clearCart();
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      paymentMethod: ''
    });
    onClose();
  };

  return (
    <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal-content" style={{ maxWidth: '700px', width: '90%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 id="stepIndicator">{step === 1 ? 'Paso 1 de 2: Datos Personales' : 'Paso 2 de 2: Método de Pago'}</h2>
          <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={onClose}>✕</button>
        </div>

        {step === 1 && (
          <div>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{ padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)' }}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{ padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)' }}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)', marginBottom: '1rem' }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                required
                value={formData.phone}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)', marginBottom: '1rem' }}
              />
              <input
                type="text"
                name="address"
                placeholder="Dirección"
                value={formData.address}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)', marginBottom: '1rem' }}
              />
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={formData.city}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-thin)', borderRadius: 'var(--radius-card)', marginBottom: '1rem' }}
              />
            </form>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button
                className="btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  if (validateForm()) {
                    setStep(2);
                  }
                }}
              >
                Continuar al pago
              </button>
              <button
                className="btn-secondary"
                style={{ flex: 1, background: 'var(--bg-light)', color: 'var(--text-dark)', border: '1px solid var(--border-thin)' }}
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span>Impuesto (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700' }}>
                <span>Total:</span>
                <span style={{ color: 'var(--primary-green)' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Método de Pago</h3>
              <label className="payment-option" style={{ marginBottom: '1rem', display: 'block', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="tarjeta"
                  checked={formData.paymentMethod === 'tarjeta'}
                  onChange={handleInputChange}
                  style={{ marginRight: '0.5rem', cursor: 'pointer' }}
                />
                Tarjeta de Crédito/Débito
              </label>
              <label className="payment-option" style={{ marginBottom: '1rem', display: 'block', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transferencia"
                  checked={formData.paymentMethod === 'transferencia'}
                  onChange={handleInputChange}
                  style={{ marginRight: '0.5rem', cursor: 'pointer' }}
                />
                Transferencia Bancaria
              </label>
              <label className="payment-option" style={{ display: 'block', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="efectivo"
                  checked={formData.paymentMethod === 'efectivo'}
                  onChange={handleInputChange}
                  style={{ marginRight: '0.5rem', cursor: 'pointer' }}
                />
                Efectivo a la Entrega
              </label>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn-primary"
                style={{ flex: 1 }}
                onClick={handlePayment}
              >
                Completar Pago
              </button>
              <button
                className="btn-secondary"
                style={{ flex: 1, background: 'var(--bg-light)', color: 'var(--text-dark)', border: '1px solid var(--border-thin)' }}
                onClick={() => setStep(1)}
              >
                Volver
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
