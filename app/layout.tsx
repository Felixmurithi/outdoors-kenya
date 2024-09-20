import "./globals.css";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

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
    <html lang="en">
      <body
        className={`grid grid-rows-[max-content_1fr_auto] w-[90%] mx-auto md:mx-14 mobile:mx-7 text-deepSeaweed-shades-500`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}