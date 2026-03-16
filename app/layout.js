import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Mohd Noman Qadri | Top Full Stack, AI/ML & DevOps Developer in Delhi',
  description: 'Hire Mohd Noman Qadri, an expert Full Stack Developer, AI/ML Specialist, and DevOps Engineer based in Delhi NCR. Offering scalable, fast, and modern web solutions.',
  keywords: ['Full Stack Developer Delhi', 'AI/ML Developer Delhi', 'DevOps Engineer Delhi', 'MERN Stack Developer Delhi', 'React Developer New Delhi', 'Node.js Developer', 'Software Engineer Delhi', 'Mohd Noman Qadri'],
  authors: [{ name: 'Mohd Noman Qadri' }],
  creator: 'Mohd Noman Qadri',
  icons: {
    icon: '/assets/favicon1.png',
    shortcut: '/assets/favicon1.png',
    apple: '/assets/favicon1.png',
  },
  openGraph: {
    title: 'Mohd Noman Qadri | Full Stack, AI/ML & DevOps in Delhi',
    description: 'Expert Full Stack Developer, AI/ML Specialist, and DevOps Engineer offering premium digital solutions in Delhi NCR.',
    siteName: 'Al Qadri Dev',
    images: [
      {
        url: '/assets/logo3.png',
        width: 800,
        height: 800,
        alt: 'Al Qadri Dev Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohd Noman Qadri | Full Stack, AI/ML & DevOps Developer in Delhi',
    description: 'Hire an expert Full Stack Developer, AI/ML Specialist, and DevOps Engineer based in Delhi NCR.',
    images: ['/assets/logo3.png'],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohd Noman Qadri',
    url: 'https://alqadridev.in',
    image: 'https://alqadridev.in/assets/logo3.png',
    jobTitle: ['Full Stack Developer', 'AI/ML Developer', 'DevOps Engineer'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi NCR',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://github.com/nomanqadri34',
      'https://linkedin.com/in/nomanqadri34',
      'https://twitter.com/nomanqadri34'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
