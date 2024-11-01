import localFont from "next/font/local";
import "./globals.css";

// Import local fonts
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

// Define metadata for the application
export const metadata = {
  title:
    "Kaks, construction, Multiprofile, Kaks multiprofile, water-engineering, KAKS construction, Kaks services, Kaks",
  description:
    "KAKS serves as a leading emerging contractor in construction, water engineering, and hospitality from Lagos, Nigeria. We’re a team of fully-certified professionals tackling everything from complex large projects to smaller scale jobs.",
  keywords:
    "Kaks, construction, Multiprofile, Kaks multiprofile, water-engineering, KAKS construction, Kaks services, Kaks",
  author: "Kaks Group",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff", // Optional: Set a theme color
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          sizes="any"
          type="image"
          href="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
        />{" "}
        {/* Optional: Add a favicon */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
