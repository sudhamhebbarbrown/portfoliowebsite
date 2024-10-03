import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';
import { url } from 'inspector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sudhamhebbar.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Sudham Hebbar',
    template: '%s | Sudham Hebbar',
  },
  description: 'Masters student at Brown University',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: 'resume', url: 'https://drive.google.com/file/d/1kORUU2Jo3v2i6g9M1T7MgRIjDop58fCQ/view?usp=drive_link' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sudham-hebbar' },
    { name: 'github', url: 'https://github.com/sudhamhebbarbrown' },
    { name: 'email', url: 'mailto:sudham_hebbar@brown.edu'}
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
