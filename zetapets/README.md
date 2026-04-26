# Zetapets - E-commerce con React

Proyecto de e-commerce para productos de mascotas, construido con React y optimizado con componentes reutilizables y gestión de estado.

## 🚀 Características

- **Interfaz moderna y responsiva** - Diseño mobile-first con CSS personalizado
- **Carrito de compras funcional** - Gestión de productos en tiempo real
- **Sistema de checkout** - Validación de formularios y métodos de pago
- **Navegación fluida** - Menú responsivo con drawer mobile
- **Context API** - Gestión centralizada del carrito
- **Componentes reutilizables** - Arquitectura modular y escalable

## 📁 Estructura del Proyecto

```
zetapets/
├── public/
│   ├── index.html
│   └── img/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductSection.jsx
│   │   ├── CartModal.jsx
│   │   └── CheckoutModal.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   ├── style.css
│   │   └── normalize.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── .eslintrc.json
```

## 🛠️ Instalación

```bash
cd zetapets
npm install
```

## 📦 Dependencias

- **React** (^18.2.0) - Librería de UI
- **Vite** (^4.4.0) - Build tool
- **ESLint** (^8.44.0) - Linter

## 🚀 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

## 🏗️ Build

Para crear una versión de producción:

```bash
npm run build
```

## 📋 Características Principales

### 1. Componentes
- **Header** - Navegación con mega menú y drawer mobile
- **Hero** - Sección principal con CTA
- **ProductCard** - Tarjeta reutilizable de productos
- **ProductSection** - Grid de productos por categoría
- **CartModal** - Modal del carrito con gestión de cantidad
- **CheckoutModal** - Flujo de compra en 2 pasos

### 2. Context API - CartContext
```javascript
// Funciones disponibles
- addToCart(product)
- removeFromCart(index)
- updateQuantity(index, quantity)
- clearCart()
- getTotalItems()
- getSubtotal()
```

### 3. Base de Datos de Productos
Categorías:
- Mascotas (general)
- Perros
- Gatos
- Accesorios

## 🎨 Estilos

El proyecto utiliza CSS personalizado con:
- **Variables CSS** - Sistema de colores y espaciado consistente
- **Grid y Flexbox** - Layouts responsivos
- **Media queries** - Soporte para tablet y mobile
- **Animaciones** - Transiciones suaves

### Colores principales
- Verde primario: `#10b981`
- Cian primario: `#0d9488`
- Fondo claro: `#f8fafc`

## 📱 Responsividad

- ✅ Desktop (1200px+)
- ✅ Tablet (1024px)
- ✅ Mobile (600px)

## 🔧 Scripts disponibles

```json
{
  "dev": "vite",           // Inicia el servidor de desarrollo
  "build": "vite build",   // Crea el build de producción
  "preview": "vite preview", // Preview del build
  "lint": "eslint src"     // Ejecuta ESLint
}
```

## 💡 Optimizaciones Implementadas

1. **Gestión de estado centralizada** con Context API
2. **Componentes funcionales** con hooks
3. **Re-renders optimizados** con separación de concerns
4. **CSS modular** organizado por secciones
5. **Código limpio** y reutilizable

## 🤝 Contribuir

El proyecto está estructurado para facilitar futuras mejoras:
- Agregar nuevas categorías de productos
- Implementar autenticación
- Integrar pasarelas de pago reales
- Expandir el sistema de notificaciones

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

**Creado con ❤️ para Zetapets**
