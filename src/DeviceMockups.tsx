/* ─── 3D Device Mockups (iPhone + MacBook) ─── */

function MacScreen() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}horizontal.jpg`}
      alt="Vista desktop de la plataforma"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
  );
}

function PhoneScreen() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}vertical.jpg`}
      alt="Vista mobile de la plataforma"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
  );
}

export default function DeviceMockups() {
  return (
    <div className="relative mx-auto mt-10 md:mt-14 max-w-5xl px-4">
      <div
        className="flex items-end justify-center gap-0"
        style={{ perspective: "1800px" }}
      >
        {/* ── MacBook ── */}
        <div
          className="hidden md:block device-float-mac relative z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Screen */}
          <div className="relative">
            <div className="relative w-96 lg:w-[520px] aspect-16/10 bg-black rounded-t-xl overflow-hidden border-8 border-t-18 border-slate-800 shadow-2xl">
              <MacScreen />
            </div>
            {/* Camera */}
            <div className="absolute top-1.25 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 ring-1 ring-slate-600" />
          </div>
          {/* Hinge */}
          <div
            className="h-2.5 bg-linear-to-b from-slate-700 to-slate-600"
            style={{ clipPath: "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)" }}
          />
          {/* Base */}
          <div className="h-1.25 bg-slate-500/80 rounded-b-lg -mx-2" />
        </div>

        {/* ── iPhone ── */}
        <div
          className="device-float-phone relative z-20 md:-ml-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative w-52 sm:w-56 md:w-52 lg:w-60 aspect-9/19.5 bg-slate-900 rounded-[36px] overflow-hidden border-[5px] border-slate-700 shadow-[0_0_80px_rgba(99,102,241,0.25)]">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-17.5 h-5.5 bg-black rounded-full z-20" />
            {/* Screen */}
            <PhoneScreen />
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Shadow beneath devices */}
      <div className="mx-auto mt-6 h-4 w-3/5 max-w-sm rounded-full bg-black/15 blur-xl" />
    </div>
  );
}
