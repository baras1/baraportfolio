import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bara&apos;s Professional Portfolio",
  description: "Welcome to Bara&apos;s professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col">
          <header className="w-full p-6 bg-gray-800 text-white flex justify-between items-center">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="/"
                    className="px-4 py-2 rounded-lg transition-all hover:bg-gray-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/experience"
                    className="px-4 py-2 rounded-lg transition-all hover:bg-gray-600"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="px-4 py-2 rounded-lg transition-all hover:bg-gray-600"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="px-4 py-2 rounded-lg transition-all hover:bg-gray-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/bara-salim-454250239/">
                <img src="/linkedin.png" alt="LinkedIn" width={30} />
              </a>
              <a href="https://github.com/baras1">
                <img src="/github.png" alt="GitHub" width={30} />
              </a>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="py-4 bg-gray-800 text-white text-center">
            <p>© 2024 Bara&apos;s Portfolio</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
