import { ElementType } from "react";
interface SoundCardProps {
  Icon: ElementType;
  title: string;
}
export default function SoundCard({ Icon, title }: SoundCardProps) {
  return (
    <div className="relative flex flex-col items-center bg-[rgba(26,35,46,0.8)] w-full py-[50px] rounded-[12px] shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:-translate-y-1 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[var(--accent-color)] before:to-[#4a90e2] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
        <Icon className="w-12 h-12 text-[var(--accent-color)]" />
      <p className=" text-lg font-bold mt-4">{title}</p>
    </div>
  );
}
