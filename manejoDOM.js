// ============ BASE DE DATOS DE PRODUCTOS ============
const products = {
    mascotas: [
        { name: 'Limpiador de pelo', price: 28.99, desc: 'Producto especializado para limpiar y cuidar el pelaje.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01v1xfxp2MNKSHIZCyh_!!2215898879815-0-cib.jpg' },
        { name: 'Comedero Automático', price: 79.99, desc: 'Dispensador automático inteligente para comida y agua.', image: 'https://chatgpt.com/backend-api/estuary/content?id=file_000000008f4071f596bd6c30cc2e7399&ts=493200&p=fs&cid=1&sig=f26fddd19fed009c3a7dbae00d062e1dc546b379b7a7b76c5b16722782c62261&v=0' },
        { name: 'Botella 3 en 1', price: 35.50, desc: 'Botella multiusos para agua, comida y transportación.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN012oOPQN1g8TeArnMxM_!!2215657834097-0-cib.jpg' }
    ],
    perros: [
        { name: 'Paños Absorbentes', price: 18.99, desc: 'Paños desechables de alta absorción para limpieza.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN014yC9mq1QS8s2b8iVI_!!2206811161974-0-cib.jpg' },
        { name: 'Collar para AirTag', price: 42.99, desc: 'Collar cómodo con compartimento seguro para AirTag.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01NdMTWa1vfCCzUT0hM_!!2218320536199-0-cib.jpg' }
    ],
    gatos: [
        { name: 'Rascador Catnip', price: 55.99, desc: 'Rascador con catnip integrado para gatos estimulados.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01AEaWxU1qzjqIK17Ja_!!1049355567-0-cib.jpg' }
    ],
    accesorios: [
        { name: 'Airtags', price: 99.99, desc: 'Localizadores inteligentes para mantener mascotas seguras.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN01TPYhD01izitkpUU3h_!!2212006114484-0-cib.jpg' },
        { name: 'Llavero Porta Airtag', price: 24.99, desc: 'Llavero protector y elegante para tu AirTag.', image: 'https://cbu01.alicdn.com/img/ibank/O1CN012IdaGu1Bs2uvLf8pf_!!0-0-cib.jpg' }
    ]
};

// ============ INICIALIZAR SECCIONES DE PRODUCTOS ============
function initializeProductSections() {
    const categories = ['mascotas', 'perros', 'gatos', 'accesorios'];
    
    categories.forEach(category => {
        const container = document.getElementById(`products-${category}`);
        if (!container) return;
        
        container.innerHTML = '';
        const categoryProducts = products[category] || [];
        
        categoryProducts.forEach(product => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0;">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p style="font-size: 1.25rem; font-weight: 700; color: var(--primary-green); margin: 0.5rem 0;">$${product.price.toFixed(2)}</p>
                    <p class="card-desc">${product.desc}</p>
                    <button class="btn-primary" style="width: 100%; margin-top: 0.75rem;" data-product="${product.name}" data-price="${product.price}">🛒 Agregar al carrito</button>
                </div>
            `;
            const btn = card.querySelector('button');
            btn.addEventListener('click', () => addToCart(product.name, product.price, btn));
            container.appendChild(card);
        });
    });
}

// Ejecutar cuando el DOM esté listo - Inicializar secciones de productos
function initProductSectionsOnDOM() {
    initializeProductSections();
}

// ============ CARRITO FUNCTIONALITY ============
let cart = [];
let currentCheckoutStep = 1;

function addToCart(productName, price, button) {
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartBadge();
    
    const originalText = button.textContent;
    button.textContent = '✓ Agregado';
    button.style.opacity = '0.65';
    
    showToast(`${productName} agregado al carrito`);
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.opacity = '1';
    }, 1500);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// ============ CART MODAL FUNCTIONS ============
function openCartModal() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }
    document.getElementById('cartModal').style.display = 'flex';
    updateCartDisplay();
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItemsContainer');
    cartContainer.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        
        const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)} c/u</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="decreaseQty(${index})">−</button>
                    <input type="number" class="qty-input" value="${item.quantity}" onchange="updateQty(${index}, this.value)">
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </div>
                <div class="cart-item-total">
                    <p class="subtotal">$${itemSubtotal.toFixed(2)}</p>
                    <button class="btn-remove" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;
        cartContainer.innerHTML += cartItemHTML;
    });
    
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function increaseQty(index) {
    cart[index].quantity++;
    updateCartDisplay();
}

function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    updateCartDisplay();
}

function updateQty(index, newQty) {
    const qty = parseInt(newQty) || 1;
    if (qty <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = qty;
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    if (cart.length === 0) {
        closeCartModal();
    } else {
        updateCartDisplay();
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }
    closeCartModal();
    currentCheckoutStep = 1;
    openCheckoutModal();
}

// ============ CHECKOUT FUNCTIONS ============
function openCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'flex';
    displayCheckoutStep();
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
    currentCheckoutStep = 1;
}

function displayCheckoutStep() {
    const step1 = document.getElementById('checkoutStep1');
    const step2 = document.getElementById('checkoutStep2');
    const stepIndicator = document.getElementById('stepIndicator');
    
    if (currentCheckoutStep === 1) {
        step1.style.display = 'block';
        step2.style.display = 'none';
        stepIndicator.textContent = 'Paso 1 de 2: Datos Personales';
    } else {
        step1.style.display = 'none';
        step2.style.display = 'block';
        stepIndicator.textContent = 'Paso 2 de 2: Método de Pago';
    }
}

function validateCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    const inputs = form.querySelectorAll('input[required]');
    
    for (let input of inputs) {
        if (!input.value.trim()) {
            showToast('Por favor completa todos los campos');
            return false;
        }
    }
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Por favor ingresa un email válido');
        return false;
    }
    
    const phone = document.getElementById('phone').value;
    if (!/^\d{7,}$/.test(phone.replace(/\s/g, ''))) {
        showToast('Por favor ingresa un teléfono válido');
        return false;
    }
    
    return true;
}

function goToPaymentMethod() {
    if (validateCheckoutForm()) {
        currentCheckoutStep = 2;
        displayCheckoutStep();
    }
}

function goBackToForm() {
    currentCheckoutStep = 1;
    displayCheckoutStep();
}

function selectPaymentMethod(method) {
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    document.getElementById('selectedPaymentMethod').value = method;
}

function confirmOrder() {
    const method = document.getElementById('selectedPaymentMethod').value;
    if (!method) {
        showToast('Por favor selecciona un método de pago');
        return;
    }
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    showToast(`¡Pedido realizado! ${firstName}, recibirás un email de confirmación.`);
    
    // Reset form and cart for demo
    setTimeout(() => {
        cart = [];
        updateCartBadge();
        closeCheckoutModal();
        document.getElementById('checkoutForm').reset();
        document.getElementById('selectedPaymentMethod').value = '';
    }, 2000);
}

// ============ MODAL FUNCTIONALITY ============
function openCategoryModal(category, categoryName) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('modalTitle');
    const container = document.getElementById('modalProductsContainer');

    title.textContent = categoryName;
    container.innerHTML = '';

    const categoryProducts = products[category] || [];
    categoryProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0;">
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p style="font-size: 1.25rem; font-weight: 700; color: var(--primary-green); margin: 0.5rem 0;">$${product.price.toFixed(2)}</p>
                <p class="card-desc">${product.desc}</p>
                <button class="btn-primary" style="width: 100%; margin-top: 0.75rem;" data-product="${product.name}" data-price="${product.price}">🛒 Agregar al carrito</button>
            </div>
        `;
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => addToCart(product.name, product.price, btn));
        container.appendChild(card);
    });

    modal.style.display = 'flex';
    modal.style.alignItems = 'flex-start';
    modal.style.justifyContent = 'center';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

// ============ DRAWER MOBILE NAVIGATION ============
function initDrawerNavigation() {
    const hamburger = document.querySelector('.nav-hamburger');
    const drawer = document.querySelector('.nav-drawer');
    const overlay = document.querySelector('.nav-overlay');
    const closeBtn = document.querySelector('.drawer-close');

    if (!hamburger || !drawer || !overlay || !closeBtn) {
        console.warn('Navigation elements not found');
        return;
    }

    function openDrawer() {
        drawer.classList.add('is-open');
        overlay.classList.add('is-visible');
    }

    function closeDrawer() {
        drawer.classList.remove('is-open');
        overlay.classList.remove('is-visible');
    }

    hamburger.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Drawer links close drawer
    document.querySelectorAll('.nav-drawer a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// ============ MODAL EVENT LISTENERS ============
function initModalEvents() {
    // Cerrar modal al presionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });

    // Cerrar modal al hacer clic fuera
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target.id === 'productModal') {
                closeProductModal();
            }
        });
    }
}

// ============ SMOOTH SCROLL NAVIGATION ============
function initSmoothScroll() {
    // Make all category links work
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============ INITIALIZE ON DOM READY ============
document.addEventListener('DOMContentLoaded', () => {
    initDrawerNavigation();
    initModalEvents();
    initSmoothScroll();
    initProductSectionsOnDOM();
    
    // Cart button listener
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }
    
    console.log('DOM initialized successfully');
});
