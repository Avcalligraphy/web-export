


interface ContainerClientSaysProps {
  stars: number;
  name: string;
  title: string;
  description: string;
  image: string;
  country: string;
}

export default function ContainerClientSays({ stars, name, title, description, image, country }: ContainerClientSaysProps) {
  return (
    <div className="flex flex-col h-full border-1 border-gray-200 rounded-xl p-12.5 bg-secondary">
        <div className="flex items-center gap-2.5">
            {Array.from({ length: stars }, (_, index) => (
                <img src="/assets/icons/ic_stars-2.png" alt="stars-2" className="w-10 h-10" />
            ))}
        </div>
        <h3 className="text-2xl font-semibold text-foreground font-urbanist mt-10">{title}</h3>
        <p className="text-lg text-foreground font-urbanist font-regular mt-3.5 flex-1">
        {description}
        </p>

        <div className="flex items-center gap-3 mt-10">
            <img src={image} alt={name} className="w-15 h-15" />
            <div className="flex flex-col">
                <h4 className="text-lg
                 font-medium text-foreground font-urbanist">{name}</h4>
                <p className="text-sm text-foreground/50 font-urbanist font-medium">
                {country}
                </p>
            </div>
        </div>

    </div>
  );
}