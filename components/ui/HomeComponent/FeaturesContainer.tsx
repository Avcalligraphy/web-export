

interface FeaturesContainerProps {
  icon?: string;
  title: string;
}

export default function FeaturesContainer({ icon, title }: FeaturesContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 bg-secondary rounded-xl border-1 border-gray-200">
      <img src={icon} alt={title} className="w-20 h-20" />
      <h3 className="text-xl font-medium text-foreground font-urbanist mt-5 text-center">{title}</h3>
    </div>
  );
}