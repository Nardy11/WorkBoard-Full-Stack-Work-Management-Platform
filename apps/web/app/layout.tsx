import type { ReactNode } from 'react';

export const metadata = {
  title: 'WorkBoard',
  description: 'A full-stack work management platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
