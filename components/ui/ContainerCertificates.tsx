interface ContainerCertificatesProps {
  icon: string;
  title: string;
  description: string;
}

export default function ContainerCertificates({ icon, title, description }: ContainerCertificatesProps) {
  return (
    <div className="flex flex-col border-1 border-gray-200 rounded-xl h-full bg-secondary p-10 items-center justify-center">
        <img src={icon} alt={title} className="w-18.5 h-18.5 mb-5" />
      <h3 className="text-2xl font-semibold text-foreground font-urbanist mb-5">{title}</h3>
      <p className="text-base text-foreground/50 font-urbanist font-regular flex-1 text-center ">
      {description}
      </p>
    </div>
  );
}