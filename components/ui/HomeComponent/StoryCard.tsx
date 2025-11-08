interface StoryCardProps {

  icon: string;
  title: string;
  description: string;
}
export default function StoryCard({ icon, title, description }: StoryCardProps) {
  return (
    <div
    className="flex flex-col"
  >
    <div className="mb-4 flex items-center gap-4">
        <img 
          src={icon} 
          alt={title.toLowerCase()} 
          className="w-18 h-18 object-contain"
        />
           <h3 className="text-2xl font-semibold text-foreground font-urbanist mb-3">
      {title}
    </h3>
    </div>
 
    <p className="text-sm text-foreground/50 font-urbanist leading-relaxed">
      {description}
    </p>
  </div>
  )
}