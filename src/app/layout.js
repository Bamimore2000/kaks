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
    "Kaks, Construction, Multiprofile, Kaks multiprofile, Water-Engineering, KAKS Construction, Kaks Services, Kaks",
  description:
    "KAKS serves as a leading emerging contractor in construction, water engineering, and hospitality from Lagos, Nigeria. We’re a team of fully-certified professionals tackling everything from complex large projects to smaller scale jobs.",
  keywords:
    "Kaks, construction, Multiprofile, Kaks multiprofile, water-engineering, KAKS construction, Kaks services, Kaks",
  author: "Kaks Group",

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
          type="image/png"
          href="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="KAKS Construction - Leading Multiprofile Contractor in Lagos, Nigeria"
        />
        <meta
          property="og:description"
          content="KAKS is a premier contractor specializing in construction, water engineering, and hospitality services in Lagos, Nigeria. Our fully-certified team expertly handles projects of all sizes."
        />
        <meta
          property="og:image"
          content="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
        />
        <meta property="og:url" content="https://kaksgroup.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KAKS Construction - Leading Multiprofile Contractor in Lagos, Nigeria"
        />
        <meta
          name="twitter:description"
          content="KAKS offers expert construction, water engineering, and hospitality services in Lagos, Nigeria."
        />
        <meta
          name="twitter:image"
          content="https://utfs.io/f/bVD2WD1fkUi1E11GecIMTFznvhK9Uo7Peywxt12G5qa3gjkl"
        />
        <meta name="twitter:url" content="https://kaksgroup.com" />

        {/* Additional Meta Tags */}
        <meta name="author" content="KAKS Group" />
        <meta
          name="keywords"
          content="KAKS, construction, multiprofile contractor, water engineering, Lagos construction, KAKS services, hospitality projects"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
