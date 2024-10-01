import { inter } from '@app/ui/fonts';
import '@app/ui/global.css';
import React from 'react';

type RootLayoutArgs = { children: React.ReactNode; };

export default function RootLayout({ children }: RootLayoutArgs ) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
