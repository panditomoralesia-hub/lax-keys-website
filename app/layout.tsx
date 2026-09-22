import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LAX Keys | Mobile Car Keys in Los Angeles',
  description: 'Dealership-grade car keys cut and programmed at your location. LAX Keys is open 24/7 across Los Angeles.',
  metadataBase: new URL('https://laxkeys.com'),
  openGraph: { title: 'LAX Keys | Keep moving.', description: 'Mobile automotive key service across Los Angeles. WhatsApp dispatch 24/7.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
