export default function CityCard({ imageSrc, imageAlt, cityName }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-gray-700">Discover our {cityName} hairdressers</p>
        </div>
      </div>
    )
  }
  