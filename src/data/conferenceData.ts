import {
  CommitteeMember,
  Speaker,
  ProgramDay,
  PricingTier,
  Attraction,
  ConferenceRegistrationCategory,
  AccommodationOption,
} from '../types';
import heroLiverJaipur from '../assets/images/hero_liver_jaipur.jpg';
// Jaipur artwork from the INASL 2027 poster
import jaipurLandmarksPanorama from '../assets/images/jaipur_landmarks_panorama.jpg';
import jaipurLandmarksPortrait from '../assets/images/jaipur_landmarks_portrait.jpg';
import catalogueFile from '@shared/catalogue.json';

export const CONFERENCE_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUyLi6mhy_JMEX10rCXGYixcY2FnqHLT14tjOrhGckvN_YbP8I_-tYgoJ9bAYlIcfCw26IZuu8Bd8aIqfrdHzD7ZVSir0KPeo8X6bphDHNP-zATkDqb883UjKefZAiD9V7meQTfgp3e2eMRPdxLuBOwTOvuM0GRV48h9XwxBvVHdhFF7KkJNWVCwFhpFnVEnr6FqKzddO-ycTBvpnhqnhVmawh0fQY4Ergbb8VSwpLiWbqV4Juegan0w',
  heroLiverJaipur,
  alokSharma: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAonZ9vHeIQObg8KdlPxmNT2ns67teOrm1XwsyLD9qENWXWSm95gyM3fmDJSo5U5dPa9YBQ_Hb-YmovQH2ISGwCd2j0QKPBn8k3YgUjfx4t8p5pxpYtzDmO0EwKEU56-dGtPpW66ub5Fu2ycCtdv-EZoAOqKNxsbnuNuJjCg_4W32o5yQA7YDrwH052IXfVMhc7OAKquFPlLuD8fwnqJN1OHWtnhq-nk-AZoK_d9qGnyS7rlOIhRKMW3g',
  sunitaDas: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHFn04jvTo_JKZ49TOIbEZgIlIgby437Oo1qf2h76gDMUmytewaOeBxTN5t5cA6W4ElAj5s2oFMorhW07KHuGa_fdN6Yv-zD76f7o4C1dcKBMVBHP9W6bgy0DZo5c-p-TiNWBDOZcR6GWF7ImijMAAaKf4SJbDl82s6o49o-kby76F5XNIEjyUXMv64nY3dYnU7RdyGeP1KNxDh5TeIWl562vE70mES0f4wpBGyMuhLiKbDKZWe1MmEg',
  rajivMenon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcyc2DctTxLwPJP8kIHgZ0142r0WR4hZ8jqeiCnPKPPrhhkCDMSrzI48ORzQdD7Avs_FHZ-jrqAE2gxgcMJMMYktXZ-R7TNHYzKTi_tDatd_9rkkL2JElDyhzrV1y20zlHMYHKhb5CR8ZlUFxUeSgvXlpe9FOo1jz8vp71zVtdxlUK59sOV6jPyFU0rwd8YBqWrS1YWg6MCcL7JaRrapG07uuJCLpMJP4ESMmSl7-Rk9Dk6or1VG28GA',
  jaipurLandmarks: jaipurLandmarksPanorama,
  jaipurVenue: jaipurLandmarksPortrait,
};

/** INASL 2027 Organizing Chairmen (from the INASL 2027 poster). No photographs yet – cards show initials. */
export const ORGANIZING_CHAIRMEN: CommitteeMember[] = [
  {
    id: 'saraswat',
    name: 'Prof. Vivek A Saraswat',
    role: 'Organizing Chairman',
    affiliation: 'Mahatma Gandhi University of Medical Sciences and Technology, Jaipur',
    image: '',
    bio: 'Professor & HOD, Department of Hepatology, Pancreatobiliary Sciences and Liver Transplantation (Medical), Mahatma Gandhi University of Medical Sciences and Technology, Jaipur, India.',
  },
  {
    id: 'mehta',
    name: 'Prof. Naimish N Mehta',
    role: 'Co-Organizing Chairman',
    affiliation: 'Mahatma Gandhi University of Medical Sciences & Technology, Jaipur',
    image: '',
    bio: 'Chairman, Centre for Digestive Science; Professor & Head, Department of HPB Surgery and Liver Transplantation, Mahatma Gandhi University of Medical Sciences & Technology, Jaipur, India.',
  },
];

export const CORE_COMMITTEE: CommitteeMember[] = [
  {
    id: 'sharma',
    name: 'Dr. Alok Sharma',
    role: 'Patron',
    affiliation: 'IPGMER & Kolkata Institute of Medical Sciences',
    image: CONFERENCE_IMAGES.alokSharma,
    bio: 'Pioneer in translational hepatology research with over three decades of academic leadership across premier Indian and international institutions.',
  },
  {
    id: 'das',
    name: 'Dr. Sunita Das',
    role: 'Scientific Committee Chair',
    affiliation: 'School of Tropical Medicine & Genomic Sciences, Kolkata',
    image: CONFERENCE_IMAGES.sunitaDas,
    bio: 'Renowned clinical hepatologist and lead investigator for multi-center clinical trials in chronic liver disease and portal hypertension.',
  },
  {
    id: 'menon',
    name: 'Dr. Rajiv Menon',
    role: 'Organizing Secretary',
    affiliation: 'Medical College Kolkata',
    image: CONFERENCE_IMAGES.rajivMenon,
    bio: 'Specialist in transplant hepatology and pre-transplant evaluation, and in postgraduate hepatology curricula across South Asia.',
  },
  {
    id: 'bhattacharya',
    name: 'Dr. Subhashish Bhattacharya',
    role: 'Joint Organizing Secretary',
    affiliation: 'Peerless Hospital & B.K. Roy Research Centre, Kolkata',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    bio: 'Senior consultant liver transplant surgeon coordinating surgical skills labs, live case discussions, and international faculty symposia.',
  },
  {
    id: 'roy-anindya',
    name: 'Dr. Anindya Roy',
    role: 'Treasurer & Finance Chair',
    affiliation: 'Apollo Multispeciality Hospitals, Kolkata',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    bio: 'Senior hepatologist overseeing commercial industry sponsorships, conference delegate accounting, and institutional compliance.',
  },
  {
    id: 'sen-pradeep',
    name: 'Dr. Pradeep Sen',
    role: 'Workshop & Hands-On Coordinator',
    affiliation: 'AMRI Hospitals, Dhakuria, Kolkata',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    bio: 'Lead coordinator for transplant simulator workshops, vascular and biliary anastomosis masterclasses, and paediatric hepatology sessions for postgraduate fellows.',
  },
];

export const COMMITTEE_MEMBERS: CommitteeMember[] = CORE_COMMITTEE;

export const KEYNOTE_SPEAKERS: Speaker[] = [
  {
    id: 'jenkins',
    name: 'Prof. Sarah Jenkins',
    role: 'Keynote Speaker',
    affiliation: 'Oxford University, UK',
    location: 'United Kingdom',
    specialty: 'Transplant Immunology',
    image: 'https://images.unsplash.com/photo-1594824813576-ff6859ff4e20?auto=format&fit=crop&q=80&w=800',
    isKeynote: true,
    type: 'keynote',
    bio: 'Professor of transplant hepatology whose work on immune tolerance and immunosuppression after liver transplantation is widely cited.',
  },
  {
    id: 'tanaka',
    name: 'Dr. Hiroshi Tanaka',
    role: 'Keynote Speaker',
    affiliation: 'Tokyo Medical Center, Japan',
    location: 'Japan',
    specialty: 'Living Donor Liver Transplantation',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    isKeynote: true,
    type: 'keynote',
    bio: 'Director of a high-volume living donor liver transplant programme and pioneer of laparoscopic and robotic donor hepatectomy.',
  },
];

export const INTERNATIONAL_FACULTY: Speaker[] = [
  {
    id: 'thompson',
    name: 'Dr. Emma Thompson',
    role: 'Faculty',
    affiliation: 'Johns Hopkins Medicine',
    location: 'USA',
    specialty: 'Acute-on-Chronic Liver Failure',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    type: 'international',
    bio: 'Associate Professor of Hepatology focusing on acute-on-chronic liver failure, organ support and transplant selection.',
  },
  {
    id: 'chen',
    name: 'Dr. David Chen',
    role: 'Faculty',
    affiliation: 'University of Melbourne',
    location: 'Australia',
    specialty: 'Hepatocellular Carcinoma',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    type: 'international',
    bio: 'Hepatobiliary surgeon specialising in liver resection, ablation and transplantation for hepatocellular carcinoma.',
  },
  {
    id: 'garcia',
    name: 'Dr. Maria Garcia',
    role: 'Faculty',
    affiliation: 'Hospital Clínic de Barcelona',
    location: 'Spain',
    specialty: 'Liver Critical Care',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    type: 'international',
    bio: 'Head of a liver intensive care unit with protocols for acute liver failure and peri-transplant care.',
  },
  {
    id: 'mueller',
    name: 'Dr. Lars Mueller',
    role: 'Faculty',
    affiliation: 'Charité – Universitätsmedizin Berlin',
    location: 'Germany',
    specialty: 'AI in Hepatology',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
    type: 'international',
    bio: 'Data scientist building predictive models for fibrosis staging and liver transplant waitlist outcomes.',
  },
];

export const NATIONAL_FACULTY: Speaker[] = [
  {
    id: 'kumar',
    name: 'Dr. Rajesh Kumar',
    role: 'National Faculty',
    affiliation: 'All India Institute of Medical Sciences (AIIMS)',
    location: 'New Delhi',
    specialty: 'Metabolic Liver Disease (MASLD)',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    type: 'national',
    bio: 'Senior consultant in metabolic liver disease and coordinator of a multicentre MASLD registry.',
  },
  {
    id: 'desai',
    name: 'Dr. Anjali Desai',
    role: 'National Faculty',
    affiliation: 'Tata Memorial Centre',
    location: 'Mumbai',
    specialty: 'HPB Surgical Oncology',
    image: 'https://images.unsplash.com/photo-1594824813576-ff6859ff4e20?auto=format&fit=crop&q=80&w=400',
    type: 'national',
    bio: 'Hepato-pancreato-biliary surgeon recognised for complex liver resections and liver cancer clinical trials.',
  },
  {
    id: 'singh',
    name: 'Dr. Vikram Singh',
    role: 'National Faculty',
    affiliation: 'Institute of Liver and Biliary Sciences (ILBS)',
    location: 'New Delhi',
    specialty: 'Viral Hepatitis',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    type: 'national',
    bio: 'Principal investigator on hepatitis B and C treatment and elimination programmes.',
  },
  {
    id: 'patel',
    name: 'Dr. Priya Patel',
    role: 'National Faculty',
    affiliation: 'B.J. Medical College',
    location: 'Ahmedabad',
    specialty: 'Paediatric Hepatology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    type: 'national',
    bio: 'Paediatric hepatologist leading care for biliary atresia and follow-up after paediatric liver transplantation.',
  },
];

export const SCIENTIFIC_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: 'Aug 5, 2027',
    title: 'Inauguration & Transplant Hepatology',
    sessions: [
      {
        id: 'd1-s1',
        time: '08:00 - 09:00',
        title: 'Registration & Welcome Coffee',
        room: 'Main Foyer, Novotel Jaipur Convention Centre',
        category: 'Plenary',
        description: 'Badge distribution, delegate kit collection, and welcoming remarks in the exhibition hall.',
      },
      {
        id: 'd1-s2',
        time: '09:00 - 10:30',
        title: 'The Future of Liver Transplantation',
        speaker: 'Prof. Sarah Jenkins',
        affiliation: 'Oxford University, UK',
        room: 'Plenary Hall A',
        category: 'Keynote',
        description: 'Where outcomes, organ allocation and immunosuppression after liver transplantation are heading in the next decade.',
      },
      {
        id: 'd1-s3',
        time: '10:30 - 11:00',
        title: 'Scientific Networking & Tea Break',
        room: 'Pre-Function Corridor',
        category: 'Break',
        description: 'Poster walk and networking with keynote delegates.',
      },
      {
        id: 'd1-s4',
        time: '11:00 - 13:00',
        title: 'Liver Transplantation Techniques Lab',
        speaker: 'Dr. Hiroshi Tanaka & Dr. David Chen',
        affiliation: 'Tokyo Medical Center & University of Melbourne',
        room: 'Lab Room 3 (Surgical Skills Suite)',
        category: 'Workshop',
        description: 'Hands-on simulator training in donor hepatectomy, vascular and biliary anastomosis, and intra-operative ultrasound.',
      },
      {
        id: 'd1-s5',
        time: '14:00 - 16:00',
        title: 'Symposium: Acute-on-Chronic Liver Failure & Organ Support',
        speaker: 'Dr. Emma Thompson & Dr. Anjali Desai',
        room: 'Hall B (Auditorium)',
        category: 'Symposium',
        description: 'Clinical trial outcomes, organ support strategies and the timing of transplantation in ACLF.',
      },
      {
        id: 'd1-s6',
        time: '16:30 - 18:00',
        title: 'Presidential Panel: Access to Liver Transplantation in India',
        speaker: 'Dr. Alok Sharma, Dr. Sunita Das & Dr. Lars Mueller',
        room: 'Plenary Hall A',
        category: 'Panel',
        description: 'Policy panel on deceased-donor programmes, affordability and equitable organ allocation across regions.',
      },
    ],
  },
  {
    day: 2,
    date: 'Aug 6, 2027',
    title: 'Living Donor Transplantation, Liver Cancer & AI',
    sessions: [
      {
        id: 'd2-s1',
        time: '08:30 - 10:00',
        title: 'Robotic & Laparoscopic Donor Hepatectomy',
        speaker: 'Dr. Hiroshi Tanaka',
        affiliation: 'Tokyo Medical Center, Japan',
        room: 'Plenary Hall A',
        category: 'Keynote',
        description: 'Minimally invasive donor surgery, donor safety and graft outcomes.',
      },
      {
        id: 'd2-s2',
        time: '10:15 - 12:30',
        title: 'AI in Hepatology: Fibrosis Staging & Transplant Prediction',
        speaker: 'Dr. Lars Mueller',
        affiliation: 'Charité Berlin, Germany',
        room: 'Hall C',
        category: 'Symposium',
        description: 'Machine-learning models for non-invasive fibrosis assessment, liver imaging and waitlist mortality.',
      },
      {
        id: 'd2-s3',
        time: '12:30 - 13:30',
        title: 'Networking Lunch & Industry Presentation',
        room: 'Royal Pavilion',
        category: 'Break',
        description: 'Complimentary banquet lunch with industry partner presentations.',
      },
      {
        id: 'd2-s4',
        time: '13:30 - 15:30',
        title: 'Free Oral Paper Presentations: Shortlisted Finalists',
        speaker: 'Chaired by Dr. Sunita Das & Dr. Maria Garcia',
        room: 'Hall B & Lab 2',
        category: 'Plenary',
        description: 'Peer-reviewed presentations by young investigators and fellowship scholars.',
      },
      {
        id: 'd2-s5',
        time: '16:00 - 17:30',
        title: 'Interactive Case Debates: Liver Cancer & Transplant Criteria',
        speaker: 'Dr. David Chen & Dr. Rajiv Menon',
        room: 'Plenary Hall A',
        category: 'Panel',
        description: 'Audience voting and case reviews on downstaging, resection versus transplantation, and expanded criteria.',
      },
      {
        id: 'd2-s6',
        time: '19:30 - 22:30',
        title: 'Gala Dinner & Rajasthani Cultural Evening',
        room: 'Venue Lawn, Novotel Jaipur Convention Centre',
        category: 'Break',
        description: 'Traditional Rajasthani folk performances, music, and a multi-cuisine royal banquet.',
      },
    ],
  },
  {
    day: 3,
    date: 'Aug 7, 2027',
    title: 'Future Horizons, Awards & Valedictory',
    sessions: [
      {
        id: 'd3-s1',
        time: '09:00 - 10:30',
        title: 'Liver Critical Care: Managing Acute Liver Failure',
        speaker: 'Dr. Maria Garcia',
        affiliation: 'Hospital Clínic de Barcelona',
        room: 'Plenary Hall A',
        category: 'Symposium',
        description: 'Bedside protocols for cerebral oedema, organ support and emergency transplant listing.',
      },
      {
        id: 'd3-s2',
        time: '10:45 - 12:30',
        title: 'Metabolic Liver Disease & Paediatric Hepatology',
        speaker: 'Dr. Rajesh Kumar & Dr. Priya Patel',
        room: 'Hall B',
        category: 'Symposium',
        description: 'Managing MASLD across the life course, and long-term care after paediatric liver transplantation.',
      },
      {
        id: 'd3-s3',
        time: '13:30 - 15:00',
        title: 'Young Investigator Award Ceremonies & Poster Laureates',
        speaker: 'Jury Committee',
        room: 'Plenary Hall A',
        category: 'Plenary',
        description: 'Recognition of the best scientific contributions with international travel grants and gold medals.',
      },
      {
        id: 'd3-s4',
        time: '15:15 - 16:30',
        title: 'Valedictory Address, CME Accreditation & Closing Remarks',
        speaker: 'Dr. Alok Sharma & Dr. Rajiv Menon',
        room: 'Plenary Hall A',
        category: 'Plenary',
        description: 'Issuance of 12 CME credit hour certificates, closing remarks, and handover to the next host city.',
      },
    ],
  },
];

const PACKAGE_CONTENT: ConferenceRegistrationCategory[] = [
  {
    id: 'sgei-member',
    category: 'INASL Member',
    type: 'national',
    currency: 'INR',
    badge: 'POPULAR CHOICE',
    isRecommended: true,
    qualification: 'Registered Life & Annual members of the Indian National Association for Study of the Liver',
    earlyBird: 'INR 18,500/-',
    earlyBirdAmount: 18500,
    regular: 'INR 21,500/-',
    regularAmount: 21500,
    onSpot: 'INR 24,500/-',
    onSpotAmount: 24500,
    inclusions: [
      'Registration & Full Scientific Sessions Access',
      '4 Lunches & Continuous Hospitality Tea/Coffee',
      '2 Dinners & 1 Gala Banquet Dinner',
      'Official Delegate Registration Kit & Bag',
      'Accredited Certificate of Participation (CME Hours)',
    ],
  },
  {
    id: 'non-member',
    category: 'Non-Member',
    type: 'national',
    currency: 'INR',
    badge: 'SPECIALISTS & FACULTY',
    qualification: 'Practicing Physicians, Hepatologists, Gastroenterologists, Transplant Surgeons & Allied Specialists',
    earlyBird: 'INR 21,500/-',
    earlyBirdAmount: 21500,
    regular: 'INR 24,500/-',
    regularAmount: 24500,
    onSpot: 'INR 27,500/-',
    onSpotAmount: 27500,
    inclusions: [
      'Full Conference & Scientific Sessions Access',
      '4 Lunches & Continuous Hospitality Tea/Coffee',
      '2 Dinners & 1 Gala Banquet Dinner',
      'Official Delegate Registration Kit & Bag',
      'Accredited Certificate of Participation (CME Hours)',
    ],
  },
  {
    id: 'pg-student',
    category: 'PG Student',
    type: 'national',
    currency: 'INR',
    badge: 'SUBSIDIZED ACADEMIC RATE',
    qualification: 'Postgraduates, MD/MS/DNB Residents & Research Fellows (HOD letter required)',
    earlyBird: 'INR 16,500/-',
    earlyBirdAmount: 16500,
    regular: 'INR 19,500/-',
    regularAmount: 19500,
    onSpot: 'INR 22,500/-',
    onSpotAmount: 22500,
    inclusions: [
      'Access to All Scientific Sessions & Free Paper Tracks',
      '4 Lunches & Continuous Hospitality Tea/Coffee',
      '2 Dinners & 1 Gala Banquet Dinner',
      'Official Delegate Registration Kit',
      'Eligibility for Best Young Investigator Award & Certificate',
    ],
  },
  {
    id: 'accompanying-national',
    category: 'Accompanying National',
    type: 'accompanying-national',
    currency: 'INR',
    badge: 'FAMILY & GUEST',
    qualification: 'Spouse or family guest of registered domestic delegate (Non-scientific pass)',
    earlyBird: 'INR 12,000/-',
    earlyBirdAmount: 12000,
    regular: 'INR 14,000/-',
    regularAmount: 14000,
    onSpot: 'INR 18,000/-',
    onSpotAmount: 18000,
    inclusions: [
      'Entry to Conference Hospitality & Exhibition Lounges',
      '4 Lunches & Continuous Refreshments',
      '2 Dinners & 1 Grand Gala Banquet Dinner',
      'Access to Cultural Evening & City Tour Coordination',
      'Non-Residential Pass (excludes CME certificate)',
    ],
  },
  {
    id: 'international-delegate',
    category: 'International Delegate',
    type: 'international',
    currency: 'USD',
    badge: 'OVERSEAS DELEGATE',
    isRecommended: true,
    qualification: 'Overseas Clinicians, International Faculty & Researchers',
    earlyBird: 'USD 350',
    earlyBirdAmount: 350,
    regular: 'USD 450',
    regularAmount: 450,
    onSpot: 'USD 550',
    onSpotAmount: 550,
    inclusions: [
      'Full 3-Day International Delegate All-Access Pass',
      '4 Lunches, 2 Dinners & 1 Grand Gala Banquet Dinner',
      'Visa Assistance & Ministry Clearance Documentation',
      'Official Delegate Registration Kit & Hardbound Programme',
      'Validated International CME Accreditation Certificate',
    ],
  },
  {
    id: 'accompanying-international',
    category: 'Accompanying International',
    type: 'accompanying-international',
    currency: 'USD',
    badge: 'INTERNATIONAL GUEST',
    qualification: 'Spouse or family guest accompanying registered overseas delegate',
    earlyBird: 'USD 200',
    earlyBirdAmount: 200,
    regular: 'USD 250',
    regularAmount: 250,
    onSpot: 'USD 300',
    onSpotAmount: 300,
    inclusions: [
      'Entry to Conference Hospitality & Dining Pavilions',
      '4 Lunches & Continuous Refreshments',
      '2 Dinners & 1 Grand Gala Banquet Dinner',
      'Access to Inaugural & Cultural Showcases',
      'Complimentary Jaipur Heritage Half-Day Tour',
    ],
  },
];

const HOTEL_CONTENT: AccommodationOption[] = [
  {
    id: 'itc-royal-bengal',
    hotel: 'Novotel Jaipur Convention Centre (Venue)',
    isVenue: true,
    category: 'Conference Venue Hotel, Sitapura, Jaipur',
    singleOccupancy: 'INR 14,000/-',
    singleAmount: 14000,
    twinShare: 'INR 8,000/-',
    twinAmount: 8000,
    highlights: [
      'Located within the Jaipur Exhibition & Convention Centre (JECC) complex',
      'Steps from the conference halls – no daily transfers needed',
      'Priority room allocation for registered conference delegates',
    ],
  },
  {
    id: 'alternate-nearby-hotel',
    hotel: 'Alternate Nearby Hotel',
    isVenue: false,
    category: '4-Star Premium Partner Hotel (Within 2.5 km)',
    singleOccupancy: 'INR 10,000/-',
    singleAmount: 10000,
    twinShare: 'INR 6,500/-',
    twinAmount: 6500,
    highlights: [
      'Dedicated complimentary luxury AC shuttles every 15 mins to venue',
      'Complimentary daily buffet breakfast included',
      'Delegate helpdesk & express baggage assistance',
      'Special conference negotiated corporate tariff',
    ],
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'pg-student',
    name: 'PG Student',
    priceInr: 'INR 16,500/-',
    priceUsd: '$200',
    features: [
      'Access to All Scientific Sessions & Poster Halls',
      '4 Lunches, 2 Dinners & 1 Gala Dinner',
      'Official Delegate Registration Kit',
      'Certificate of Participation (CME Credits)',
    ],
  },
  {
    id: 'sgei-member',
    name: 'INASL Member',
    priceInr: 'INR 18,500/-',
    priceUsd: '$230',
    isFeatured: true,
    tag: 'POPULAR CHOICE',
    features: [
      'Full Conference & Scientific Sessions Access',
      '4 Lunches, 2 Dinners & 1 Gala Dinner',
      'Official Delegate Registration Kit & Bag',
      'Accredited CME Certificate of Participation',
    ],
  },
  {
    id: 'international-delegate',
    name: 'International Delegate',
    priceInr: 'INR 29,000/-',
    priceUsd: 'USD 350',
    features: [
      'All-Inclusive International Delegate Pass',
      '4 Lunches, 2 Dinners & 1 Gala Banquet Dinner',
      'Visa Invitation & Clearance Documentation',
      'Official Delegate Kit & Validated CME Certificate',
    ],
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    description: 'The Palace of Winds, Jaipur’s best-known landmark.',
    fullDetails:
      'Built in 1799 by Maharaja Sawai Pratap Singh, this five-storey façade of pink sandstone has 953 small latticed windows (jharokhas) that let the royal women watch street life unseen while cool air moved through the palace.',
    image: CONFERENCE_IMAGES.jaipurLandmarks,
    highlight: 'Iconic Monument',
  },
  {
    id: 'amber-fort',
    name: 'Amber Fort',
    description: 'A hilltop fort-palace overlooking Maota Lake.',
    fullDetails:
      'Begun under Raja Man Singh I in the late 16th century, Amber (Amer) Fort blends Rajput and Mughal architecture across courtyards, halls and the mirrored Sheesh Mahal. It is part of the Hill Forts of Rajasthan UNESCO World Heritage Site.',
    image: CONFERENCE_IMAGES.jaipurLandmarks,
    highlight: 'UNESCO World Heritage',
  },
  {
    id: 'jantar-mantar',
    name: 'Jantar Mantar',
    description: 'An 18th-century astronomical observatory beside the City Palace.',
    fullDetails:
      'Completed in 1734 by Maharaja Sawai Jai Singh II, the observatory holds nineteen masonry instruments, including the world’s largest stone sundial. It is a UNESCO World Heritage Site in the heart of the walled Pink City.',
    image: CONFERENCE_IMAGES.jaipurLandmarks,
    highlight: 'UNESCO World Heritage',
  },
];

export const SPONSORS = {
  platinum: [
    { name: 'Novis MedTech International', tag: 'Surgical Robotics' },
    { name: 'AstraBio Genomics', tag: 'Precision Oncology' },
  ],
  gold: [
    { name: 'Zenith Diagnostics', tag: 'High-Throughput Labs' },
    { name: 'Vanguard Biopharma', tag: 'Biologics & Vaccines' },
    { name: 'Kolkata Health Tech', tag: 'Digital Imaging' },
  ],
  silver: [
    { name: 'MedPulse Devices' },
    { name: 'Apex Clinical Systems' },
    { name: 'Beacon Scientific' },
    { name: 'CareLink Telehealth' },
  ],
};

// Dates from the Registration Brief. Abstract deadlines are not in the documents yet – update
// here (and ABSTRACT_SUBMISSION_* in the backend .env) once the Scientific Committee confirms them.
export const IMPORTANT_DATES = [
  {
    date: 'Now Open',
    title: 'Online Registration & Abstract Submission',
    desc: 'Create your delegate account, register and submit your abstracts online.',
    status: 'current',
  },
  {
    date: '15 January 2027',
    title: 'Early Bird Registration Closes',
    desc: 'Register by 15 January 2027 (IST) for Early Bird rates.',
    status: 'upcoming',
  },
  {
    date: '16 January – 10 April 2027',
    title: 'Regular Registration',
    desc: 'Regular registration rates apply.',
    status: 'upcoming',
  },
  {
    date: '22 March 2027',
    title: 'Last Date for Cancellation (75% refund)',
    desc: 'Written requests to the Conference Secretariat by 11:59 PM IST. GST & bank charges are non-refundable.',
    status: 'upcoming',
  },
  {
    date: '5 – 8 August 2027',
    title: 'INASL 2027 at Novotel Jaipur Convention Centre, Jaipur',
    desc: 'On-spot registration rates apply after 10 April 2027.',
    status: 'upcoming',
  },
];


// ---------------------------------------------------------------------------------------------
// Prices on the landing page come from the shared static catalogue (../shared/catalogue.json),
// so they can never differ from what the registration flow charges. The texts above (badges,
// inclusions, highlights) are marketing content only.
// ---------------------------------------------------------------------------------------------
const PRICE_SOURCE = catalogueFile;
const label = (currency: string, amount: number) =>
  currency === 'USD' ? `USD ${amount.toLocaleString('en-US')}` : `INR ${amount.toLocaleString('en-IN')}/-`;

export const CONFERENCE_REGISTRATION_PACKAGES: ConferenceRegistrationCategory[] = PACKAGE_CONTENT.map((pkg) => {
  const c = PRICE_SOURCE.conferenceCategories.find((x) => x.code === pkg.id);
  if (!c) return pkg;
  const p = c.prices as Record<string, number>;
  return {
    ...pkg,
    category: c.name,
    currency: c.currency as ConferenceRegistrationCategory['currency'],
    earlyBird: label(c.currency, p.early_bird),
    earlyBirdAmount: p.early_bird,
    regular: label(c.currency, p.regular),
    regularAmount: p.regular,
    onSpot: label(c.currency, p.on_spot),
    onSpotAmount: p.on_spot,
  };
});

/** Landing-page hotel cards → catalogue room codes (single / twin share). */
const HOTEL_ROOMS: Record<string, { single: string; twin: string }> = {
  'itc-royal-bengal': { single: 'venue-single', twin: 'venue-twin' },
  'alternate-nearby-hotel': { single: 'alternate-single', twin: 'alternate-twin' },
};

export const ACCOMMODATION_OPTIONS: AccommodationOption[] = HOTEL_CONTENT.map((h) => {
  const rooms = HOTEL_ROOMS[h.id];
  const single = rooms && PRICE_SOURCE.accommodation.options.find((o) => o.code === rooms.single);
  const twin = rooms && PRICE_SOURCE.accommodation.options.find((o) => o.code === rooms.twin);
  return {
    ...h,
    ...(single ? { singleOccupancy: label('INR', single.nightly), singleAmount: single.nightly } : {}),
    ...(twin ? { twinShare: label('INR', twin.nightly), twinAmount: twin.nightly } : {}),
  };
});
