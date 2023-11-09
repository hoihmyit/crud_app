"use client";

import { Inter } from "next/font/google";
// import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/app.header";
import Footer from "../component/app.footer";
import Container from "react-bootstrap/Container";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container style={{ minHeight: "calc(100vh - 94px)" }}>
          {children}
        </Container>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
