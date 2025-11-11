interface KeyFeaturesProps {

    description: string;
}

export default function KeyFeatures({  description }: KeyFeaturesProps) {
    return (
        <div className="border-l border-red-100  p-6 flex items-center justify-start gap-2.5 " style={{
            background: "linear-gradient(to right, var(--tw-color-primary, #1A1A1A) 0%, rgba(26,26,26,0) 100%)",
          }}>
                <img src="/assets/icons/ic_thunder.png" alt="thunder" className="w-6 h-6" />
                <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-regular">
                {description}
                </p>
                </div>
    )
}