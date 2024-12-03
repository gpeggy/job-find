import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Cta from "@/components/home/Cta";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Job Finder",
  description: "Εύρεση εργασίας σε Ελλάδα και Εξωτερικό. Νέες θέσεις εργασίας και αγγελίες καθημερινά. Καριέρα, απασχόληση και σταδιοδρομία.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
     </html>
  );
}
