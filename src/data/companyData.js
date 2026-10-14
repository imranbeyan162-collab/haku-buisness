export const COMPANY_INFO = {
  name: "Haku Business Group",
  tagline: "Professional Grain Cleaning, Color Sorting & Processing Services",
  slogan: "Quality Processing, Reliable Service, Better Market Opportunities.",
  location: "Adama, Oromia Region, Ethiopia — 03 Industry Zone",
  email: "hakubusinessgroup@gmail.com",
  phones: [
    { number: "+251911613845", display: "+251 911 613 845", name: "Sales & Operations" },
    { number: "+251905606162", display: "+251 905 606 162", name: "Contract & Inquiries" }
  ],
  capacity: "8–10 Metric Tons / Hour",
  operatingHours: "Monday – Saturday: 8:00 AM – 6:00 PM (24/7 bulk shift upon request)"
};

export const COMMODITIES = [
  { id: "sesame", name: "Sesame Seeds (Humera & Wollega)", defaultPurity: "99.8%", icon: "🌱", category: "Oilseeds" },
  { id: "coffee", name: "Coffee Beans (Arabica & Specialty)", defaultPurity: "99.9%", icon: "☕", category: "Beverages" },
  { id: "teff", name: "Teff (White, Magna & Mixed)", defaultPurity: "99.5%", icon: "🌾", category: "Cereals" },
  { id: "soybeans", name: "Soybeans (Non-GMO Export Grade)", defaultPurity: "99.7%", icon: "🫘", category: "Pulses" },
  { id: "chickpeas", name: "Chickpeas (Desi & Kabuli)", defaultPurity: "99.6%", icon: "🥣", category: "Pulses" },
  { id: "red_beans", name: "Red Kidney Beans & Haricot", defaultPurity: "99.7%", icon: "🫘", category: "Pulses" },
  { id: "lentils", name: "Lentils & Split Pulses", defaultPurity: "99.6%", icon: "🍲", category: "Pulses" },
  { id: "maize", name: "Maize & Corn Grains", defaultPurity: "99.4%", icon: "🌽", category: "Cereals" },
];

export const SERVICES = [
  {
    id: "grain-cleaning",
    title: "Grain & Pulse Mechanical Cleaning",
    badge: "Core Processing",
    shortDesc: "Comprehensive removal of dust, chaff, straw, and foreign materials through multi-stage screen sifting and high-velocity air aspiration.",
    specs: ["Dust, straw & chaff aspiration", "Vibratory multi-screen grading", "Heavy particle & stone separation", "Zero water waste process"],
    idealFor: "Cereals, pulses, oilseeds & general bulk grains prior to storage or packaging."
  },
  {
    id: "color-sorting",
    title: "High-Precision Optical Color Sorting",
    badge: "Advanced Optical AI",
    shortDesc: "Cutting-edge camera sensors detect and eject chalky, moldy, discolored, or defective kernels with pneumatic micro-jets.",
    specs: ["High-resolution CCD optical cameras", "Micro-second pneumatic ejection nozzles", "Separation of discolored & foreign seeds", "Uniform color grading for export"],
    idealFor: "Export-grade sesame, coffee, haricot beans, soybeans, and certified seed grain."
  },
  {
    id: "grain-polishing",
    title: "Commercial Grain Polishing",
    badge: "Export Finish",
    shortDesc: "Specialized dry friction polishing drums smooth grain surfaces, remove clinging micro-dust, and impart an attractive commercial luster.",
    specs: ["Controlled friction drum processing", "Surface sheen & luster enhancement", "Micro-dust husk removal", "Enhanced retail and export appeal"],
    idealFor: "Pulses, beans, lentils, and premium retail-packaged cereals."
  },
  {
    id: "contract-cleaning",
    title: "Custom Bulk Contract Processing",
    badge: "Flexible Volume",
    shortDesc: "Tailored processing contracts for exporters, agricultural unions, cooperatives, and institutional commodity suppliers.",
    specs: ["Tailored SLA & quality thresholds", "Dedicated lot segregation & tracking", "Scheduled container turnaround times", "Export-compliant bagging & labeling"],
    idealFor: "International exporters, ECX suppliers, Cooperatives, and NGOs."
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Intake & Moisture Testing",
    desc: "Commodity delivery at Adama 03 facility, weighing, initial sampling, and moisture analysis to ensure optimal processing stability."
  },
  {
    step: "02",
    title: "Mechanical Pre-Cleaning & Aspiration",
    desc: "High-volume vibratory sieves strip away oversized debris, straw, pods, and dust through targeted negative-pressure cyclone aspiration."
  },
  {
    step: "03",
    title: "Density & Gravity De-Stoning",
    desc: "Fluidized gravity separators reliably separate dense impurities (gravel, glass, metal fragments) from lighter organic grains."
  },
  {
    step: "04",
    title: "Optical Color Sorting",
    desc: "Ultra-fast digital optical sorters scan every individual kernel, using precision pneumatic ejector nozzles to eliminate discolored seeds."
  },
  {
    step: "05",
    title: "Grain Polishing (Optional)",
    desc: "Gentle polishing drums buff the grain surface to remove clinging micro-chaff and achieve a vibrant, export-grade commercial sheen."
  },
  {
    step: "06",
    title: "Export Bagging & Weighing",
    desc: "Automated batch weighing into 25kg, 50kg, or 100kg export polypropylene bags with precision machine stitching and lot identification."
  }
];

export const TARGET_CUSTOMERS = [
  {
    title: "Grain & Pulse Exporters",
    role: "Meeting Global Trade Standards",
    desc: "Ensure international compliance for European, Middle Eastern, and Asian markets with strict purity certificates.",
    points: ["ECX export grade conformity", "Sub-0.1% foreign matter threshold", "Rapid turnaround for Djibouti container deadlines"]
  },
  {
    title: "Agricultural Cooperatives & Unions",
    role: "Maximizing Farmgate Harvest Value",
    desc: "Enable smallholder farmer groups to process their aggregated yields into Grade-1 commodities, increasing commercial selling price.",
    points: ["Collective bulk processing rates", "Loss-minimizing gentle handling", "Batch segregation and transparent weight yield"]
  },
  {
    title: "Commodity Traders & Wholesalers",
    role: "Premium Domestic & Regional Distribution",
    desc: "Enhance market appeal and shelf longevity for wholesale distribution in Addis Ababa, Dire Dawa, Hawassa, and nationwide.",
    points: ["Enhanced grain cleanliness", "Uniform color sorting for premium pricing", "Predictable high-volume daily output"]
  },
  {
    title: "NGOs & Institutional Relief Suppliers",
    role: "Guaranteed Purity & Nutritional Safety",
    desc: "Rigorous cleaning and de-stoning for food security, humanitarian relief, school feeding programs, and institutional supply chains.",
    points: ["Sanitary handling standards", "Safe stone & contaminant-free foodstuff", "Auditable processing logs"]
  }
];

export const ADVANTAGES = [
  {
    icon: "Cpu",
    title: "Modern Optical Technology",
    desc: "Equipped with state-of-the-art optical color sorters and precision sieves configured for maximum purity."
  },
  {
    icon: "Zap",
    title: "High Throughput (8–10 MT/Hr)",
    desc: "Commercial capacity designed to process large harvest lots quickly, minimizing vehicle demurrage."
  },
  {
    icon: "Sliders",
    title: "Customizable Processing Chains",
    desc: "Modular setup allows mechanical cleaning alone, optical sorting, polishing, or full turnkey finishing."
  },
  {
    icon: "ShieldCheck",
    title: "Purity & Quality Commitment",
    desc: "Pre-processing agreements on moisture, defect tolerance, and grade output with strict quality assurance."
  },
  {
    icon: "MapPin",
    title: "Strategic Adama 03 Hub",
    desc: "Positioned directly along the vital trade corridor connecting Ethiopia's agricultural heartlands to Djibouti Port."
  },
  {
    icon: "DollarSign",
    title: "Transparent & Competitive Rates",
    desc: "Clear per-ton pricing structures with zero hidden fees, boosting profitability for our partners."
  }
];
