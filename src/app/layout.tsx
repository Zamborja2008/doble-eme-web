// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kefir Natural - Probióticos Artesanales 100% Naturales',
  description: 'Kefir natural y artesanal elaborado diariamente. Rico en probióticos, sin conservantes, entrega fresca. ¡Cuida tu salud de forma natural!',
  keywords: 'kefir, probióticos, natural, artesanal, salud digestiva, Lima, Perú',
  verification: {
    google: 'google189565fe198468a1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}