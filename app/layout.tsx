import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import css from './mainPage.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/logo.png',
  },
  title: 'Pet Love App',
  description: 'Take good care of your small pets',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div className={css.gluedFooterContainer}>
          <TanStackProvider>
            <AuthProvider>
              <Header />
              <main className={css.gluedFooterMain}>
                {children}
                {modal}
              </main>
              <Footer />
            </AuthProvider>
          </TanStackProvider>
        </div>
      </body>
    </html>
  );
}
