import { useState } from "react";

const stats = [
  {
    value: "+ 50%",
    description: "frequency of appointments made online",
  },
  {
    value: "4x",
    description: "fewer forgetfulness with SMS appointment reminders",
  },
  {
    value: "50%",
    description: "online appointments made outside of opening hours",
  },
  {
    value: "+50,000",
    description: "Salons & institutes",
  },
  {
    value: "5 appointments",
    description: "Taken every second",
  },
  {
    value: "> 5 billion €",
    description: "Appointments sold",
  },
];

export default function StatsCard() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-5xl font-semibold text-center mb-8">
        Discover online appointment booking!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 border rounded-xl overflow-hidden">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`relative group flex flex-col justify-center items-start p-8 min-h-[180px] border-b md:border-b-0 md:border-r last:border-r-0 transition-all duration-200
              ${hovered === idx ? "z-10 bg-white shadow-2xl border-t-4 border-t-purple-500" : ""}
              ${idx >= 3 ? "md:border-t" : ""}
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="text-3xl font-semibold mb-2">{stat.value}</div>
            <div className="text-gray-500 text-lg">{stat.description}</div>
            {hovered === idx && (
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition">
                Add your establishment
              </button>
            )}
            {/* Purple top border indicator */}
            {hovered === idx && (
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 rounded-t-xl" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
