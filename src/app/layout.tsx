// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kefir Natural - Probióticos Artesanales 100% Naturales',
  description: 'Kéfir natural y artesanal elaborado diariamente. Rico en probióticos, sin conservantes, entrega fresca. ¡Cuida tu salud de forma natural!',
  keywords: 'kéfir, kefir, probióticos, natural, artesanal, salud digestiva, Lima, Perú',
  verification: {
    google: 'google189565fe198468a1',
  },
  applicationName: 'Kefir Natural DobleEme',
  authors: [{ name: 'DobleEme' }],
  generator: 'Next.js',
  publisher: 'DobleEme',
  robots: 'index, follow',
  openGraph: {
    siteName: 'Kefir Natural - DobleEme',
    title: 'Kefir Natural - Probióticos Artesanales 100% Naturales',
    description: 'Kéfir natural y artesanal elaborado diariamente. Rico en probióticos.',
    url: 'https://dobleeme.vercel.app',
    type: 'website',
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