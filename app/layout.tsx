import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "Tier Event Showcase",
  description: "Tier-based event filtering app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-800 min-h-screen">
          <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="text-xl font-semibold text-indigo-600 hover:text-indigo-700 transition">
                🎟️ Tier Events
              </Link>

              <div className="flex items-center gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="px-4 py-2 text-sm border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <Link
                    href="/events"
                    className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition"
                  >
                    View Events
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
