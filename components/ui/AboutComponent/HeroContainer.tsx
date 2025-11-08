

interface HeroContainerProps {
  title: string;
  description: string;
}

export default function HeroContainer({ title, description }: HeroContainerProps) {
  return (
    <article className="flex flex-col p-4 md:p-5 lg:p-6 border border-gray-200 bg-secondary rounded-xl">
      <h2 className="font-semibold font-urbanist text-2xl sm:text-3xl md:text-4xl text-foreground">{title}</h2>
      <p className="font-urbanist font-medium text-sm sm:text-base mt-1 md:mt-2 text-foreground/50">{description}</p>
    </article>
  );
}