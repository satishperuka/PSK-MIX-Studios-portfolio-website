
import { Cpu } from "lucide-react";


export default function EquipmentCard() {
  return (
<div
  className="
    group
    relative
    h-[720px]
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
    h-[680px]
    w-[490px]
    -translate-x-1/2
    rounded-full
    bg-gradient-to-r
    from-white/[0.03]
    via-zinc-400/[0.04]
    to-white/[0.03]
    blur-[120px]
  "
/>
      <h1 className="absolute top-10 right-10 text-[180px] font-black text-white/[0.012]">
        02
      </h1>

      <h2 className="
      absolute
      bottom-10
      left-12
      text-7xl
      font-black
      tracking-[0.25em]
      text-white/[0.01]
      ">
        EQUIPMENT
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
  <Cpu size={30} strokeWidth={1.5} className="text-zinc-300" />
</div>

<div className="mb-10 h-px w-20 bg-gradient-to-r from-zinc-500 to-transparent" />

        <h2
          className="
          max-w-[360px]
          text-[52px]
          font-medium
          leading-[1.02]
          tracking-[-0.03em]
          text-white
          "
        >
          World-Class Studio Equipment
        </h2>

        <p
          className="
          mt-10
          max-w-[340px]
          text-[18px]
          leading-8
          text-zinc-400
          "
        >
          Built around industry-standard cinema and post-production hardware trusted for feature films, OTT productions and professional audio mixing.
        </p>

        <div className="mt-12 space-y-8 text-[17px] text-zinc-300">

          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              Professional Audio
            </h3>
            <p>Avid Pro Tools | MTRX Studio</p>
            <p>HD Native Thunderbolt</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Monitoring
            </h3>
            <p>Genelec 8000 Series</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Cinema Audio
            </h3>
            <p>QSC SR Series Speakers</p>
            <p>QSC SB Series Subwoofers</p>
            <p>QSC Power Amplifiers</p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Projection
            </h3>
            <p>Panasonic PT-VZ580</p>
          </div>

        </div>

      </div>
    </div>
  );
}
