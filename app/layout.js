import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeWar 2.0 | Mechi Mavericks",
    description:
    "CodeWar 2.0 is a competitive coding event organized by Mechi Mavericks in collaboration with the BCA Association of Mechi Multiple Campus. It provides a platform for students to test their problem-solving skills, collaborate with peers, and enhance their coding expertise.",
  image: "https://i.ibb.co/vx8ncYCq/img.png", // Replace with the actual image URL for CodeWar 1.0
  url: "https://codewar.mechimavericks.tech/",
  type: "website",
  openGraph: {
    type: "website",
    url: "https://codewar.mechimavericks.tech/",
    title: "CodeWar 2.0",
    description:
      "CodeWar 2.0 is a competitive coding event organized by Mechi Mavericks in collaboration with the BCA Association of Mechi Multiple Campus. It provides a platform for students to test their problem-solving skills, collaborate with peers, and enhance their coding expertise.",
    images: ["https://i.ibb.co/vx8ncYCq/img.png"], // Replace with the actual image URL for CodeWar 2.0
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
