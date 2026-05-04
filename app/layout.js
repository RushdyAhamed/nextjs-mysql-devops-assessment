export const metadata = {
  title: 'Next.js MySQL App',
  description: 'Next.js + MySQL DevOps Assessment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
