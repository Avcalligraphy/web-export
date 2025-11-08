interface ContainerPlaceOnOrderProps {
  step: string;
  title: string;
  description: string;
}

export default function ContainerPlaceOnOrder({
  step,
  title,
  description,
}: ContainerPlaceOnOrderProps) {
  return (
    <div className="w-full max-w-md mx-auto">
    {/* Step Header with red accent line */}
    <div className="mb-4 md:mb-6 relative">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-100 to-transparent"></div>
      <span className="text-white text-sm md:text-base lg:text-lg font-light pl-4 md:pl-6 block">{step}</span>
    </div>

    {/* Main Container with gradient border */}
    <div className="relative rounded-lg p-px bg-linear-to-br from-red-900/50 via-gray-800/30 to-transparent">
      <div className="bg-primary rounded-lg p-6 md:p-8 lg:p-10 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-red-950/20 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-foreground text-xl md:text-2xl font-semibold mb-3 md:mb-4 lg:mb-5">
            {title}
          </h3>
          
          <div className="space-y-3 md:space-y-4 lg:space-y-5 text-foreground/50 font-urbanist font-regular text-xs md:text-sm leading-relaxed">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
