// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Matches everything except static files
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
