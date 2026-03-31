/* ─── 3D Device Mockups (iPhone + MacBook) ─── */

function MacScreen() {
  return (
    <div className="w-full h-full bg-linear-to-br from-primary-950 via-primary-900 to-accent-600 flex flex-col p-4 gap-2">
      {/* Fake nav */}
      <div className="flex items-center justify-between">
        <div className="w-16 h-2.5 rounded bg-white/15" />
        <div className="flex gap-2">
          <div className="w-10 h-2 rounded bg-white/10" />
          <div className="w-10 h-2 rounded bg-white/10" />
          <div className="w-10 h-2 rounded bg-white/10" />
        </div>
        <div className="w-14 h-5 rounded-full bg-white/15" />
      </div>
      {/* Fake hero */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="w-28 h-3 rounded bg-white/15" />
        <div className="w-40 h-2 rounded bg-white/8" />
        <div className="flex gap-2 mt-2">
          <div className="w-16 h-5 rounded-full bg-white/15" />
          <div className="w-16 h-5 rounded-full bg-white/8 border border-white/10" />
        </div>
      </div>
      {/* Fake cards grid */}
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-white/5 flex flex-col items-center justify-center gap-1 p-1"
          >
            <div className="w-4 h-4 rounded bg-white/8" />
            <div className="w-8 h-1.5 rounded bg-white/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="w-full h-full bg-linear-to-br from-primary-950 via-primary-900 to-accent-600 flex flex-col p-3 pt-8 gap-2.5">
      {/* Fake search bar */}
      <div className="w-full h-6 rounded-lg bg-white/10 flex items-center px-2">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="ml-2 w-12 h-1.5 rounded bg-white/10" />
      </div>
      {/* Fake featured event card */}
      <div className="w-full aspect-2/1 rounded-xl bg-white/8 flex flex-col items-start justify-end p-2.5">
        <div className="w-14 h-1.5 rounded bg-white/20" />
        <div className="w-20 h-1.5 rounded bg-white/10 mt-1" />
      </div>
      {/* Fake section title */}
      <div className="w-16 h-2 rounded bg-white/15 mt-1" />
      {/* Fake event list */}
      <div className="flex flex-col gap-2 flex-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-white/5 p-2"
          >
            <div className="w-10 h-10 rounded-lg bg-white/8 shrink-0" />
            <div className="flex flex-col gap-1 flex-1">
              <div className="w-16 h-1.5 rounded bg-white/12" />
              <div className="w-24 h-1.5 rounded bg-white/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
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
            <div className="w-96 lg:w-[520px] aspect-16/10 bg-black rounded-t-xl overflow-hidden border-8 border-t-18 border-slate-800 shadow-2xl">
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
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-17.5 h-5.5 bg-black rounded-full z-10" />
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
