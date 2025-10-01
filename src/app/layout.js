// import localFont from 'next/font/local';
// import './globals.css';

// // Gilroy font
// const gilroy = localFont({
//   src: [
//     {
//       path: '../fonts/Gilroy-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Gilroy-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Gilroy-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Gilroy-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-gilroy',
//   display: 'swap',
// });

// export const metadata = {
//   title: 'Panto',
//   description: 'Make your interior more minimalistic & modern',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${gilroy.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }


// Import Inter font from Google
import { Inter } from 'next/font/google';
import './globals.css';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Panto',
  description: 'Make your interior more minimalistic & modern',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
