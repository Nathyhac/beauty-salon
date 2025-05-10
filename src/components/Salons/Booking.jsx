import CityCard from "../card";

export default function Booking({ headline, placeholder, cards, sectionTitle = "" }) {
  return (
    <div className="bg-[#fafafa] min-h-screen pt-4 pb-12 mt-12">
      <div className="flex flex-col gap-20">
        {/* Header */}
        <div className="flex justify-center">
          <h1 className="text-5xl text-center text-gray-850">{headline}</h1>
        </div>
        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-lg py-2 px-4 flex flex-row items-center w-[900px] max-w-full">
            <div className="w-full md:w-5/12 focus-within:bg-gray-100 focus-within:rounded-lg focus-within:font-semibold focus-within:border focus-within:border-gray-900 transition px-2 py-1">
              <label
                htmlFor="service"
                className="block text-base text-gray-500 mb-1 transition"
              >
                What are you looking for ?
              </label>
              <input
                type="text"
                id="service"
                className="w-full p-0 border-0 focus:ring-0 focus:outline-none text-gray-900 text-lg bg-transparent font-medium"
                placeholder={placeholder}
                defaultValue={placeholder}
              />
            </div>
            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4 h-12"></div>
            <div className="w-full md:w-5/12 focus-within:bg-gray-100 focus-within:rounded-lg focus-within:font-semibold focus-within:border focus-within:border-gray-900 transition px-2 py-2">
              <label
                htmlFor="location"
                className="block text-base text-gray-500 mb-1 transition"
              >
                Or
              </label>
              <input
                type="text"
                id="location"
                className="w-full p-0 border-0 focus:ring-0 focus:outline-none text-gray-900 text-lg bg-transparent font-medium"
                placeholder="Address, city..."
              />
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold ml-4 whitespace-nowrap">
              To research
            </button>
          </div>
        </div>
      </div>
      {/* Full-width, full-height card section with spacing above and inside */}
      <div className="w-full min-h-screen bg-white rounded-xl shadow-lg flex flex-col py-8 mt-12">
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="text-xl font-medium text-gray-700 mb-8">{sectionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
            {cards.map((card, idx) => (
              <CityCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 