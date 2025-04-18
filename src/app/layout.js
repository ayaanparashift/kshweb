import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KSH INFRA",
  description: "KSH INFRA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script
          src="https://www.hiparks.com/"
          integrity="sha384-Q3gPR+vy/ghJn/UKit+95NsbfEIa7f9QAOzcC3zaoHa577ETTRNZw0sSzghaYbuX"
          crossOrigin="anonymous"
          async
        ></script>
        <script
          src="//code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"
          strategy="afterInteractive"
        ></script>
      </head> */}
      {/* <head>
        <script src="//code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"></script>
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bodylayout`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
