import React, { useState } from 'react';
import { Sparkles, Check, X, ShieldAlert, Award, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedGrain, setSelectedGrain] = useState('sesame');

  const grainPresets = {
    sesame: {
      name: "Sesame Seeds",
      origin: "Humera & Wollega Harvest",
      before: {
        title: "Raw Farmgate Harvest",
        impurities: "3.2% - 5.5%",
        colorDefects: "12% discolored / black seeds",
        presence: "Dust, sandy chaff, weed seeds, pod fragments",
        grade: "Uncleaned Local Grade",
        marketValue: "Discounted bulk price"
      },
      after: {
        title: "Haku Color-Sorted & Polished",
        impurities: "< 0.15% (Export Spec)",
        colorDefects: "99.8% uniform white / natural luster",
        presence: "Zero dust, zero stones, micro-aspirated",
        grade: "Grade 1 ECX & Export Ready",
        marketValue: "+28% Export Price Premium"
      },
      bgBefore: "from-amber-900/20 via-stone-800 to-stone-900",
      bgAfter: "from-emerald-950/40 via-stone-900 to-stone-950",
      textureBefore: "🫘 🍂 🪨 🌾",
      textureAfter: "✨ ⚪ ⚪ ⚪ ✨"
    },
    coffee: {
      name: "Coffee Beans (Green Arabica)",
      origin: "Oromia & Southern Highlands",
      before: {
        title: "Bulk Green Lots",
        impurities: "2.8% foreign material",
        colorDefects: "Black beans, sour beans, insect bores",
        presence: "Parchment fragments, twigs, uneven moisture",
        grade: "Commercial Grade 4/5",
        marketValue: "Subject to buyer rejection penalty"
      },
      after: {
        title: "Haku Precision Optical Sort",
        impurities: "< 0.05% foreign matter",
        colorDefects: "Zero defect beans ejected by optical CCD",
        presence: "Uniform screen size, polished bean surface",
        grade: "Specialty / Grade 1 Export",
        marketValue: "+35% Premium Export Margin"
      },
      bgBefore: "from-amber-950/30 via-stone-900 to-stone-900",
      bgAfter: "from-emerald-950/40 via-stone-900 to-stone-950",
      textureBefore: "☕ 🍂 🪨 🟤",
      textureAfter: "✨ 🟢 🟢 🟢 ✨"
    },
    soybeans: {
      name: "Soybeans & Pulses",
      origin: "Commercial Farmlands",
      before: {
        title: "Field Harvested Pods & Split Grains",
        impurities: "4.5% soil dust & gravel",
        colorDefects: "Mottled, green-immature, split seeds",
        presence: "Stones, pod husks, dirt clods",
        grade: "Industrial Grade",
        marketValue: "High processing waste penalty"
      },
      after: {
        title: "Haku Mechanical Cleaned & Polished",
        impurities: "< 0.2% foreign matter",
        colorDefects: "Cleaned, polished, golden spherical seeds",
        presence: "Zero dirt, smooth hull, calibrated size",
        grade: "Certified Export Pulse Standard",
        marketValue: "+25% Commercial Lift"
      },
      bgBefore: "from-stone-800 via-amber-950/20 to-stone-900",
      bgAfter: "from-emerald-950/40 via-stone-900 to-stone-950",
      textureBefore: "🫘 🌾 🪨 🍂",
      textureAfter: "✨ 🟡 🟡 🟡 ✨"
    }
  };

  const current = grainPresets[selectedGrain];

  return (
    <section id="comparison" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Quality Transformation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
          The Haku Purity Difference: Before & After
        </h2>
        <p className="text-stone-600 text-base sm:text-lg">
          Drag the interactive slider to see how our mechanical sifting, optical color sorting, and friction polishing transform raw agricultural lots into export-ready commodities.
        </p>

        {/* Commodity Switcher Pills */}
        <div className="inline-flex p-1.5 bg-stone-200/80 rounded-full mt-6 gap-1">
          {Object.keys(grainPresets).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedGrain(key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedGrain === key
                  ? 'bg-white text-forest-800 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {grainPresets[key].name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Visual Comparison Container */}
      <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-stone-950 text-white shadow-2xl border border-stone-800">
        
        {/* Comparison Display Stage */}
        <div className="relative h-[480px] sm:h-[460px] select-none overflow-hidden">
          
          {/* Right Side: Cleaned / Haku Sorted (Export Grade) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#122e20] to-[#0a1811] flex flex-col justify-between p-6 sm:p-12">
            <div className="flex justify-end items-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg">
                <Award className="w-4 h-4" /> AFTER: Haku Optical Cleaned
              </span>
            </div>

            {/* Visual simulation representation */}
            <div className="self-end text-right max-w-sm z-10">
              <div className="text-4xl sm:text-6xl mb-4 tracking-widest opacity-90 drop-shadow-lg">
                {current.textureAfter}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-300 mb-2">
                {current.after.grade}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm">
                Optical CCD cameras have expelled all discolored, moldy, and defective grains. Friction polishing has eliminated micro-dust.
              </p>
              
              <div className="mt-4 pt-4 border-t border-emerald-800/40 grid grid-cols-2 gap-3 text-left">
                <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-700/40">
                  <div className="text-[11px] text-emerald-300 font-semibold uppercase">Purity Level</div>
                  <div className="text-lg font-bold text-white">{current.after.impurities}</div>
                </div>
                <div className="bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-700/40">
                  <div className="text-[11px] text-emerald-300 font-semibold uppercase">Market Uplift</div>
                  <div className="text-lg font-bold text-amber-300">{current.after.marketValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side: Raw Harvest (Clipped by slider position) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex flex-col justify-between p-6 sm:p-12 border-r-2 border-emerald-400"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="flex justify-start items-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold shadow-lg">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> BEFORE: Raw Farmgate Lot
              </span>
            </div>

            {/* Left simulation representation */}
            <div className="max-w-sm z-10">
              <div className="text-4xl sm:text-6xl mb-4 tracking-widest opacity-70">
                {current.textureBefore}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-2">
                {current.before.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Raw agricultural harvest containing sand, chaff, split seeds, and dark off-color grains that fail export lab inspections.
              </p>

              <div className="mt-4 pt-4 border-t border-stone-700 grid grid-cols-2 gap-3">
                <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700">
                  <div className="text-[11px] text-stone-400 font-semibold uppercase">Impurity Level</div>
                  <div className="text-lg font-bold text-rose-400">{current.before.impurities}</div>
                </div>
                <div className="bg-stone-800/80 p-2.5 rounded-xl border border-stone-700">
                  <div className="text-[11px] text-stone-400 font-semibold uppercase">Commercial Grade</div>
                  <div className="text-sm font-bold text-stone-300">{current.before.grade}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable Vertical Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-emerald-400 pointer-events-none transform -translate-x-1/2 z-30 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-forest-900 shadow-2xl flex items-center justify-center font-bold text-xs border-2 border-emerald-500">
              <ArrowLeftRight className="w-4 h-4 text-forest-700" />
            </div>
          </div>

          {/* Native Range Slider Element overlay */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            aria-label="Grain purity comparison slider"
          />
        </div>

        {/* Bottom Control Bar */}
        <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-emerald-400" />
            <span>Slide horizontally to inspect grain transformation quality</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span> Raw Harvest
            </span>
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Haku Finished Export Lot
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
