import "./globals.css";

export const metadata = {
  title: "Jobly",
  description: "Job application tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
