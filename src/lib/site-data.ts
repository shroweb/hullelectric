import heroImg from "@/assets/hero-electrician.webp";
import fuseboardImg from "@/assets/service-fuseboard.webp";
import commercialImg from "@/assets/service-commercial.jpg";
import evImg from "@/assets/service-ev.jpg";
import testingImg from "@/assets/service-testing.webp";
import humberImg from "@/assets/humber-bridge.webp";
import fireAlarmImg from "@/assets/service-fire-alarm.webp";
import emergencyLightingImg from "@/assets/service-emergency-lighting.webp";
import cctvImg from "@/assets/service-cctv.webp";
import patTestingImg from "@/assets/service-pat-testing.webp";
import solarImg from "@/assets/service-solar.jpg";
import heatPumpImg from "@/assets/service-heat-pump.jpg";
import kitchenImg from "@/assets/service-kitchen.webp";
import powerLightingImg from "@/assets/service-power-lighting.webp";

export const company = {
  name: "Abbey Electrical Services",
  legal: "Abbey Electrical Services Hull Ltd.",
  phone: "01482 440210",
  phoneHref: "tel:01482440210",
  whatsapp: "https://wa.me/441482440210",
  email: "info@abbeyelectricalservices.co.uk",
  emailHref: "mailto:info@abbeyelectricalservices.co.uk",
  area: "Hull & East Yorkshire",
  hours: "Mon to Fri: 8am to 5pm",
  rating: "5.0",
  reviewCount: "50+",
  established: "2007",
};

export const images = {
  hero: heroImg,
  fuseboard: fuseboardImg,
  commercial: commercialImg,
  ev: evImg,
  testing: testingImg,
  humber: humberImg,
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  category: "Residential & Domestic" | "Commercial & Industrial" | "Testing & Inspection";
  intro: string;
  included: string[];
  forWho: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "fuse-boards-consumer-units",
    name: "Fuse Boards & Consumer Units",
    short: "Upgrade an old fuse board to a modern consumer unit with RCD protection.",
    image: fuseboardImg,
    category: "Residential & Domestic",
    intro:
      "An old fuse board can leave your home without the protection modern wiring regulations require. We supply and fit new consumer units, test the installation and give you the certification.",
    included: [
      "Full consumer unit replacement",
      "RCD and RCBO protection",
      "Fault testing before and after",
      "Electrical certificate issued",
      "Same-day free quotes",
    ],
    forWho: "Homeowners, landlords and businesses with older fuse boards or recurring trips.",
    metaTitle: "Fuse Board & Consumer Unit Upgrades in Hull | Abbey Electrical Services",
    metaDescription:
      "NICEIC approved fuse board and consumer unit upgrades in Hull and East Yorkshire. RCD protection, full testing and certification. Free quotes. Call 01482 440210.",
  },
  {
    slug: "property-rewires",
    name: "Property Rewires",
    short: "Full or partial rewires for older homes and properties that no longer meet standards.",
    image: heroImg,
    category: "Residential & Domestic",
    intro:
      "Full or partial rewires for older homes and properties that no longer meet current standards. We plan the work around you, minimise disruption and certify the installation when we finish.",
    included: [
      "Full and partial rewires",
      "New circuits, sockets and lighting",
      "Work planned around your schedule",
      "Tidy, dust-managed installation",
      "Certified and signed off on completion",
    ],
    forWho: "Owners of older properties, landlords and developers bringing homes up to standard.",
    metaTitle: "House Rewires in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Full and partial house rewires in Hull and East Yorkshire. NICEIC approved, planned around you, certified on completion. Free quotes. Call 01482 440210.",
  },
  {
    slug: "electrical-testing-inspection",
    name: "Electrical Testing & Inspection",
    short: "EICR reports and condition testing to keep properties safe and compliant.",
    image: testingImg,
    category: "Testing & Inspection",
    intro:
      "We test your property and equipment to confirm they are safe and meet current regulations. You get a clear report and certification you can give to tenants, buyers or insurers.",
    included: [
      "Electrical Installation Condition Reports (EICR)",
      "Fixed wiring testing",
      "Home buyer and seller reports",
      "Periodic inspection and testing",
      "Clear written results and certificates",
    ],
    forWho: "Landlords, homeowners selling or buying, estate agents and commercial sites.",
    metaTitle: "Electrical Testing & EICR in Hull | Abbey Electrical Services",
    metaDescription:
      "Electrical testing, EICR and fixed wiring inspection in Hull and East Yorkshire. NICEIC approved with full certification. Call 01482 440210.",
  },
  {
    slug: "pat-testing",
    name: "PAT Testing",
    short: "Quick, cost-effective portable appliance testing with full certification.",
    image: patTestingImg,
    category: "Testing & Inspection",
    intro:
      "Quick, cost-effective portable appliance testing for landlords and businesses, with all certification provided. We work around your opening hours to keep disruption low.",
    included: [
      "Testing of plug-in appliances",
      "Pass and fail labelling",
      "Full certification provided",
      "Flexible appointment times",
      "Cost-effective for multiple items",
    ],
    forWho: "Offices, shops, landlords and any business with electrical appliances.",
    metaTitle: "PAT Testing in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Portable appliance (PAT) testing in Hull and East Yorkshire. Fast, cost-effective, fully certified. Call Abbey Electrical Services on 01482 440210.",
  },
  {
    slug: "fire-alarms",
    name: "Fire Alarms",
    short: "Design, installation, servicing and repair of fire alarm systems.",
    image: fireAlarmImg,
    category: "Commercial & Industrial",
    intro:
      "For all your fire alarm needs, from servicing an existing system to new design and installation. We make sure the system suits the building and meets current standards.",
    included: [
      "New fire alarm design and installation",
      "System servicing and maintenance",
      "Fault finding and repair",
      "Certification and documentation",
      "Domestic and commercial systems",
    ],
    forWho: "Commercial premises, landlords, care homes and facilities managers.",
    metaTitle: "Fire Alarm Installation & Servicing in Hull | Abbey Electrical Services",
    metaDescription:
      "Fire alarm design, installation, servicing and repair in Hull and East Yorkshire. NICEIC approved. Call 01482 440210.",
  },
  {
    slug: "emergency-lighting",
    name: "Emergency Lighting",
    short: "Installation, maintenance, servicing and testing of emergency lighting.",
    image: emergencyLightingImg,
    category: "Commercial & Industrial",
    intro:
      "Emergency lighting installation, maintenance, servicing and repair for commercial premises. We keep escape routes lit and your building compliant.",
    included: [
      "New emergency lighting installation",
      "Routine servicing and testing",
      "Repairs and replacements",
      "Compliance certification",
      "Planned maintenance contracts",
    ],
    forWho: "Shops, offices, industrial units and any premises with public access.",
    metaTitle: "Emergency Lighting in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Emergency lighting installation, servicing and testing in Hull and East Yorkshire. NICEIC approved. Call 01482 440210.",
  },
  {
    slug: "cctv-installation",
    name: "CCTV Installation",
    short: "CCTV systems designed and installed to suit your property.",
    image: cctvImg,
    category: "Commercial & Industrial",
    intro:
      "CCTV systems designed to meet your precise needs, giving you a clear view of your property. We install, set up and show you how to use it.",
    included: [
      "System design to suit the site",
      "Camera supply and installation",
      "Remote viewing setup",
      "Domestic and commercial systems",
      "Aftercare and support",
    ],
    forWho: "Homeowners, shops, commercial sites and industrial premises.",
    metaTitle: "CCTV Installation in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "CCTV system design and installation in Hull and East Yorkshire. Domestic and commercial. Call Abbey Electrical Services on 01482 440210.",
  },
  {
    slug: "ev-chargers",
    name: "EV Chargers",
    short: "Home and commercial electric vehicle charger installation.",
    image: evImg,
    category: "Residential & Domestic",
    intro:
      "Home and commercial EV charger installation, wired and tested to current regulations. We check your supply, fit the unit and certify the work.",
    included: [
      "Home EV charger installation",
      "Commercial and workplace chargers",
      "Supply checks before fitting",
      "Tested and certified",
      "Advice on the right unit",
    ],
    forWho: "Homeowners with electric vehicles and businesses adding charge points.",
    metaTitle: "EV Charger Installation in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Electric vehicle charger installation in Hull and East Yorkshire. Home and commercial, fully certified. Call 01482 440210.",
  },
  {
    slug: "power-and-lighting",
    name: "Power & Lighting",
    short: "Sockets, lighting, additions and repairs, large or small.",
    image: powerLightingImg,
    category: "Residential & Domestic",
    intro:
      "All power and lighting installation, repairs and additions, carried out large or small. From an extra socket to a full lighting design, we cover it.",
    included: [
      "Additional sockets and lights",
      "LED and energy-efficient lighting",
      "Security and outdoor lighting",
      "Cooker and shower supplies",
      "Repairs and fault finding",
    ],
    forWho: "Homeowners and businesses adding to or upgrading their wiring.",
    metaTitle: "Power & Lighting Electricians in Hull | Abbey Electrical Services",
    metaDescription:
      "Power and lighting installation, additions and repairs in Hull and East Yorkshire. NICEIC approved. Call 01482 440210.",
  },
  {
    slug: "kitchen-bathroom-refurbishment",
    name: "Kitchen & Bathroom",
    short: "Safe electrical work for kitchen and bathroom refurbishments.",
    image: kitchenImg,
    category: "Residential & Domestic",
    intro:
      "Our NICEIC electricians make sure kitchen and bathroom appliances are installed safely and have sufficient power. We work alongside your other trades.",
    included: [
      "Kitchen appliance supplies",
      "Bathroom lighting and extractor wiring",
      "Additional sockets and circuits",
      "Safe zones and IP-rated fittings",
      "Certified on completion",
    ],
    forWho: "Homeowners refurbishing kitchens and bathrooms, and fitters who need an electrician.",
    metaTitle: "Kitchen & Bathroom Electrics in Hull | Abbey Electrical Services",
    metaDescription:
      "Kitchen and bathroom electrical work in Hull and East Yorkshire. Safe, certified installations. Call 01482 440210.",
  },
  {
    slug: "commercial-industrial",
    name: "Commercial & Industrial",
    short: "Maintenance, 3-phase work, machine supplies and contract work.",
    image: commercialImg,
    category: "Commercial & Industrial",
    intro:
      "Electrical work for commercial and industrial sites, from maintenance and breakdowns to 3-phase installations and full contract work. One team for the whole job.",
    included: [
      "Electrical maintenance and breakdowns",
      "All 3-phase work",
      "Machine supplies and installations",
      "Power distribution and shop fitting",
      "Contract and design-and-build projects",
    ],
    forWho: "Factories, shops, offices, developers and facilities managers.",
    metaTitle: "Commercial & Industrial Electricians in Hull | Abbey Electrical Services",
    metaDescription:
      "Commercial and industrial electrical work in Hull and East Yorkshire. Maintenance, 3-phase, contract work. Call 01482 440210.",
  },
  {
    slug: "emergency-callouts",
    name: "Emergency Call-outs",
    short: "Emergency electrician call-outs across Hull and East Yorkshire.",
    image: heroImg,
    category: "Commercial & Industrial",
    intro:
      "Lost power or a fault you cannot ignore? We run an emergency call-out service across Hull and East Yorkshire and will get to you when you need us most.",
    included: [
      "Power loss and tripping faults",
      "Fault finding and repair",
      "Domestic and commercial call-outs",
      "Cover across East Yorkshire",
      "Honest advice on the phone first",
    ],
    forWho: "Anyone with an electrical emergency at home or at work.",
    metaTitle: "Emergency Electrician in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Emergency electrician call-outs across Hull and East Yorkshire. Fast response, honest advice. Call 01482 440210.",
  },
  {
    slug: "solar-panels",
    name: "Solar Panel Installation",
    short: "Solar panel installation for homes and commercial properties.",
    image: solarImg,
    category: "Residential & Domestic",
    intro:
      "Solar panel installation for homes and commercial properties, designed to reduce energy bills and lower your carbon footprint. We handle the full electrical installation and connection.",
    included: [
      "Full solar panel system installation",
      "Inverter supply and fitting",
      "Grid connection and metering",
      "System commissioning and testing",
      "Certification and handover",
    ],
    forWho: "Homeowners and businesses looking to generate their own electricity and reduce energy costs.",
    metaTitle: "Solar Panel Installation in Hull & East Yorkshire | Abbey Electrical Services",
    metaDescription:
      "Solar panel installation in Hull and East Yorkshire. Home and commercial systems, fully installed and certified. Call 01482 440210.",
  },
  {
    slug: "air-source-heat-pumps",
    name: "Air Source Heat Pumps",
    short: "Electrical installation and connections for air source heat pumps.",
    image: heatPumpImg,
    category: "Residential & Domestic",
    intro:
      "Electrical installation and connections for air source heat pumps. We carry out all the wiring, controls and certification to get your heat pump running safely and efficiently.",
    included: [
      "Heat pump electrical supply and connection",
      "Controls and thermostat wiring",
      "Circuit protection and isolation",
      "Testing and commissioning",
      "Electrical certification",
    ],
    forWho: "Homeowners and developers installing heat pumps as part of an energy-efficient upgrade.",
    metaTitle: "Air Source Heat Pump Electricians in Hull | Abbey Electrical Services",
    metaDescription:
      "Air source heat pump electrical installation in Hull and East Yorkshire. NICEIC approved, certified on completion. Call 01482 440210.",
  },
];

export const serviceCategories = [
  "Residential & Domestic",
  "Commercial & Industrial",
  "Testing & Inspection",
] as const;

export const areas = [
  "Hull",
  "Beverley",
  "Cottingham",
  "Hessle",
  "Willerby",
  "Howden",
  "Goole",
  "Driffield",
  "Bridlington",
  "Hornsea",
  "Withernsea",
  "Brough",
];

export const reviews = [
  {
    title: "Professional Service",
    body: "We have always been impressed with their work. Very professional team — always on time, on budget and the finish is always to a high standard. Highly recommended.",
  },
  {
    title: "Brilliant Work By Professionals",
    body: "Fitting a brand new consumer unit in our property. Great work from start to finish. They explained what they were doing throughout and tidied up after themselves. Would 100% use again.",
  },
  {
    title: "Thank You",
    body: "Out of hours on a Sunday evening we had lost power. They talked me through diagnosing and fixing the problem over the phone. We are so grateful — thank you so much.",
  },
  {
    title: "New Fuse Board",
    body: "Abbey came, completed the job quickly with no mess or fuss, came in on budget and were a pleasure to deal with.",
  },
  {
    title: "Amazing Service & Great Price",
    body: "Amazing service and great price — would use again. Very professional and prompt. Excellent service all round.",
  },
  {
    title: "Highly Recommended",
    body: "Whenever we need electrical work done we always go to Abbey Electrical. They respond quickly to our requests and always arrive when they say they will. Highly recommended.",
  },
  {
    title: "Emergency Lighting Installation",
    body: "A very prompt, efficient and professional service as usual and as expected every time. Will definitely use them again.",
  },
  {
    title: "Electrical Work",
    body: "Abbey fitted our lights and socket installations. The work was neat and tidy — they discussed it with us and helped us make an informed choice on materials. Would recommend.",
  },
  {
    title: "Good Job",
    body: "Marvellous customer service. Very attentive and very quick at quotes. I would absolutely use Abbey Electrical again.",
  },
];

export const faqs = [
  {
    q: "Are you NICEIC approved?",
    a: "Yes. Abbey Electrical Services is a NICEIC approved contractor, so every job meets current wiring regulations.",
  },
  {
    q: "Do you charge for quotes?",
    a: "No. All quotes are free and no obligation. We give you a clear price before any work starts.",
  },
  {
    q: "Do you cover my area?",
    a: "We work within roughly a 20-mile radius of Hull across East Yorkshire. If you are not sure, call us on 01482 440210.",
  },
  {
    q: "Do you do emergency call-outs?",
    a: "Yes. We run an emergency call-out service across Hull and East Yorkshire for faults that cannot wait.",
  },
  {
    q: "Do you work on commercial and industrial sites?",
    a: "Yes. We cover domestic, commercial and industrial work, including 3-phase, maintenance and contract jobs.",
  },
  {
    q: "Will I get a certificate for testing work?",
    a: "Yes. Testing and inspection work comes with clear written results and the relevant certification.",
  },
];

export const serviceFormOptions = [
  // Residential & Domestic
  "Domestic Lighting",
  "Domestic Sockets",
  "Fusebox & Consumer Units",
  "Repairs & Fault Finding",
  "Property Rewires",
  "Kitchen & Bathroom Refurbishment",
  "Emergency Callouts",
  "Extensions & Loft Conversions",
  "Additional Sockets and Lights",
  "Smoke Detectors",
  "Security Lighting",
  "LED Lighting",
  "Cooker and Shower Supplies",
  "Outside Power and Lighting",
  "CCTV Installation",
  "Air Source Heat Pumps",
  "Solar Panel Installation",
  "Electric Vehicle Chargers",
  "Design and Build Projects",
  // Commercial & Industrial
  "Commercial Lighting",
  "Commercial Sockets",
  "Electrical Maintenance",
  "Fire Alarms",
  "Emergency Lighting",
  "Breakdowns",
  "Shop Fitting",
  "Power Distribution",
  "All 3 Phase Work",
  "Electrical Surveys",
  "Facilities Management",
  "Contract Works",
  "Cat 5 Data Network Cable",
  "Factory Shutdowns",
  "Machine Supplies & Installations",
  // Testing & Inspection
  "Electrical Condition Report",
  "Home Buyers & Sellers Report",
  "Fixed Wiring Testing",
  "PAT Testing",
  "Emergency Lighting Testing",
  "Fire Alarm Testing",
  "Periodic Inspection & Testing",
  "Electrical Safety Audits",
  "Other",
];