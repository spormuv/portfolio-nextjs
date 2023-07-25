import { ToastContainer } from '@/components/NextToast';
import type { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';
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
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
