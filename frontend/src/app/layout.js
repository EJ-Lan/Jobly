import "./globals.css";

export const metadata = {
  title: "Jobly",
<<<<<<< HEAD
  description: "Job application tracker",
=======
  description: "Job application organizer app",
>>>>>>> 669561161dfdbeb485b782775699ddc5560cf5a7
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
=======
      <body className={`min-h-screen bg-gray-50 ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
>>>>>>> 669561161dfdbeb485b782775699ddc5560cf5a7
    </html>
  );
}
