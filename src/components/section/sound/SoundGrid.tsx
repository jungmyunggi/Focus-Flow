import { FlameKindling } from "lucide-react";
import { LucideBug } from "lucide-react";
import { CloudRainWind } from "lucide-react";
import { Waves } from "lucide-react";
import SoundCard from "./SoundCard";

export default function SoundGrid() {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[30px] justify-items-center w-full ">
        <SoundCard Icon={FlameKindling} title="모닥불소리" />
        <SoundCard Icon={LucideBug} title="밤벌레소리" />
        <SoundCard Icon={CloudRainWind} title="빗소리" />
        <SoundCard Icon={Waves} title="시냇물소리" />
      </div>
    </section>
  );
}
