# Zetapets E-commerce - Next.js Migration

## Descripción
Migración completa del proyecto Zetapets de React + Vite a **Next.js 14 con App Router**.

## ✅ Características Mantenidas

- Diseño idéntico (colores, tipografía, layouts)
- Funcionalidad de carrito completa con Context API
- Checkout de dos pasos con validación
- Responsive design (mobile, tablet, desktop)
- Animaciones y transiciones suaves
- Mega menú navegable
- Drawer móvil
- Todos los productos y categorías originales
- Estilos CSS sin cambios significativos

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.jsx              # Layout principal + metadata
│   ├── page.jsx                # Página de inicio
│   └── globals.css             # Estilos globales
├── components/
│   ├── Header.jsx              # Navegación y header
│   ├── Hero.jsx                # Sección hero
│   ├── ProductCard.jsx         # Tarjeta de producto
│   ├── ProductSection.jsx      # Sección de productos
│   ├── CartModal.jsx           # Modal del carrito
│   ├── CheckoutModal.jsx       # Modal de checkout
│   └── Footer.jsx              # Footer
├── lib/
│   ├── CartContext.jsx         # Context del carrito
│   └── products.js             # Data de productos
├── public/
│   └── img/                    # Imágenes estáticas
├── package.json
├── next.config.js
└── jsconfig.json               # Alias de imports (@/)
```

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

El sitio estará disponible en `http://localhost:3000`

## 📝 Cambios Realizados

1. ✅ Migración a estructura estándar de Next.js
2. ✅ Componentes convertidos a JSX con `'use client'` donde necesario
3. ✅ CartContext mantenido con gestión de estado completa
4. ✅ Estilos CSS migrados a `globals.css`
5. ✅ Imports configurados con alias `@/`
6. ✅ Imágenes copiadas a `public/img/`
7. ✅ Metadata y SEO básico implementado

## 🎯 Aspectos Técnicos

- **Framework**: Next.js 14+
- **Router**: App Router (no pages router)
- **State Management**: React Context API
- **Styling**: CSS vanilla con variables CSS
- **Componentes**: Funcionales con hooks
- **Interactividad**: Event handlers y state management

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "next": "^14.0.0"
}
```

## 🔧 Próximos Pasos Opcionales

- Optimizar imágenes con `next/image`
- Implementar API routes para checkout
- Agregar integración de pagos real
- Persistencia de carrito (localStorage)
- Mejorar SEO con sitemap y robots.txt
- Análisis con Google Analytics

## 📱 Responsive Design

- **Desktop**: Layout completo con mega menú
- **Tablet**: Ajustes de espaciado y grid
- **Mobile**: Drawer menu, grid adaptable

Todos los breakpoints mantenidos del proyecto original.
