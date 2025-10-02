import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Panto',
  description: 'Make your interior more minimalistic & modern',
  icons: {
    icon: "/sofa.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/sofa.png" />
      </Head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
