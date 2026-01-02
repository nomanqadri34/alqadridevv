import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Al Qadri Dev | Full Stack & AI/ML Developer',
  description: 'Portfolio of Mohd Noman Qadri - Expert Full Stack Developer specializing in MERN stack, AI/ML integration, and scalable web solutions. Building exceptionally fast, modern, and responsive web applications.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Developer', 'Node.js', 'AI/ML', 'Web Development', 'Portfolio', 'Mohd Noman Qadri', 'Software Engineer'],
  authors: [{ name: 'Mohd Noman Qadri' }],
  creator: 'Mohd Noman Qadri',
  icons: {
    icon: '/assets/favicon1.png',
    shortcut: '/assets/favicon1.png',
    apple: '/assets/favicon1.png',
  },
  openGraph: {
    title: 'Al Qadri Dev | Build. Debug. Deliver.',
    description: 'Expert Full Stack Developer specializing in MERN, AI/ML, and modern web apps.',
    siteName: 'Al Qadri Dev',
    images: [
      {
        url: '/assets/noman1.jpg',
        width: 800,
        height: 800,
        alt: 'Mohd Noman Qadri',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Qadri Dev | Full Stack & AI/ML Developer',
    description: 'Expert Full Stack Developer specializing in MERN, AI/ML, and modern web apps.',
    images: ['/assets/noman1.jpg'],
  },
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
