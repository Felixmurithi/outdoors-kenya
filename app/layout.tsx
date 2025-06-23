import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

const myFont = localFont({
  src: "./fonts/Inter-Regular.woff2",
  // src: "./fonts/GeistVF.woff",
  display: "swap",
});

export const metadata = {
  title: {
    template: "Outdoors Kenya / %s",
    default: "Outdoors Kenya / Welcome",
  },
  description:
    "Everything about outdoor events in Kenya. Explore routes, trails, parks and playing fields. Create outdoors social groups. Plan outdoors events. Find event guides and trainers. ",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFont.className}`}>
      <body
        className={`grid grid-rows-[auto_1fr_auto] text-deepSeaweed-shades-500`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
