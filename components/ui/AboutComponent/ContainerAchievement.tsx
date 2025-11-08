
interface ContainerAchievementProps {
    title: string;
    description: string
}
  
  export default function ContainerAchievement({ title, description }: ContainerAchievementProps) {
    return (
      <div className="bg-secondary rounded-xl p-2 md:p-2.5">
        <div className="flex flex-col h-full border border-gray-200 rounded-xl p-6 md:p-8 lg:p-10 bg-secondary">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground font-urbanist mt-4 md:mt-6 lg:mt-10">{title}</h3>
          <p className="text-sm md:text-base text-foreground/50 font-urbanist font-regular mt-2 md:mt-3 lg:mt-3.5 flex-1">
          {description}
          </p>
      </div>
      </div>
    );
  }