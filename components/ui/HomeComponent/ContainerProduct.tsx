import Image from "next/image";
import { Button, Tag } from "..";

interface ContainerProductProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  underline?: boolean;
  underlineText?: string;
}

export default function ContainerProduct({ title, description, image, tag, underline = false, underlineText = "" }: ContainerProductProps) {
  return (
    <div className="h-full flex flex-col border-1 border-gray-200 rounded-xl p-7.5 bg-secondary">
      <Image src={`/assets/images/${image}.png`} alt={title} width={428} height={250} className="mb-4" />
      <Tag>{tag}</Tag>
      <h3 className="text-2xl font-bold text-foreground font-urbanist mt-1">{title}</h3>
      <p className="text-base text-foreground/50 font-urbanist font-regular mt-3.5 flex-grow">
      {description} {underline && <span className="text-foreground font-urbanist font-medium underline">{underlineText}</span>}
      </p>
      <Button variant="red" size="md" className="w-[202px] rounded-full mt-6">
        Request a Quote
      </Button>
    </div>
  );
}