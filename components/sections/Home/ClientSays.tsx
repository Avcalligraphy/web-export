import { ContainerClientSays } from "@/components/ui";


const clients = [
  {
    stars: 5,
    name: "Ahmed Al-Farouq",
    title: "Reliable Supplier, Excellent Packaging",
    description: "Our orders always arrive on time and in perfect condition. The briquettes burn evenly and last long — perfect for our market.",
    image: "/assets/images/client-says-1.png",
    country: "Riyadh, Saudi Arabia",
  },
  {
    stars: 5,
    name: "Igor Petrov",
    title: "Top Quality and Great Support",
    description: "We’ve tested many suppliers, but this company stands out for both product quality and responsive communication",
    image: "/assets/images/client-says-1.png",
    country: "Moscow, Russia",
  },
  {
    stars: 5,
    name: "Nguyen Thi Kim Anh",
    title: "Consistent Quality, Trusted Partner",
    description: "We’ve been importing from them for over two years now. The consistency and professionalism are unmatched",
    image: "/assets/images/client-says-1.png",
    country: "Ho Chi Minh City, Vietnam",
  },
];

export default function ClientSays() {
  return (
    <section className="container mx-auto px-4 mt-30">
      <div>
        <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-6 mb-4"
        />
        <h2 className="text-4xl font-semibold text-foreground font-urbanist mb-3.5">
          Client Says
        </h2>
        <p className="text-lg text-foreground/50 font-urbanist font-medium">
          Hear from our satisfied importers and distributors who trust our
          coconut charcoal for consistent quality and reliable export service.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {clients.map((item) => (
          <ContainerClientSays key={item.name} stars={item.stars} name={item.name} title={item.title} description={item.description} image={item.image} country={item.country} />
        ))}
      </div>
    </section>
  );
}
