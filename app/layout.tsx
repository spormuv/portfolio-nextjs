import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mike | Portfolio',
  description: 'Next.js Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
