import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Sparkles } from 'lucide-react';

export default function ProcessWorkflow({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>Standard Operating Procedure</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
          Our Systematic 6-Stage Processing Chain
        </h2>
        <p className="text-stone-600 text-base sm:text-lg">
          Every kilogram of commodity entrusted to Haku undergoes rigorous calibration to safeguard quality, minimize waste, and ensure international export compliance.
        </p>
      </div>

      {/* Workflow Steps Horizontal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORKFLOW_STEPS.map((step, idx) => (
          <div
            key={step.step}
            onClick={() => setActiveStep(idx)}
            className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 border flex flex-col justify-between ${
              activeStep === idx
                ? 'bg-gradient-to-br from-[#183a2b] to-[#122e20] text-white shadow-xl border-emerald-700/60 scale-[1.02]'
                : 'bg-white text-stone-900 shadow-soft-float border-stone-200/80 hover:border-emerald-300 hover:shadow-card-hover'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-2xl font-black ${activeStep === idx ? 'text-amber-300' : 'text-stone-300'}`}>
                  {step.step}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  activeStep === idx ? 'bg-white/10 text-emerald-300' : 'bg-stone-100 text-stone-500'
                }`}>
                  Stage {idx + 1} of 6
                </span>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold mb-3 ${activeStep === idx ? 'text-white' : 'text-stone-900'}`}>
                {step.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${activeStep === idx ? 'text-emerald-100/90' : 'text-stone-600'}`}>
                {step.desc}
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
              activeStep === idx ? 'border-white/10 text-emerald-300' : 'border-stone-100 text-forest-700'
            }`}>
              <span>Quality Control Active</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Process Guarantee Strip */}
      <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 shadow-soft-float border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Need a Custom Process Sequence?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              We can bypass or combine specific stations (e.g. skip polishing for raw seeds, or perform double optical sort passes).
            </p>
          </div>
        </div>

        <button
          onClick={onOpenQuoteModal}
          className="px-6 py-3 rounded-full bg-[#23583c] hover:bg-[#183e2b] text-white text-xs sm:text-sm font-semibold whitespace-nowrap shadow-md hover:shadow-lg transition-all"
        >
          Discuss Processing Requirements
        </button>
      </div>
    </section>
  );
}
