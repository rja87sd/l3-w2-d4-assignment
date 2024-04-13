import "./globals.css";

export const metadata = {
  title: "L3 W2 D4 Assignment",
  description: "Passing Props",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
