import Image from "next/image";
import Tag from "../Tag";


interface HeroCardProductProps {
  image: string;
  title: string;
  tag: string;
}
export default function HeroCardProduct({ image, title, tag }: HeroCardProductProps) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-xl p-4 bg-secondary">
      <Image src={`/assets/images/${image}.png`} alt={title} width={213} height={91} className="mb-4" />
      <Tag >{tag}</Tag>
      <h3 className="text-base font-regular text-foreground font-urbanist mt-3">{title}</h3>
      
    </div>
  );
}