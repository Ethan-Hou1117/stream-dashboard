import '../globals.css';

import Nav from '../nav';
import AnalyticsWrapper from '../analytics';
import Toast from '../toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full" 
     // style={{ backgroundColor: '#1a153c'}}
     >
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        {children}
        <AnalyticsWrapper />
        <Toast />
      </body>
    </html>
  );
}
