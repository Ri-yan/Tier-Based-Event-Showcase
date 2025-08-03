import { auth, currentUser } from "@clerk/nextjs/server";
import { EventCard } from "../components/EventCard";
import { supabase } from "../../lib/supabase";

const tierRank = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
};

const getAllowedTiers = (tier: string): string[] => {
  const current = tierRank[tier] ?? 0;
  return Object.keys(tierRank).filter((t) => tierRank[t] <= current);
};

export default async function EventsPage() {
  const { userId }:any = auth();
  const user = await currentUser();
  const tier = user?.publicMetadata?.tier || "free";
  const allowedTiers = getAllowedTiers(tier);

  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .in("tier", allowedTiers)
    .order("event_date");

  return (
    <main className="min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-4">Events for {tier.toUpperCase()} Tier</h1>

      {error && (
        <div className="p-4 bg-red-100 text-red-800 rounded mb-4">
          Error loading events: {error.message}
        </div>
      )}

      {!events?.length ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg">No events available for your tier.</p>
          <p className="mt-2 text-sm">
            Consider upgrading your tier in your Clerk profile to unlock more events.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
