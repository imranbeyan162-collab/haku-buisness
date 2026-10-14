import React from 'react';
import { SERVICES } from '../data/companyData';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Layers, Eye, Disc3, FileCheck } from 'lucide-react';

export default function ServicesSection({ onOpenQuoteModal }) {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'grain-cleaning':
        return <Layers className="w-6 h-6 text-emerald-600" />;
      case 'color-sorting':
        return <Eye className="w-6 h-6 text-blue-600" />;
      case 'grain-polishing':
        return <Disc3 className="w-6 h-6 text-amber-600" />;
      case 'contract-cleaning':
        return <FileCheck className="w-6 h-6 text-teal-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Industrial Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Engineered for Purity, Consistency & Commercial Value
          </h2>
        </div>
        <p className="text-stone-600 text-sm sm:text-base max-w-md">
          From mechanical sifting and de-stoning to AI optical color sorting and polishing, we configure custom processing chains tailored to your contract requirements.
        </p>
      </div>

      {/* Services Grid (Organic rounded cards matching reference design) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="group bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 shadow-soft-float border border-stone-200/80 hover:border-emerald-300 transition-all duration-300 hover:shadow-card-hover flex flex-col justify-between"
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-emerald-50 transition-colors flex items-center justify-center border border-stone-100">
                  {getServiceIcon(service.id)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-700 group-hover:bg-emerald-100 group-hover:text-forest-800 transition-colors">
                  {service.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 mb-3 group-hover:text-forest-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {service.shortDesc}
              </p>

              {/* Bullet Features */}
              <div className="space-y-2.5 pt-4 border-t border-stone-100 mb-6">
                {service.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Ideal For Note */}
              <div className="p-3.5 rounded-2xl bg-stone-50 text-xs text-stone-600 mb-6">
                <span className="font-bold text-stone-800">Ideal For:</span> {service.idealFor}
              </div>
            </div>

            {/* Bottom Card CTA */}
            <button
              onClick={() => onOpenQuoteModal({ serviceId: service.id, serviceTitle: service.title })}
              className="w-full py-3 px-5 rounded-full bg-stone-100 hover:bg-[#23583c] text-stone-800 hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            >
              <span>Inquire About {service.title.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
