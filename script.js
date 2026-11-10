/* BREEZY TECH - Standalone JavaScript */
let currentLang = 'en';

const langData = {
  en: {
    headline: "Your AC Deserves Professional Care.",
    subtitle: "Not Just Service. Complete AC Care.",
    location: "All Over Tiruppur, Tamil Nadu",
    desc: "Tiruppur’s premier AC care specialist. Deep jet-pressure cleaning, precision gas charging, and master diagnostics delivered right to your doorstep within 90 minutes.",
    servicesTitle: "Our Professional Services",
    callBtn: "Call: 91235 28287",
    badge: "தமிழ்"
  },
  ta: {
    headline: "உங்கள் ஏசிக்கு தொழில்முறை பராமரிப்பு தேவை.",
    subtitle: "வெறும் சர்வீஸ் அல்ல. முழுமையான ஏசி பராமரிப்பு.",
    location: "திருப்பூர் முழுவதும், தமிழ்நாடு",
    desc: "திருப்பூரின் முன்னணி ஏசி பழுதுநீக்குதல் & சர்வீஸ் மையம். ஜெட் பம்ப் ஆழமான வாஷ், அசல் கேஸ் நிரப்புதல், மற்றும் அவசர பழுதுநீக்குதல்—திருப்பூர் முழுவதும் 90 நிமிடங்களில் உங்கள் இல்லத்திற்கே வருகிறோம்.",
    servicesTitle: "எங்கள் ஏசி சேவைகள்",
    callBtn: "அழைக்க: 91235 28287",
    badge: "English"
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ta' : 'en';
  const data = langData[currentLang];
  
  const elH = document.getElementById('txt-headline');
  const elS = document.getElementById('txt-subtitle');
  const elL = document.getElementById('txt-location');
  const elD = document.getElementById('txt-desc');
  const elT = document.getElementById('txt-services-title');
  const elC = document.querySelector('#btn-call span');
  const elB = document.querySelector('#langToggleBtn span');

  if (elH) elH.innerText = data.headline;
  if (elS) elS.innerText = data.subtitle;
  if (elL) elL.innerText = data.location;
  if (elD) elD.innerText = data.desc;
  if (elT) elT.innerText = data.servicesTitle;
  if (elC) elC.innerText = data.callBtn;
  if (elB) elB.innerText = data.badge;
  
  if (currentLang === 'ta') {
    document.body.classList.add('tamil-font');
  } else {
    document.body.classList.remove('tamil-font');
  }
}

console.log('BREEZY TECH static website ready for Netlify.');
