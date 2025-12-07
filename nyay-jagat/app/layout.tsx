import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Nyay Jagat',
  description: 'Know Your Rights. Own Your Future.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, outfit.variable, "font-sans antialiased text-slate-900 bg-slate-50")}>
        {children}
      </body>
    </html>
  );
}