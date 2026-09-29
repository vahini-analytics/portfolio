export const metadata = {
  title: "TEPPALA VAHINI | Portfolio",
  description: "Data Analyst and Machine Learning Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
