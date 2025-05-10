import Booking from "./Booking";

const hairdresserCards = [
 
  { imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", imageAlt: "Paris", cityName: "Paris" },
  { imageSrc: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", imageAlt: "Lyon", cityName: "Lyon" },
  { imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80", imageAlt: "Marseille", cityName: "Marseille" },
  { imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", imageAlt: "Paris", cityName: "Paris" },
  { imageSrc: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", imageAlt: "Lyon", cityName: "Lyon" },
  { imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80", imageAlt: "Marseille", cityName: "Marseille" },
];

export default function BeautyInstitute() {
  return (
    <Booking
      headline="Book an appointment with a Beauty Institute online"
      placeholder="Beauty Institute"
      cards={hairdresserCards}
      sectionTitle="Beauty Institute"
    />
  );
}