import React, { useState } from 'react';
import { Factory, Eye, CheckCircle2, Cpu, Gauge, Shield, ArrowUpRight, Sparkles } from 'lucide-react';

export default function MachinerySection({ onOpenQuoteModal }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      title: "Surge Silo & Bucket Elevator",
      position: "left-[14%] top-[35%]",
      tag: "Intake Station",
      desc: "Galvanized multi-tier surge hopper connected to high-volume vertical bucket elevator for continuous dust-controlled grain feeding."
    },
    {
      id: 2,
      title: "Automated Digital Bagging & Weighing",
      position: "left-[13%] bottom-[30%]",
      tag: "Export Packaging",
      desc: "Microcomputer-controlled gravimetric weighing unit and pneumatic bagging mouth for instant 25kg / 50kg standard packaging."
    },
    {
      id: 3,
      title: "High-Speed Optical Color Sorter",
      position: "right-[32%] top-[45%]",
      tag: "Optical AI Core",
      desc: "Multi-channel ultra-high-definition CCD optical cameras scanning falling grain curtains to eject discolored seeds with micro-second air pulses."
    },
    {
      id: 4,
      title: "Elevated Sifting & De-stoning Platforms",
      position: "right-[15%] top-[50%]",
      tag: "Vibratory Mechanical Cleaning",
      desc: "Heavy-duty dual vibratory screens and fluidized gravity separators stripping away soil clods, stones, chaff, and under-sized kernels."
    }
  ];

  return (
    <section id="machinery" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Factory className="w-3.5 h-3.5" />
          <span>Real Production Infrastructure</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
          Inside Our Adama 03 Industrial Processing Facility
        </h2>
        <p className="text-stone-600 text-base sm:text-lg">
          Equipped with commercial-grade cleaning, optical sorting, and automated packing technology designed for continuous 8–10 metric tons per hour throughput.
        </p>
      </div>

      {/* Main Machinery Interactive Visual Banner */}
      <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-stone-900 shadow-2xl border border-stone-200">
        
        {/* Real Factory Machinery Photo */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden group">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Grain Cleaning and Color Sorting Facility in Adama, Ethiopia"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent"></div>

          {/* Interactive Hotspots overlaid on the machinery */}
          {hotspots.map((hs) => (
            <div
              key={hs.id}
              className={`absolute ${hs.position} transform -translate-x-1/2 -translate-y-1/2 z-20`}
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                className="relative group/pin flex items-center justify-center"
                aria-label={hs.title}
              >
                <span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-forest-800 shadow-xl border-2 border-emerald-500 font-bold text-xs hover:scale-110 transition-transform">
                  {hs.id}
                </span>

                {/* Pulsing ring indicator */}
                <div className="hidden sm:block absolute left-full ml-2 px-3 py-1 bg-stone-900/90 backdrop-blur-md text-white text-[11px] font-semibold rounded-full whitespace-nowrap shadow-lg border border-white/20 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none">
                  {hs.title}
                </div>
              </button>
            </div>
          ))}

          {/* Bottom Overlay Info Strip */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> Commercial Active Plant
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                Continuous Multi-Stage Processing Line
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
                Located in Adama 03 Industry Zone. Designed for heavy commercial bulk intake from regional farms, unions, and ECX aggregation warehouses.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full bg-white text-stone-900 hover:bg-emerald-50 font-semibold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <span>Book Facility Visit</span>
              <ArrowUpRight className="w-4 h-4 text-forest-600" />
            </button>
          </div>
        </div>

        {/* Hotspot details card popup if active */}
        {activeHotspot && (
          <div className="p-5 sm:p-6 bg-stone-900/95 border-t border-stone-800 text-white animate-slide-up flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                {hotspots.find(h => h.id === activeHotspot)?.tag}
              </span>
              <h4 className="text-lg font-bold text-white">
                {hotspots.find(h => h.id === activeHotspot)?.title}
              </h4>
              <p className="text-sm text-stone-300 mt-1 max-w-3xl">
                {hotspots.find(h => h.id === activeHotspot)?.desc}
              </p>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-xs text-stone-300 rounded-full"
            >
              Close Details
            </button>
          </div>
        )}
      </div>

      {/* Machinery Technical Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-float border border-stone-200/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
            <Gauge className="w-6 h-6" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mb-1">8–10 MT / Hr</div>
          <h4 className="text-base font-bold text-stone-800 mb-2">High-Capacity Volume</h4>
          <p className="text-sm text-stone-600 leading-relaxed">
            Engineered to fulfill large export contracts without bottleneck. Capable of handling over 80–100 metric tons per 10-hour shift with stable purity.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-float border border-stone-200/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Cpu className="w-6 h-6" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mb-1">Optical CCD Sensors</div>
          <h4 className="text-base font-bold text-stone-800 mb-2">Micron-Precision Ejection</h4>
          <p className="text-sm text-stone-600 leading-relaxed">
            Eliminates discolored, diseased, insect-damaged, or foreign kernels that mechanical screens cannot detect. Produces immaculate uniform export lots.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-float border border-stone-200/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <div className="text-2xl font-extrabold text-stone-900 mb-1">&lt;0.2% Breakage</div>
          <h4 className="text-base font-bold text-stone-800 mb-2">Gentle Handling Guarantee</h4>
          <p className="text-sm text-stone-600 leading-relaxed">
            Low-impact elevators, rubber-lined transfer chutes, and calibrated air flow protect fragile pulses and coffee beans from cracking during high-speed sorting.
          </p>
        </div>
      </div>
    </section>
  );
}
