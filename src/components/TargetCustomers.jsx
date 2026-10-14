import React from 'react';
import { TARGET_CUSTOMERS, ADVANTAGES } from '../data/companyData';
import { Users, CheckCircle2, ShieldCheck, Zap, Sliders, MapPin, DollarSign, Cpu, ArrowRight } from 'lucide-react';

export default function TargetCustomers({ onOpenQuoteModal }) {
  const getAdvIcon = (name) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-rose-600" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-teal-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Target Customers */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Partners & Stakeholders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
            Who We Proudly Serve
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Whether fulfilling strict export contracts for Europe and Asia, or aggregating regional harvests for domestic supply, Haku is Ethiopia’s dependable grain processing partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_CUSTOMERS.map((cust, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-float border border-stone-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  {cust.role}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3">
                  {cust.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {cust.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-stone-100">
                  {cust.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="mt-6 pt-3 border-t border-stone-100 text-xs font-bold text-forest-800 hover:text-emerald-600 flex items-center justify-between group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Haku / Competitive Advantages */}
      <div className="bg-[#183a2b] rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-2">
            The Haku Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Why Ethiopian Agricultural Leaders Trust Haku Business Group
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Our combination of modern machinery, location in Adama, flexible contracting, and dedicated customer service delivers measurable commercial results.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-emerald-300">
                {getAdvIcon(adv.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
