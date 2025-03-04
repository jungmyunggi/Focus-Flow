import { Play } from "lucide-react";
import { Timer } from "lucide-react";
import { Share2 } from "lucide-react";
import { LucideDices } from "lucide-react";
export default function ControlPanel() {
  return (
    <section className="flex justify-center w-full bg-[#1A232EB3] shadow-[0_10px_30px_rgba(0,0,0,0.2)] p-[30px] rounded-[16px] text-[var(--text-color)]">
      <div className="flex w-full justify-between">
        <div className="flex gap-[20px] items-center">
          <button className="border w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gradient-to-br from-[var(--accent-color)] to-[ #4a90e2] border-none hover:scale-105 transition-transform duration-300 ease-in-out">
            <Play size={24} />
          </button>
          <span className="text-[1.8rem] ">00:00</span>
        </div>
        <div className="flex gap-[15px]">
          <button className="flex gap-[8px] items-center bg-[#FFFFFF1A] border border-none px-[10px] py-[15px] rounded-[8px] transition-colors duration-300 ease-in-out hover:bg-[#FFFFFF2A]">
            <Timer size={18} />
            timer
          </button>
          <button className="flex gap-[8px] items-center bg-[#FFFFFF1A] border border-none px-[10px] py-[15px] rounded-[8px] transition-colors duration-300 ease-in-out hover:bg-[#FFFFFF2A]">
            <LucideDices size={18} />
            random
          </button>
          <button className="flex gap-[8px] items-center bg-[#FFFFFF1A] border border-none px-[10px] py-[15px] rounded-[8px] transition-colors duration-300 ease-in-out hover:bg-[#FFFFFF2A]">
            <Share2 size={18} />
            share
          </button>
        </div>
      </div>
    </section>
  );
}
