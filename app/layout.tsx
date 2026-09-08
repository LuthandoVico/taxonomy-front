import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import { AppShell } from '@/components/app-shell';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Skills Mapping Platform',
  description: 'Explore how occupations, skills, tasks and specialisations connect across OFO and ESCO.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${dmSans.variable} ${jetBrainsMono.variable}`}><AppShell>{children}</AppShell></body></html>;
}
