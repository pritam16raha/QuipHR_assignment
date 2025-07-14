import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for a modern look
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

// Setup the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShowScout: Your TV Show Browser',
  description: 'Find and explore your favorite TV shows.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        All base styles are now applied here using Tailwind classes.
        - bg-white dark:bg-gray-900: Sets the background for light/dark modes.
        - text-gray-900 dark:text-gray-100: Sets the default text color.
        - transition-colors duration-300: Makes the theme change smooth.
        - flex flex-col min-h-screen: Ensures the footer sticks to the bottom.
      */}
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto p-4 md:p-6">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
