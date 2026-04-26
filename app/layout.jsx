import './globals.css';

export const metadata = {
  title: 'Zetapets - Tienda de Productos para Mascotas',
  description: 'Compra productos de calidad para el cuidado y bienestar de tus mascotas. Envíos rápidos y seguros.',
  icons: {
    icon: '/img/ChatGPT Image Apr 6, 2026, 08_02_40 PM.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
