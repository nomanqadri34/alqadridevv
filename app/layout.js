import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Al Qadri Dev',
  description: 'Full Stack & AI/ML Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
