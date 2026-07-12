import {
  Film,
  Clapperboard,
  Headphones,
  Speaker,
  Building2,
} from "lucide-react";
import { ReactNode } from "react";

type WhyCardProps = {
  number: string;
  bg: string;
  title: string;
  description: string;
  icon: ReactNode;
};


export default function WhyCard({
  number,
  bg,
  title,
  description,
  icon,
}: WhyCardProps) {
  return (

<div
  className="
    group
    relative
    h-[680px]
    w-[490px]
    rounded-[42px]
    overflow-hidden

    border border-white/[0.035]

    bg-gradient-to-br
    from-[#242424]
    via-[#181818]
    to-[#101010]

    shadow-[0_45px_130px_rgba(0,0,0,.82)]

    transition-all
    duration-700
  "
>
    
<div
  className="
    absolute
    -top-32
    left-1/2
    h-[420px]
    w-[420px]
    -translate-x-1/2
    rounded-full
    bg-gradient-to-r
    from-white/[0.03]
    via-zinc-400/[0.04]
    to-white/[0.03]
    blur-[120px]
  "
/>


      {/* Background Number */}

      <h1 className="absolute top-10 right-10 text-[180px]
font-black
text-white/[0.012]">
        {number}
      </h1>

      {/* Background Word */}

        <h2 className="
        absolute
        bottom-10
        left-12
        text-7xl
        font-black
        tracking-[0.25em]
        text-white/[0.01]
        ">
        {bg}
      </h2>

        <div
        className="
        relative
        z-10
        flex
        h-full
        flex-col
        justify-center
        px-16
        py-16
        "
        >
     
     <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03]">
  {icon}
</div>
        
        <p
        className="
        text-[12px]
        uppercase
        tracking-[0.45em]
        font-medium
        text-zinc-500
        "
        >

          WHY PSK MIX STUDIOS
        </p>

        <div className="mb-10 h-px w-18 bg-gradient-to-r from-zinc-500 to-transparent" />
        <h2
        className="
        mt-10
        max-w-[360px]
        text-[52px]
        font-medium
        leading-[1.02]
        tracking-[-0.03em]
        text-white
        "
        >

          {title}
        </h2>

        
        <p
        className="
        mt-12
        max-w-[340px]
        text-[18px]
        leading-8
        font-normal
        text-zinc-500
        "
        >

          {description}
        </p>

      </div>
    </div>
  );
}
