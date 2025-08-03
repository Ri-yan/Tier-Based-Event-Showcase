import { CalendarDays } from "lucide-react";

export const EventCard = ({ event }) => {
  const colorMap = {
    free: "bg-green-100 text-green-800 border-green-300",
    silver: "bg-slate-100 text-slate-700 border-slate-300",
    gold: "bg-yellow-100 text-yellow-800 border-yellow-300",
    platinum: "bg-purple-100 text-purple-800 border-purple-300",
  };

  const tierBadge = colorMap[event.tier] || "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition duration-300 overflow-hidden flex flex-col">
      <img
        src={event.image_url || "https://www.eventcombo.com/Images/ECImages/56f1b366-d196-4729-879f-02ed21b11a79.jpg"}
        alt={event.title}
        className="w-50 h-40 object-cover"
        style={{width:"10em"}}
      />

      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-sm text-gray-600">{event.description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <CalendarDays size={14} />
            {new Date(event.event_date).toLocaleDateString()}
          </p>

          <span
            className={`text-xs px-2 py-1 rounded-full border ${tierBadge}`}
            title={`Tier: ${event.tier}`}
          >
            {event.tier.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
