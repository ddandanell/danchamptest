import { Question } from '../types/quiz.types';

export const questions: Question[] = [
  {
    id: 'q1',
    questionNumber: 1,
    type: 'single',
    required: true,
    title: {
      da: 'Hvad beskriver dig bedst lige nu?',
      en: 'What best describes you right now?',
    },
    options: [
      {
        id: 'large-company',
        emoji: '🏢',
        title: {
          da: 'Jeg arbejder for en stor virksomhed',
          en: 'I work for a large company',
        },
        subtitle: {
          da: 'dansk eller international virksomhed med operationer i Indonesien eller planer om at udvide',
          en: 'Danish or international company with operations in Indonesia or plans to expand',
        },
      },
      {
        id: 'own-business',
        emoji: '💼',
        title: {
          da: 'Jeg ejer eller driver min egen virksomhed',
          en: 'I own or run my own business',
        },
        subtitle: {
          da: 'søger kunder, partnere eller vækst i det indonesiske marked eller med danske forbindelser',
          en: 'seeking customers, partners or growth in the Indonesian market or with Danish connections',
        },
      },
      {
        id: 'entrepreneur',
        emoji: '🚀',
        title: {
          da: 'Jeg er iværksætter',
          en: "I'm an entrepreneur",
        },
        subtitle: {
          da: 'startup eller i gang med at starte, søger netværk, mentors og muligheder',
          en: 'startup or starting soon, seeking network, mentors and opportunities',
        },
      },
      {
        id: 'young-professional',
        emoji: '🌱',
        title: {
          da: 'Jeg er yngre professional',
          en: "I'm a young professional",
        },
        subtitle: {
          da: 'nyuddannet eller junior-level, bygger karriere og netværk i Indonesien',
          en: 'recent graduate or junior, building career and network in Indonesia',
        },
      },
    ],
  },
  {
    id: 'q2',
    questionNumber: 2,
    type: 'single',
    required: true,
    title: {
      da: 'Hvad er din relation til Danmark?',
      en: 'What is your connection to Denmark?',
    },
    options: [
      {
        id: 'danish',
        emoji: '🇩🇰',
        title: {
          da: 'Jeg er dansker',
          en: 'I am Danish',
        },
        subtitle: {
          da: 'bor i Indonesien eller kommer hertil',
          en: 'living in Indonesia or moving here',
        },
      },
      {
        id: 'work-danish-company',
        emoji: '🤝',
        title: {
          da: 'Jeg arbejder for en dansk virksomhed',
          en: 'I work for a Danish company',
        },
        subtitle: {
          da: 'men er ikke nødvendigvis dansk',
          en: 'but not necessarily Danish',
        },
      },
      {
        id: 'indonesian',
        emoji: '🌏',
        title: {
          da: 'Jeg er indonesier der arbejder med danske partnere',
          en: "I'm Indonesian working with Danish partners",
        },
        subtitle: {
          da: 'søger at forstå dansk business-kultur og bygge stærkere forbindelser',
          en: 'seeking to understand Danish business culture and build stronger connections',
        },
      },
      {
        id: 'interested',
        emoji: '💡',
        title: {
          da: 'Jeg er interesseret i dansk business-kultur',
          en: "I'm interested in Danish business culture",
        },
        subtitle: {
          da: 'men ingen direkte forbindelse endnu',
          en: 'but no direct connection yet',
        },
      },
    ],
  },
  {
    id: 'q3',
    questionNumber: 3,
    type: 'single',
    required: true,
    title: {
      da: 'Hvis du ser 6 måneder frem – hvad skal være sket?',
      en: 'Looking 6 months ahead – what should have happened?',
    },
    options: [
      {
        id: 'bigger-network',
        emoji: '📈',
        title: {
          da: 'Mit netværk er større og mere værdifuldt',
          en: 'My network is bigger and more valuable',
        },
        subtitle: {
          da: 'bygge meningsfulde forbindelser med folk der kan hjælpe mig fremadrettet',
          en: 'build meaningful connections with people who can help me move forward',
        },
      },
      {
        id: 'new-customers',
        emoji: '💰',
        title: {
          da: 'Jeg har fundet nye kunder eller partnere',
          en: "I've found new customers or partners",
        },
        subtitle: {
          da: 'konkrete business-muligheder der kan drive vækst og samarbejde',
          en: 'concrete business opportunities that can drive growth and collaboration',
        },
      },
      {
        id: 'understand-market',
        emoji: '🧠',
        title: {
          da: 'Jeg forstår det indonesiske marked bedre',
          en: 'I understand the Indonesian market better',
        },
        subtitle: {
          da: 'få praktisk indsigt og lære af andres erfaringer i markedet',
          en: 'get practical insights and learn from others\' experiences in the market',
        },
      },
      {
        id: 'career-opportunities',
        emoji: '💼',
        title: {
          da: 'Jeg har fundet nye karrieremuligheder',
          en: "I've found new career opportunities",
        },
        subtitle: {
          da: 'jobmuligheder, karrierevejledning eller skifte til nye roller',
          en: 'job opportunities, career guidance or transition to new roles',
        },
      },
    ],
  },
  {
    id: 'q4',
    questionNumber: 4,
    type: 'single',
    required: true,
    title: {
      da: 'Hvilket område arbejder du inden for?',
      en: 'Which sector do you work in?',
    },
    options: [
      {
        id: 'production',
        emoji: '🏭',
        title: {
          da: 'Produktion & Manufacturing',
          en: 'Production & Manufacturing',
        },
        subtitle: {
          da: 'fabrikker, supply chain, kvalitetskontrol og operationel excellence',
          en: 'factories, supply chain, quality control and operational excellence',
        },
      },
      {
        id: 'tech',
        emoji: '💻',
        title: {
          da: 'Tech & IT',
          en: 'Tech & IT',
        },
        subtitle: {
          da: 'software, digitalisering, innovation og teknologiske løsninger',
          en: 'software, digitalization, innovation and technological solutions',
        },
      },
      {
        id: 'consulting',
        emoji: '💼',
        title: {
          da: 'Consulting & Services',
          en: 'Consulting & Services',
        },
        subtitle: {
          da: 'strategisk rådgivning, forretningsudvikling og faglig ekspertise',
          en: 'strategic consulting, business development and professional expertise',
        },
      },
      {
        id: 'other',
        emoji: '⚡',
        title: {
          da: 'Andet',
          en: 'Other',
        },
        subtitle: {
          da: 'andet område eller branche end de nævnte',
          en: 'other area or industry than those mentioned',
        },
      },
    ],
  },
  {
    id: 'q5',
    questionNumber: 5,
    type: 'single',
    required: true,
    title: {
      da: 'Når du går til et business-event – hvad søger du?',
      en: 'When you go to a business event – what are you looking for?',
    },
    options: [
      {
        id: 'concrete-opportunities',
        emoji: '🎯',
        title: {
          da: 'Konkrete business-muligheder',
          en: 'Concrete business opportunities',
        },
        subtitle: {
          da: 'leads, deals, partnere',
          en: 'leads, deals, partners',
        },
      },
      {
        id: 'learning',
        emoji: '🧠',
        title: {
          da: 'Læring og indsigt',
          en: 'Learning and insights',
        },
        subtitle: {
          da: 'hvad sker der i markedet',
          en: "what's happening in the market",
        },
      },
      {
        id: 'quality-connections',
        emoji: '🤝',
        title: {
          da: 'Kvalitets-forbindelser',
          en: 'Quality connections',
        },
        subtitle: {
          da: 'møde de rigtige mennesker',
          en: 'meeting the right people',
        },
      },
      {
        id: 'inspiration',
        emoji: '💡',
        title: {
          da: 'Inspiration og nye idéer',
          en: 'Inspiration and new ideas',
        },
        subtitle: {
          da: 'få nye perspektiver, kreative løsninger og motivation fra andre',
          en: 'get new perspectives, creative solutions and motivation from others',
        },
      },
    ],
  },
  {
    id: 'q6',
    questionNumber: 6,
    type: 'single',
    required: true,
    title: {
      da: 'Hvor lang tid har du været involveret i Indonesien?',
      en: 'How long have you been involved in Indonesia?',
    },
    options: [
      {
        id: 'completely-new',
        emoji: '🆕',
        title: {
          da: 'Helt ny',
          en: 'Completely new',
        },
        subtitle: {
          da: 'få måneder eller kommer snart - lærer markedet at kende og bygger første forbindelser',
          en: 'few months or coming soon - learning the market and building first connections',
        },
      },
      {
        id: 'relatively-new',
        emoji: '📅',
        title: {
          da: 'Relativt ny',
          en: 'Relatively new',
        },
        subtitle: {
          da: '1-2 år - har grundlæggende forståelse men søger dybere indsigt og netværk',
          en: '1-2 years - have basic understanding but seeking deeper insights and network',
        },
      },
      {
        id: 'moderate-experience',
        emoji: '🌱',
        title: {
          da: 'Moderat erfaring',
          en: 'Moderate experience',
        },
        subtitle: {
          da: '3-5 år - etableret i markedet, søger at udvide netværk og finde nye muligheder',
          en: '3-5 years - established in the market, seeking to expand network and find new opportunities',
        },
      },
      {
        id: 'veteran',
        emoji: '🏆',
        title: {
          da: 'Veteran',
          en: 'Veteran',
        },
        subtitle: {
          da: '5+ år - meget erfaren, kan dele viden og søger strategiske forbindelser',
          en: '5+ years - very experienced, can share knowledge and seeking strategic connections',
        },
      },
    ],
  },
  {
    id: 'q7',
    questionNumber: 7,
    type: 'single',
    required: true,
    title: {
      da: 'Ærligt: Hvad gør at du tøver med at engagere dig i business-netværk?',
      en: 'Honestly: What makes you hesitate to engage in business networks?',
    },
    note: {
      da: 'anonymt - bruges kun til at forstå dig',
      en: 'anonymous - used only to understand you',
    },
    options: [
      {
        id: 'time-pressure',
        emoji: '⏰',
        title: {
          da: 'Tidspres',
          en: 'Time pressure',
        },
        subtitle: {
          da: 'jeg er busy nok - bekymret for at finde tid til events og engagement',
          en: "I'm busy enough - worried about finding time for events and engagement",
        },
      },
      {
        id: 'cost',
        emoji: '💰',
        title: {
          da: 'Omkostning',
          en: 'Cost',
        },
        subtitle: {
          da: 'er det pengene værd - usikker på ROI og værdi af medlemskab',
          en: 'is it worth the money - uncertain about ROI and value of membership',
        },
      },
      {
        id: 'uncertainty',
        emoji: '🤔',
        title: {
          da: 'Usikkerhed',
          en: 'Uncertainty',
        },
        subtitle: {
          da: 'ved ikke om det passer til mig - usikker på om netværket matcher mine behov',
          en: "don't know if it fits me - uncertain if the network matches my needs",
        },
      },
      {
        id: 'nothing-holds-back',
        emoji: '🤷',
        title: {
          da: 'Intet holder mig tilbage',
          en: "Nothing holds me back",
        },
        subtitle: {
          da: 'jeg er interesseret og klar til at engagere mig aktivt',
          en: "I'm interested and ready to engage actively",
        },
      },
    ],
  },
  {
    id: 'q8',
    questionNumber: 8,
    type: 'single',
    required: false,
    title: {
      da: 'Hvor gammel er du cirka?',
      en: 'How old are you approximately?',
    },
    note: {
      da: 'Bruges til at forstå generationer i netværket – ikke til at ekskludere nogen',
      en: 'Used to understand generations in the network – not to exclude anyone',
    },
    options: [
      {
        id: 'under-30',
        emoji: '🌱',
        title: {
          da: 'Under 30',
          en: 'Under 30',
        },
        subtitle: {
          da: 'young professional, starter karrieren - bygger fundament og søger mentors',
          en: 'young professional, starting career - building foundation and seeking mentors',
        },
      },
      {
        id: '30-40',
        emoji: '💼',
        title: {
          da: '30-40',
          en: '30-40',
        },
        subtitle: {
          da: 'etablerer sig, voksende erfaring - søger karrierevækst og strategiske forbindelser',
          en: 'establishing yourself, growing experience - seeking career growth and strategic connections',
        },
      },
      {
        id: '40-50',
        emoji: '🎯',
        title: {
          da: '40-50',
          en: '40-50',
        },
        subtitle: {
          da: 'erfaren, måske leder-rolle - søger peer-netværk og muligheder for at dele viden',
          en: 'experienced, maybe leadership role - seeking peer network and opportunities to share knowledge',
        },
      },
      {
        id: '50-plus',
        emoji: '🏆',
        title: {
          da: '50+',
          en: '50+',
        },
        subtitle: {
          da: 'senior, måske nærmer sig transition - kan være mentor og søger meningsfulde forbindelser',
          en: 'senior, maybe approaching transition - can be mentor and seeking meaningful connections',
        },
      },
    ],
  },
];

export const validationRules: Record<string, { type: 'single' | 'multiple'; required: boolean; min?: number; max?: number }> = {
  q1: { type: 'single', required: true },
  q2: { type: 'single', required: true },
  q3: { type: 'single', required: true },
  q4: { type: 'single', required: true },
  q5: { type: 'single', required: true },
  q6: { type: 'single', required: true },
  q7: { type: 'single', required: true },
  q8: { type: 'single', required: false },
};

