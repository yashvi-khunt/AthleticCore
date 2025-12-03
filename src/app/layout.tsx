import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { themeVars } from "@/lib/theme";

export const metadata = {
  title: "Fitness Coaching",
  description: "Clone of Wix fitness template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={themeVars}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
