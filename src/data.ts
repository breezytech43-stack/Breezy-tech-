import { ServiceItem, ReviewItem, GalleryItem, TiruppurArea } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'deep-cleaning',
    name: {
      en: 'AC Deep Cleaning (Jet Pump Wash)',
      ta: 'ஏசி ஜெட் பம்ப் ஆழமான சுத்தம் (Deep Cleaning)',
    },
    shortDesc: {
      en: 'High-pressure water jet foam wash for cooling coil, blower fan, and drain tray.',
      ta: 'ஹை-பிரஷர் ஜெட் பம்ப் மற்றும் ஃபோம் கொண்டு கூலிங் காயில், ஃபேன் மற்றும் ட்ரே சுத்தம்.',
    },
    fullDesc: {
      en: 'Our signature AC deep cleaning uses a high-pressure commercial jet pump and anti-bacterial foam spray. We assemble a protective wall jacket to catch all wastewater, thoroughly flushing out mould, heavy dust, grease, and pet dander from the internal cooling fins and cross-flow blower.',
      ta: 'சுவர்களில் அழுக்கு நீர் சிந்தாதவாறு சிறப்பு ஜாக்கெட் பொருத்தி, சக்திவாய்ந்த ஜெட் பம்ப் மற்றும் ஆன்டி-பாக்டீரியல் ஃபோம் மூலம் கூலிங் காயில், ப்ளோயர் மற்றும் வடிகால் குழாய் முழுமையாக சுத்தம் செய்யப்படுகிறது.',
    },
    priceStarts: '₹599',
    duration: '45–60 mins',
    features: {
      en: [
        'Indoor unit complete jet pressure foam wash',
        'High-velocity blower wheel deep chemical wash',
        'Anti-fungal & deodorizing sanitization spray',
        'Drain pipe unclogging to stop water leakage',
        'Outdoor condenser fins water jet wash',
        'Cooling temperature & airflow CFM inspection',
      ],
      ta: [
        'உட்புற யூனிட் முழுவதும் ஹை-பிரஷர் ஜெட் ஃபோம் வாஷ்',
        'ப்ளோயர் வீல் முழுமையான ரசாயன தூய்மை',
        'துர்நாற்றம் & பூஞ்சை எதிர்ப்பு ஸ்ப்ரே',
        'நீர் கசிவை சரிசெய்ய ட்ரெயின் பைப் அடைப்பு நீக்கம்',
        'வெளிப்புற கண்டென்சர் ஜெட் வாஷ்',
        'குளிர்ச்சி மற்றும் காற்று வேக சோதனை',
      ],
    },
    iconName: 'Droplets',
    recommendedFor: {
      en: 'Recommended every 6 months to maintain high cooling and prevent pungent room odors.',
      ta: 'அதிக குளிர்ச்சி மற்றும் நல்ல காற்று தூய்மைக்கு 6 மாதத்திற்கு ஒருமுறை சிறந்தது.',
    },
  },
  {
    id: 'gas-filling',
    name: {
      en: 'AC Gas Filling & Leak Rectification',
      ta: 'ஏசி கேஸ் நிரப்புதல் & கசிவு சரிசெய்தல்',
    },
    shortDesc: {
      en: 'Original R32, R410A, and R22 refrigerant charging with nitrogen leak testing.',
      ta: 'அசல் R32, R410A, R22 கேஸ் நிரப்புதல் மற்றும் நைட்ரஜன் லீக் சோதனை.',
    },
    fullDesc: {
      en: 'Low cooling or ice formation on copper pipes indicates refrigerant leakage. We perform high-pressure nitrogen leak detection, weld any hairline brazing leaks with oxy-acetylene torches, vacuum the entire loop to 500 microns, and weigh-in 100% genuine virgin refrigerant to manufacturer specs.',
      ta: 'குளிர்ச்சி குறையும் போது அல்லது பைப்பில் ஐஸ் படியும்போது கேஸ் கசிவு ஏற்படுகிறது. நைட்ரஜன் மூலம் கசிவை கண்டறிந்து, பிரேஸிங் வெல்டிங் செய்து, வேக்யூம் செய்து அசல் நிறுவன பரிந்துரைப்படி கேஸ் நிரப்பப்படுகிறது.',
    },
    priceStarts: '₹1,499',
    duration: '60–90 mins',
    features: {
      en: [
        'Nitrogen pressure test to pinpoint micro leaks',
        'Copper pipe flare nut tightening and re-brazing',
        'High vacuum moisture evacuation',
        'Precision digital weighing scale gas charging',
        'Running current (Ampere) & suction pressure check',
        '30-day gas leakage replacement warranty',
      ],
      ta: [
        'மைக்ரோ லீக்குகளை கண்டறிய நைட்ரஜன் பிரஷர் சோதனை',
        'காப்பர் பைப் வெல்டிங் மற்றும் ஃபிளேன் நட் மறுசீரமைப்பு',
        'ஈரப்பதத்தை அகற்ற முழுமையான வேக்யூம் செயல்முறை',
        'டிஜிட்டல் அளவீடு மூலம் துல்லியமான கேஸ் நிரப்புதல்',
        'மின் நுகர்வு (ஆம்ப்ஸ்) மற்றும் சக்ஷன் பிரஷர் சோதனை',
        '30 நாட்கள் கேஸ் கசிவு உத்தரவாதம்',
      ],
    },
    iconName: 'Gauge',
    recommendedFor: {
      en: 'Ideal when the AC blows normal air without cooling or exhibits ice frosting.',
      ta: 'ஏசியில் காற்று மட்டும் வந்து குளிர்ச்சி இல்லாமல் இருக்கும் போது அவசியம்.',
    },
  },
  {
    id: 'ac-repair',
    name: {
      en: 'AC Repair & Diagnostics',
      ta: 'ஏசி பழுதுநீக்குதல் & பாகங்கள் மாற்றுதல்',
    },
    shortDesc: {
      en: 'Expert troubleshooting for inverter PCB, compressor, sensor, and fan motor issues.',
      ta: 'இன்வெர்ட்டர் PCB, கம்ப்ரசர், சென்சார் மற்றும் ஃபேன் மோட்டார் பழுதுகளை சரிசெய்தல்.',
    },
    fullDesc: {
      en: 'From unexpected error codes on the digital display to strange rattling noises, cooling tripping, or power failures—our certified master technicians diagnose electronics down to chip-level PCB circuits with guaranteed OEM replacement parts.',
      ta: 'டிஸ்ப்ளே எர்ரர் கோடுகள், மின்சார ட்ரிப்பிங், அசாதாரண சத்தங்கள் அல்லது கம்ப்ரசர் இயங்காத பிரச்சனைகளை அனுபவமிக்க டெக்னீஷியன்கள் துல்லியமாக கண்டறிந்து அசல் உதிரிபாகங்களுடன் சரிசெய்வர்.',
    },
    priceStarts: '₹349',
    duration: '30–75 mins',
    features: {
      en: [
        'Inverter PCB chip-level troubleshooting & repair',
        'Capacitor, contractor & overload relay replacement',
        'Blower fan motor and outdoor fan motor servicing',
        'Thermostat and temperature sensor calibration',
        'Vibration damping and noisy compressor mounting fixes',
        'Genuine parts with warranty',
      ],
      ta: [
        'இன்வெர்ட்டர் PCB போர்டு பழுதுநீக்குதல்',
        'கெபாசிட்டர், ரிலே & காண்டாக்டர் மாற்றுதல்',
        'ப்ளோயர் மற்றும் அவுட்டோர் ஃபேன் மோட்டார் பழுதுநீக்கம்',
        'தெர்மோஸ்டாட் மற்றும் சென்சார் அளவீடு',
        'அதிர்வு மற்றும் சத்தத்தை குறைக்கும் அதிர்வு-தாங்கிகள்',
        'உத்தரவாதத்துடன் கூடிய அசல் உதிரிபாகங்கள்',
      ],
    },
    iconName: 'Wrench',
    recommendedFor: {
      en: 'Essential for sudden breakdowns, error codes, water drips, or tripping MCBs.',
      ta: 'திடீர் பழுது, எர்ரர் குறியீடுகள், தண்ணீர் சொட்டுதல் போன்ற சிக்கல்களுக்கு.',
    },
  },
  {
    id: 'ac-installation',
    name: {
      en: 'AC Installation & Uninstallation',
      ta: 'ஏசி பொருத்துதல் & கழற்றுதல் (Installation)',
    },
    shortDesc: {
      en: 'Laser-leveled wall mounting, vibration-proof outdoor brackets, and copper piping.',
      ta: 'லேசர் லெவல் மூலம் சரியான சுவரில் பொருத்துதல் மற்றும் தரமான காப்பர் பைப்பிங்.',
    },
    fullDesc: {
      en: 'Proper installation directly governs an air conditioner’s lifespan and efficiency. We utilize digital bubble spirit levels to prevent water condensation backflow, drill reinforced core holes, mount heavy gauge anti-rust outdoor brackets, and vacuum lines before initial startup.',
      ta: 'சரியான முறையில் நிறுவுவதே ஏசியின் ஆயுளை அதிகரிக்கும். துல்லியமான லெவலிங், துருப்பிடிக்காத அவுட்டோர் பிராக்கெட்டுகள், உயர்தர காப்பர் பைப்பிங் மற்றும் வேக்யூம் செய்து நேர்த்தியாக பொருத்துகிறோம்.',
    },
    priceStarts: '₹999',
    duration: '90–120 mins',
    features: {
      en: [
        'Precision laser-aligned wall plate mounting',
        'Clean core wall drilling with minimal dust mess',
        'Heavy-duty powder-coated outdoor stand installation',
        'High-grade copper pipe flaring & insulation wrap',
        'Electrical wiring & circuit safety load testing',
        'Cooling airflow & thermal performance commissioning',
      ],
      ta: [
        'துல்லியமான லேசர்-அலைன்ட் வால் பிளேட் பொருத்துதல்',
        'சுவர் பாழாகாத வகையில் சுத்தமான ட்ரில்லிங்',
        'துருப்பிடிக்காத வலுவான அவுட்டோர் ஸ்டாண்ட் பொருத்துதல்',
        'உயர்தர காப்பர் பைப் இன்சுலேஷன் வேலைகள்',
        'பாதுகாப்பான மின் இணைப்பு மற்றும் லோடு சோதனை',
        'குளிர்ச்சி பரிசோதனை மற்றும் பயன்பாட்டு விளக்கம்',
      ],
    },
    iconName: 'Hammer',
    recommendedFor: {
      en: 'Moving homes, installing a brand-new AC, or upgrading to an inverter model.',
      ta: 'புதிய வீடு மாறுதல் அல்லது புதிய ஏசி வாங்கும் போது சிறந்தது.',
    },
  },
  {
    id: 'split-ac-service',
    name: {
      en: 'Split AC Routine Service',
      ta: 'ஸ்பிளிட் ஏசி வழக்கமான சர்வீஸ்',
    },
    shortDesc: {
      en: 'Comprehensive 18-point inspection and filter wash for split & inverter units.',
      ta: 'ஸ்பிளிட் மற்றும் இன்வெர்ட்டர் ஏசிகளுக்கான 18-புள்ளி முழுமையான ஆய்வு & வாஷ்.',
    },
    fullDesc: {
      en: 'Designed to keep your home split air conditioner operating at manufacturer-rated power efficiency. Cleans primary micro-mesh air filters, wipes the evaporator coils, checks capacitor ratings, and monitors temperature differential across supply and return louvers.',
      ta: 'வீட்டு உபயோக ஸ்பிளிட் ஏசிகளின் மின் நுகர்வைக் குறைத்து சீரான குளிர்ச்சியைத் தரக்கூடியது. ஃபில்டர்கள் சுத்தம், காயில் துடைப்பு, மின் அழுத்தப் பரிசோதனை ஆகியவை இதில் அடங்கும்.',
    },
    priceStarts: '₹449',
    duration: '30–45 mins',
    features: {
      en: [
        'Multi-layer filter cleaning and dust elimination',
        'Condenser and cooling coil dry air & brush cleanup',
        'Temperature drop delta (ΔT) verification',
        'Electrical wiring tightness & earthing check',
        'Remote control sensor & swing louver testing',
        'Detailed diagnostic report provided',
      ],
      ta: [
        'ஃபில்டர்கள் தூய்மை மற்றும் தூசு அகற்றுதல்',
        'கண்டென்சர் மற்றும் கூலிங் காயில் பிரஷ் கிளீனிங்',
        'குளிர்ச்சி அளவு மற்றும் டெம்பரேச்சர் டிராப் சோதனை',
        'மின் இணைப்புகள் மற்றும் எர்த்திங் ஆய்வு',
        'ரிமோட் சென்சார் மற்றும் ஸ்விங் லூவர் இயக்கம்',
        'முழுமையான பரிசோதனை அறிக்கை',
      ],
    },
    iconName: 'Wind',
    recommendedFor: {
      en: 'Routine maintenance at the onset of summer or every 3–4 months.',
      ta: 'கோடை காலத் தொடக்கத்தில் அல்லது 3-4 மாதங்களுக்கு ஒருமுறை சிறந்தது.',
    },
  },
  {
    id: 'cassette-ac-service',
    name: {
      en: 'Cassette AC Commercial Service',
      ta: 'கேசட் ஏசி சர்வீஸ் (வணிக நிறுவனங்களுக்கு)',
    },
    shortDesc: {
      en: 'Specialized 4-way ceiling cassette maintenance for textile mills, offices & showrooms.',
      ta: 'பின்னலாடை நிறுவனங்கள், ஷோரூம்கள் மற்றும் கார்ப்பரேட் அலுவலகங்களுக்கான கேசட் ஏசி பராமரிப்பு.',
    },
    fullDesc: {
      en: 'Tiruppur’s textile showrooms, corporate garment buying houses, and industrial banquet halls rely on ceiling-mounted cassette units. Our team handles false ceiling panel dismounts, internal lift-pump clearing, 360-degree heat exchanger jet cleaning, and phase power checks.',
      ta: 'திருப்பூரின் ஆயத்த ஆடை ஏற்றுமதி நிறுவனங்கள் மற்றும் பிரம்மாண்ட ஷோரூம்களில் உள்ள ஃபால்ஸ் சீலிங் கேசட் ஏசிகளை பாதுகாப்பாக கழற்றி, லிப்ட் பம்ப் அடைப்புகளை நீக்கி, 360 டிகிரி காயில் வாஷ் செய்கிறோம்.',
    },
    priceStarts: '₹1,199',
    duration: '60–90 mins',
    features: {
      en: [
        'False ceiling panel safe dismounting & reinstall',
        'Built-in condensate lift pump deep cleaning & testing',
        '360-degree round heat exchanger high-pressure wash',
        'Three-phase voltage and compressor amp profiling',
        'Centrifugal turbofan balancing & cleaning',
        'Emergency response for commercial breakdowns',
      ],
      ta: [
        'சீலிங் பேனலை பாதுகாப்பாக கழற்றி பொருத்துதல்',
        'இன்-பில்ட் வாட்டர் லிப்ட் பம்ப் சுத்தம் மற்றும் பரிசோதனை',
        '360 டிகிரி ஹீட் எக்ஸ்சேஞ்சர் ஜெட் வாஷ்',
        '3-பேஸ் வோல்டேஜ் மற்றும் கம்ப்ரசர் ஆம்ப்ஸ் ஆய்வு',
        'டர்போ ஃபேன் பேலன்சிங் மற்றும் தூய்மை',
        'வணிக நிறுவனங்களுக்கு முன்னுரிமை விரைவு சேவை',
      ],
    },
    iconName: 'LayoutGrid',
    recommendedFor: {
      en: 'Garment showrooms, textile export offices, restaurants, and medical centers.',
      ta: 'டெக்ஸ்டைல் அலுவலகங்கள், துணிக்கடைகள், மருத்துவமனைகள் மற்றும் திருமண மண்டபங்களுக்கு.',
    },
  },
  {
    id: 'window-ac-service',
    name: {
      en: 'Window AC Service & Deep Overhaul',
      ta: 'விண்டோ ஏசி முழுமையான சர்வீஸ்',
    },
    shortDesc: {
      en: 'Cabinet pull-out chemical jet wash, chassis rust protection, and fan alignment.',
      ta: 'முழு கேபினட்டையும் கழற்றி ரசாயன ஜெட் வாஷ் மற்றும் துருப்பிடிக்காத பூச்சு.',
    },
    fullDesc: {
      en: 'Window units run hot and endure harsh outdoor pollution. We pull the heavy chassis from the wall sleeve, treat the base tray with anti-corrosion coating, pressure wash both indoor and outdoor coils simultaneously, and lubricate double-shaft fan bearings.',
      ta: 'சுவரில் பொருத்தப்பட்டுள்ள விண்டோ ஏசியை முழுமையாக வெளியில் எடுத்து, அடிமட்ட ட்ரேயை துருப்பிடிக்காமல் பூசி, இரண்டு பக்க காயில்களையும் ஜெட் பிரஷர் மூலம் சுத்தம் செய்கிறோம்.',
    },
    priceStarts: '₹499',
    duration: '45–60 mins',
    features: {
      en: [
        'Full chassis extraction from wall casing',
        'Simultaneous condenser and evaporator jet blast',
        'Double-shaft motor bearing lubrication',
        'Base tray anti-rust treatment and sludge removal',
        'Rotary switch & thermostat contact cleaning',
        'Sound and vibration reduction dampeners checked',
      ],
      ta: [
        'கேசிங்கிலிருந்து யூனிட்டை முழுமையாக பிரித்தெடுத்தல்',
        'இருபுற காயில்களையும் ஒரே நேரத்தில் ஜெட் வாஷ் செய்தல்',
        'மோட்டார் பேரிங் லூப்ரிகேஷன்',
        'அடிப்பகுதி துருப்பிடிக்காத பாதுகாப்பு பூச்சு',
        'சுவிட்ச் மற்றும் தெர்மோஸ்டாட் காண்டாக்ட் சுத்தம்',
        'சத்தத்தை குறைக்கும் அதிர்வு-தாங்கிகள் சோதனை',
      ],
    },
    iconName: 'Square',
    recommendedFor: {
      en: 'Homes, security cabins, and factory supervisor cabins using window ACs.',
      ta: 'வீடுகள் மற்றும் தொழிற்சாலை அலுவலகங்களில் உள்ள விண்டோ ஏசிகளுக்கு.',
    },
  },
  {
    id: 'ac-maintenance-amc',
    name: {
      en: 'AC Preventive Maintenance (AMC)',
      ta: 'ஏசி வருடாந்திர பராமரிப்பு ஒப்பந்தம் (AMC)',
    },
    shortDesc: {
      en: 'Annual maintenance contracts for zero unexpected breakdowns & reduced power bills.',
      ta: 'வருடம் முழுவதும் தடையற்ற குளிர்ச்சி & குறைந்த மின்சாரக் கட்டணத்திற்கான AMC திட்டம்.',
    },
    fullDesc: {
      en: 'Stay cool all year round without worry. Our Annual Maintenance Contract (AMC) covers 3 scheduled deep jet washes, 1 pre-summer gas top-up inspection, priority same-day breakdown support within 2 hours, and discounted OEM spare parts.',
      ta: 'வருடம் முழுவதும் ஏசி பழுதின்றி இயங்க எங்கள் AMC திட்டம் உதவுகிறது. இதில் 3 முழுமையான ஜெட் சர்வீஸ்கள், இலவச கேஸ் பரிசோதனை மற்றும் அவசர காலங்களில் 2 மணி நேர விரைவு சேவை உண்டு.',
    },
    priceStarts: '₹1,899 / yr',
    duration: 'Yearly Plan',
    features: {
      en: [
        '3 scheduled deep chemical jet services per year',
        '1 comprehensive pre-summer cooling and gas checkup',
        'Unlimited breakdown assistance calls (free labour)',
        'Priority dispatch within 2 hours across Tiruppur',
        '15% flat discount on genuine manufacturer spare parts',
        'Energy efficiency optimization to cut power bills by up to 20%',
      ],
      ta: [
        'வருடத்திற்கு 3 முழுமையான ஜெட் வாஷ் சர்வீஸ்கள்',
        'கோடைக்கு முந்தைய முழுமையான குளிர்ச்சி & கேஸ் பரிசோதனை',
        'எண்ணற்ற அவசர அழைப்புகள் (சர்வீஸ் கட்டணமின்றி)',
        'திருப்பூர் முழுவதும் 2 மணி நேர முன்னுரிமை சேவை',
        'அசல் உதிரிபாகங்களுக்கு 15% நேரடி தள்ளுபடி',
        'மின்சார கட்டணத்தை 20% வரை மிச்சப்படுத்தும் உத்திகள்',
      ],
    },
    iconName: 'ShieldCheck',
    recommendedFor: {
      en: 'Best value for homes with 2+ ACs, textile export facilities, and corporate offices.',
      ta: '2 அல்லது அதற்கு மேற்பட்ட ஏசிகள் கொண்ட வீடுகள் மற்றும் நிறுவனங்களுக்கு மிகச் சிறந்த திட்டம்.',
    },
  },
];

export const workGalleryData: GalleryItem[] = [
  {
    id: 'work-1',
    title: {
      en: 'Indoor Split AC High-Pressure Foam Jet Cleaning',
      ta: 'ஸ்பிளிட் ஏசி இன்டோர் யூனிட் ஜெட் ஃபோம் வாஷ்',
    },
    category: 'cleaning',
    categoryLabel: { en: 'Deep Jet Cleaning', ta: 'ஆழமான ஜெட் வாஷ்' },
    image: '/src/assets/images/ac_deep_cleaning_jet_1794328264937.jpg',
    description: {
      en: 'Using special protective apron jackets and 120 bar pressure jet wash to thoroughly eliminate embedded dust mites and mildew from aluminum micro-fins without creating water mess indoors.',
      ta: 'சுவர் பாழாகாமல் பாதுகாப்பு கவர்கள் அமைத்து 120 பார் பிரஷர் ஜெட் பம்ப் மூலம் காயில் தூய்மைப்படுத்தப்படுகிறது.',
    },
  },
  {
    id: 'work-2',
    title: {
      en: 'Outdoor Condenser Digital Pressure Diagnostic & Gas Refill',
      ta: 'அவுட்டோர் யூனிட் டிஜிட்டல் பிரஷர் ஆய்வு & கேஸ் சார்ஜிங்',
    },
    category: 'repair',
    categoryLabel: { en: 'Diagnostics & Gas', ta: 'பரிசோதனை & கேஸ்' },
    image: '/src/assets/images/ac_technician_servicing_1794328264421.jpg',
    description: {
      en: 'Diagnostic manifold gauge testing on outdoor condenser unit for pressure stability, refrigerant purity, and inverter electrical current verification.',
      ta: 'டிஜிட்டல் கேஜ்கள் மூலம் அவுட்டோர் யூனிட்டின் கேஸ் பிரஷர் மற்றும் இன்வெர்ட்டர் மின்சுற்று துல்லியமாக பரிசோதிக்கப்படுகிறது.',
    },
  },
  {
    id: 'work-3',
    title: {
      en: 'Precision Torque Copper Piping Split AC Installation',
      ta: 'துல்லியமான காப்பர் பைப்பிங் ஸ்பிளிட் ஏசி பொருத்துதல்',
    },
    category: 'installation',
    categoryLabel: { en: 'Installation', ta: 'நிறுவுதல்' },
    image: '/src/assets/images/ac_installation_craft_1794328265462.jpg',
    description: {
      en: 'Torque wrench flare connection ensuring zero copper flare deformation and zero gas leaks, paired with premium elastomeric thermal insulation tubing.',
      ta: 'எதிர்காலத்தில் கேஸ் கசியாமல் இருக்க துல்லியமான டார்க் ரெஞ்ச் கொண்டு காப்பர் பைப்புகள் இணைக்கப்பட்டு இன்சுலேஷன் செய்யப்படுகிறது.',
    },
  },
  {
    id: 'work-4',
    title: {
      en: 'Commercial 4-Way Ceiling Cassette Maintenance',
      ta: 'வணிக நிறுவன 4-வழி சீலிங் கேசட் ஏசி சர்வீஸ்',
    },
    category: 'commercial',
    categoryLabel: { en: 'Commercial Cassette', ta: 'வணிக கேசட் ஏசி' },
    image: '/src/assets/images/ac_commercial_cassette_1794328266044.jpg',
    description: {
      en: 'Heavy-duty 4-way ceiling cassette overhaul in a prominent Tiruppur textile buying house, restoring airflow balance and clearing internal condensation pumps.',
      ta: 'திருப்பூர் பின்னலாடை நிறுவனத்தில் கேசட் ஏசியை கழற்றி அதன் ஏர்ஃப்ளோ மற்றும் வாட்டர் லிப்ட் பம்ப் சீரமைக்கப்பட்டது.',
    },
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'K. Senthil Kumar',
    location: 'Avinashi Road, Tiruppur',
    date: '3 days ago',
    rating: 5,
    comment: {
      en: 'Outstanding service by Breezy Tech! Called at 10 AM because my Daikin 1.5 ton split AC stopped cooling completely. Technician arrived in Avinashi Road within 45 minutes with digital equipment. They identified a capacitor issue and minor gas leakage, fixed it on the spot with clear pricing. Icy chill cooling restored!',
      ta: 'மிகச் சிறந்த சேவை! எனது டெய்கின் 1.5 டன் ஏசி திடீரென குளிர்ச்சி குறைந்தது. அழைத்த 45 நிமிடங்களில் அவிநாசி ரோட்டிற்கு வந்து கெபாசிட்டர் மற்றும் கேஸ் பிரச்சனையை உடனே சரிசெய்தனர். இப்போது மிகச் சிறப்பான குளிர்ச்சி கிடைக்கிறது!',
    },
    serviceUsed: { en: 'Split AC Gas Charging & Repair', ta: 'ஸ்பிளிட் ஏசி கேஸ் சார்ஜிங் & பழுதுநீக்கம்' },
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Priya Natarajan',
    location: 'Gandhi Nagar, Tiruppur',
    date: '1 week ago',
    rating: 5,
    comment: {
      en: 'Booked their Jet Pump Deep Cleaning service for two bedroom ACs. The way they used the protective water jacket so that not a single drop touched the painted walls was very impressive. The amount of dust flushed out was shocking. Both units are now chilling the room in under 5 minutes and smell very fresh.',
      ta: 'காந்தி நகரில் உள்ள எனது வீட்டின் இரண்டு ஏசிகளுக்கு ஜெட் வாஷ் சர்வீஸ் செய்தோம். சுவரில் ஒரு துளி நீர் கூட சிந்தாமல் சிறப்பு கவர் மாட்டி மிக நேர்த்தியாக சர்வீஸ் செய்தனர். இப்போது ஏசி போட்ட 5 நிமிடத்தில் முழு அறைக்கும் அருமையான குளிர்ச்சி!',
    },
    serviceUsed: { en: 'AC Deep Jet Cleaning', ta: 'ஏசி டீப் ஜெட் கிளீனிங்' },
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'R. Karthikeyan',
    location: 'Palladam Road Textile Hub, Tiruppur',
    date: '2 weeks ago',
    rating: 5,
    comment: {
      en: 'We run a textile export showroom on Palladam Road with 6 cassette AC units. We had frequent water dripping and uneven cooling. Breezy Tech handled the full maintenance on Sunday without disrupting our business. Very professional team with genuine commercial AC tools. We signed up for their Annual AMC contract right away.',
      ta: 'பல்லடம் ரோட்டில் உள்ள எங்களது ஆடை ஷோரூமில் 6 கேசட் ஏசிகள் உள்ளன. தண்ணீர் சொட்டும் பிரச்சனையை ஞாயிற்றுக்கிழமையிலேயே வந்து முழுமையாக சரிசெய்தனர். இவர்கள் வேலை மிகவும் திருப்தி, உடனடியாக ஆண்டு பராமரிப்பு ஒப்பந்தம் (AMC) போட்டுவிட்டோம்.',
    },
    serviceUsed: { en: 'Commercial Cassette AC AMC', ta: 'கேசட் ஏசி வருடாந்திர பராமரிப்பு' },
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Vigneshwaran M.',
    location: 'Rayapuram, Tiruppur',
    date: '3 weeks ago',
    rating: 5,
    comment: {
      en: 'Shifted house to Rayapuram and needed split AC uninstallation from old flat and reinstallation here. They did laser leveling, core drilling, and nitrogen vacuuming before powering up. No vibrating sounds at all from the outdoor stand. Genuine professionals. Transparent charges and polite technicians.',
      ta: 'ராயபுரத்திற்கு குடிபெயர்ந்த போது பழைய வீட்டிலிருந்து ஏசியை கழற்றி புதிய வீட்டில் மாட்டினார்கள். அதிர்வு எதுவும் இன்றி லேசர் லெவல் மூலம் மிக நேர்த்தியாக வேலை செய்தனர். நியாயமான கட்டணம்!',
    },
    serviceUsed: { en: 'AC Shift & Installation', ta: 'ஏசி கழற்றி பொருத்துதல்' },
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Soundararajan C.',
    location: 'Dharapuram Road, Tiruppur',
    date: '1 month ago',
    rating: 5,
    comment: {
      en: 'My Voltas AC gave an E6 error and was tripping the main MCB. Other local mechanics asked me to replace the whole PCB board for huge money. Breezy Tech technician tested the board with a multimeter, replaced just the faulty resistor component and sensor for a fraction of that cost. Honest and technically superior team!',
      ta: 'எனது வோல்டாஸ் ஏசியில் E6 எர்ரர் வந்து ட்ரிப் ஆனது. மற்றவர்கள் போர்டு முழுவதும் மாற்ற வேண்டும் என்றனர். ஆனால் பிரீஸி டெக் டெக்னீஷியன் சிறிய பாகத்தை மட்டும் மாற்றி மிக குறைந்த செலவில் சரிசெய்தார். மிகவும் நேர்மையானவர்கள்!',
    },
    serviceUsed: { en: 'PCB Chip-Level Repair', ta: 'PCB போர்டு பழுதுநீக்குதல்' },
    verified: true,
  },
];

export const tiruppurLocalities: TiruppurArea[] = [
  { name: 'Avinashi Road', tamilName: 'அவிநாசி ரோடு', estimatedArrival: '30–45 mins', zone: 'North Zone' },
  { name: 'Palladam Road', tamilName: 'பல்லடம் ரோடு', estimatedArrival: '30–45 mins', zone: 'South Zone' },
  { name: 'Dharapuram Road', tamilName: 'தாராபுரம் ரோடு', estimatedArrival: '40–55 mins', zone: 'South Zone' },
  { name: 'Kangeyam Road', tamilName: 'காங்கேயம் ரோடு', estimatedArrival: '35–50 mins', zone: 'East Zone' },
  { name: 'Gandhi Nagar', tamilName: 'காந்தி நகர்', estimatedArrival: '25–40 mins', zone: 'Central' },
  { name: 'Rayapuram', tamilName: 'ராயபுரம்', estimatedArrival: '20–35 mins', zone: 'Central' },
  { name: 'Perumanallur', tamilName: 'பெருமாநல்லூர்', estimatedArrival: '45–60 mins', zone: 'North Zone' },
  { name: 'Angeripalayam', tamilName: 'அங்கேரிபாளையம்', estimatedArrival: '35–50 mins', zone: 'West Zone' },
  { name: 'Boyampalayam', tamilName: 'போயம்பாளையம்', estimatedArrival: '35–50 mins', zone: 'North-East' },
  { name: 'Kumaran Road', tamilName: 'குமரன் ரோடு', estimatedArrival: '20–35 mins', zone: 'City Center' },
  { name: 'Mangalam Road', tamilName: 'மங்கலம் ரோடு', estimatedArrival: '35–50 mins', zone: 'West Zone' },
  { name: 'Uthukuli Road', tamilName: 'ஊத்துக்குளி ரோடு', estimatedArrival: '40–55 mins', zone: 'East Zone' },
  { name: 'Nallur', tamilName: 'நல்லூர்', estimatedArrival: '35–50 mins', zone: 'South Zone' },
  { name: 'Velampalayam', tamilName: 'வேலம்பாளையம்', estimatedArrival: '30–45 mins', zone: 'North Zone' },
  { name: 'Vidyalaya / College Road', tamilName: 'வித்யாலயா / கல்லூரி ரோடு', estimatedArrival: '25–40 mins', zone: 'Central' },
];

export const brandSpecializations = [
  'Daikin',
  'Voltas',
  'Blue Star',
  'LG Inverter',
  'Samsung',
  'Mitsubishi Electric',
  'Panasonic',
  'Carrier',
  'Hitachi',
  'Godrej',
  'Lloyd',
  'O General',
  'Whirlpool',
  'Haier',
];
