import { Profile } from '../types/quiz.types';

export const profiles: Profile[] = [
  {
    id: 'corporate-navigator',
    title: {
      da: 'Corporate Navigator',
      en: 'The Corporate Navigator',
    },
    tagline: {
      da: 'Stor-virksomheds ansat · Moderat erfaring · Søger netværk + karriere',
      en: 'Corporate employee · Moderate experience · Seeking network + career',
    },
    description: {
      da: 'Du arbejder for en etableret virksomhed, har erfaring nok til at vide hvad du vil, men søger det næste level. Du ved at netværk accelererer karriere. Du er typisk 30-50 år gammel, har 3-10 års erfaring, og er klar til at tage næste skridt opad. Du forstår at det ikke kun handler om kompetencer – det handler også om hvem du kender og hvem der kender dig. Du søger både mentors der kan guide dig og peers du kan lære sammen med.',
      en: 'You work for an established company, have enough experience to know what you want, but are seeking the next level. You know that networking accelerates careers. You are typically 30-50 years old, have 3-10 years of experience, and are ready to take the next step up. You understand that it is not just about skills – it is also about who you know and who knows you. You seek both mentors who can guide you and peers you can learn together with.',
    },
    benefits: {
      da: [
        'Access til senior leaders i både danske og indonesiske firmaer',
        'Indsigt i hvordan andre virksomheder tackler lignende challenges',
        'Mulighed for at blive synlig for headhuntere og decision-makers',
        'Career advice fra folk der har gået vejen før dig',
        'Adgang til jobs der aldrig slås op offentligt',
      ],
      en: [
        'Access to senior leaders in both Danish and Indonesian companies',
        'Insight into how other companies tackle similar challenges',
        'Opportunity to become visible to headhunters and decision-makers',
        'Career advice from people who have walked the path before you',
        'Access to jobs that are never posted publicly',
      ],
    },
    youllMeet: {
      da: 'CFOs, Country Managers, Regional Directors, HR Leaders, andre corporate professionals der husker at klatre kræver hjælp fra toppen.',
      en: 'CFOs, Country Managers, Regional Directors, HR Leaders, other corporate professionals who remember that climbing requires help from the top.',
    },
    nextSteps: {
      da: [
        'Kom til vores næste Chamber Night (gratis første gang)',
        'Tal med 3-4 medlemmer om deres karriereveje',
        'Beslut om det passer',
        'Tilmeld dig membership',
      ],
      en: [
        'Come to our next Chamber Night (free first time)',
        'Talk with 3-4 members about their career paths',
        'Decide if it fits',
        'Sign up for membership',
      ],
    },
    triggers: {
      businessSituation: ['large-company'],
      experience: ['moderate-experience'],
      goals: ['bigger-network', 'career-opportunities'],
    },
  },
  {
    id: 'growth-entrepreneur',
    title: {
      da: 'Growth Entrepreneur',
      en: 'The Growth Entrepreneur',
    },
    tagline: {
      da: 'Virksomhedsejer · Søger kunder + partnere · Konkrete muligheder vigtigst',
      en: 'Business owner · Seeking customers + partners · Concrete opportunities most important',
    },
    description: {
      da: 'Du driver din egen virksomhed og skal vokse. Tid er penge. Du vil netværk der konverterer til faktiske muligheder. Du er typisk virksomhedsejer eller selvstændig, har bygget noget op, men står overfor udfordringer med vækst, kunder eller partnere. Du har ikke tid til at spilde tid på events der ikke giver resultater. Du søger konkrete muligheder: nye kunder, strategiske partnere, eller folk der kan hjælpe dig med at skabe værdi. Du værdsætter direkte adgang til beslutningstagere og praktiske løsninger.',
      en: 'You run your own business and need to grow. Time is money. You want networking that converts to actual opportunities. You are typically a business owner or independent, have built something up, but face challenges with growth, customers or partners. You do not have time to waste on events that do not give results. You seek concrete opportunities: new customers, strategic partners, or people who can help you create value. You value direct access to decision-makers and practical solutions.',
    },
    benefits: {
      da: [
        'Direkte adgang til beslutningstagere (ikke gatekeepers)',
        'Potentielle kunder der allerede har købekraft',
        'Samarbejdspartnere i andre segmenter',
        'Mund-til-mund referrals når medlemmer stoler på dig',
        'Market intelligence: hvem køber hvad, hvilke budgetter findes',
      ],
      en: [
        'Direct access to decision-makers (not gatekeepers)',
        'Potential customers who already have purchasing power',
        'Collaboration partners in other segments',
        'Word-of-mouth referrals when members trust you',
        'Market intelligence: who buys what, which budgets exist',
      ],
    },
    youllMeet: {
      da: 'Procurement Managers, GMs der har budget-magt, andre entrepreneurs (nogle konkurrenter, nogle komplementære), investorer, supply chain leads.',
      en: 'Procurement Managers, GMs with budget power, other entrepreneurs (some competitors, some complementary), investors, supply chain leads.',
    },
    nextSteps: {
      da: [
        'Kom til event – men kom forberedt: Vid hvad du søger',
        'Hav din elevator pitch klar (30 sekunder, ikke salesy)',
        'Fokuser på 5 kvalitets-samtaler i stedet for 20 overfladiske',
        'Følg op dagen efter (DanCham giver dig legitimitet)',
      ],
      en: [
        "Come to event – but come prepared: Know what you're looking for",
        "Have your elevator pitch ready (30 seconds, not salesy)",
        "Focus on 5 quality conversations instead of 20 superficial ones",
        "Follow up the next day (DanCham gives you legitimacy)",
      ],
    },
    triggers: {
      businessSituation: ['own-business'],
      goals: ['new-customers'],
      eventPriorities: ['concrete-opportunities'],
    },
  },
  {
    id: 'young-hustler',
    title: {
      da: 'Young Hustler',
      en: 'The Young Hustler',
    },
    tagline: {
      da: 'Under 30 · Nyuddannet eller junior · Vil lære og bygge karriere',
      en: 'Under 30 · Recent graduate or junior · Wants to learn and build career',
    },
    description: {
      da: 'Du er sulten, ambitiøs, og ved at networking slår CV-spam. Du vil lære fra folk foran dig og bygge relationer der følger dig gennem karrieren. Du er typisk under 30 år, nyuddannet eller i starten af din karriere. Du ved at traditionelle jobansøgninger ofte ikke virker, og at de bedste muligheder kommer gennem netværk. Du er villig til at investere tid og energi i at bygge relationer, fordi du ved at det betaler sig tilbage over tid. Du søger mentors, karrierevejledning, og muligheder for at lære fra erfarne folk.',
      en: "You're hungry, ambitious, and know that networking beats CV-spam. You want to learn from people ahead of you and build relationships that follow you through your career. You are typically under 30 years old, recently graduated or at the start of your career. You know that traditional job applications often do not work, and that the best opportunities come through networking. You are willing to invest time and energy in building relationships, because you know it pays back over time. You seek mentors, career guidance, and opportunities to learn from experienced people.",
    },
    benefits: {
      da: [
        'Mentorskab fra senior professionals (mange elsker at hjælpe unge talenter)',
        'Læring du ikke får på jobbet: hvordan man bygger karriere, navigerer politik, laver strategiske valg',
        'Adgang til jobs før de slås op (mange fills gennem netværk)',
        'Community med andre young professionals i samme båd',
        'Billigere membership (student/young professional rate)',
      ],
      en: [
        'Mentorship from senior professionals (many love to help young talents)',
        "Learning you don't get at work: how to build career, navigate politics, make strategic choices",
        "Access to jobs before they're posted (many fills through network)",
        'Community with other young professionals in the same boat',
        'Cheaper membership (student/young professional rate)',
      ],
    },
    youllMeet: {
      da: 'Alt fra CEOs til andre 20-somethings. De seniore husker at de engang var unge. De fleste er åbne hvis du approacher ordentligt.',
      en: "Everything from CEOs to other 20-somethings. The seniors remember they were once young. Most are open if you approach properly.",
    },
    nextSteps: {
      da: [
        'Kom til event – vær nysgerrig, ikke desperate',
        'Spørg: "Hvad ville du ønske du vidste da du var i min alder?"',
        'Lyt mere end du taler',
        'Følg op med tak og konkrete spørgsmål',
        'Overvej membership (billigere rate for unge)',
      ],
      en: [
        'Come to event – be curious, not desperate',
        'Ask: "What do you wish you knew when you were my age?"',
        'Listen more than you talk',
        'Follow up with thanks and concrete questions',
        'Consider membership (cheaper rate for young people)',
      ],
    },
    triggers: {
      ageGroup: ['under-30'],
      businessSituation: ['young-professional'],
      goals: ['learned-from-experienced', 'career-opportunities'],
    },
  },
  {
    id: 'bridge-builder',
    title: {
      da: 'Bridge Builder',
      en: 'The Bridge Builder',
    },
    tagline: {
      da: 'Dansk-indonesisk baggrund · Arbejder med begge kulturer · Søger forbindelser',
      en: 'Danish-Indonesian background · Works with both cultures · Seeking connections',
    },
    description: {
      da: 'Du er født mellem verdener – måske dansk i Indonesien, måske indonesier med dansk erfaring. Du forstår begge kulturer og kan være broen. Du har en unik position hvor du forstår både dansk og indonesisk business-kultur. Du kæmper måske med at finde dit sted, eller du har fundet din styrke i at være cultural translator. Du søger et miljø hvor din unikke position værdsættes og hvor du kan bruge din kulturelle forståelse til at skabe værdi. Du vil møde andre der forstår kompleksiteten i at navigere mellem kulturer.',
      en: "You're born between worlds – maybe Danish in Indonesia, maybe Indonesian with Danish experience. You understand both cultures and can be the bridge. You have a unique position where you understand both Danish and Indonesian business culture. You may struggle with finding your place, or you have found your strength in being a cultural translator. You seek an environment where your unique position is valued and where you can use your cultural understanding to create value. You want to meet others who understand the complexity of navigating between cultures.",
    },
    benefits: {
      da: [
        'Et miljø hvor din unikke position værdsættes',
        'Mulighed for at være cultural translator (høj værdi!)',
        'Netværk på begge sider af relationen',
        'Validering af dine kulturelle insights',
        'Adgang til folk der forstår kompleksiteten',
      ],
      en: [
        'An environment where your unique position is valued',
        'Opportunity to be a cultural translator (high value!)',
        'Network on both sides of the relationship',
        'Validation of your cultural insights',
        'Access to people who understand the complexity',
      ],
    },
    youllMeet: {
      da: 'Expats der kæmper med kulturforskelle, lokale der arbejder for danske firmaer, mixed-background folk som dig, cultural trainers, kommunikations-eksperter.',
      en: 'Expats struggling with cultural differences, locals working for Danish companies, mixed-background people like you, cultural trainers, communication experts.',
    },
    nextSteps: {
      da: [
        'Kom til event og vær den du er',
        'Del dine kulturelle observationer (folk ELSKER det)',
        'Tilbyd at hjælpe andre med cultural navigation',
        'Byg dit brand som cultural bridge-builder',
      ],
      en: [
        'Come to event and be yourself',
        'Share your cultural observations (people LOVE it)',
        'Offer to help others with cultural navigation',
        'Build your brand as cultural bridge-builder',
      ],
    },
    triggers: {
      denmarkConnection: ['indonesian', 'work-danish-company'],
      goals: ['feel-at-home'],
    },
  },
  {
    id: 'senior-advisor',
    title: {
      da: 'Senior Advisor',
      en: 'The Senior Advisor',
    },
    tagline: {
      da: '50+ · Veteran · Deler viden og søger peers',
      en: '50+ · Veteran · Shares knowledge and seeks peers',
    },
    description: {
      da: 'Du har været her, gjort det, set det. Dit netværk er din største asset. Du søger quality over quantity. Du er typisk 50+ år, har 10+ års erfaring i Indonesien, og har set det meste. Du ved hvad der virker og hvad der ikke virker. Du søger ikke bare flere kontakter – du søger meningsfulde forbindelser med folk på dit niveau. Du værdsætter også muligheden for at give tilbage gennem mentorskab og at dele din viden med yngre generationer. Du forstår at netværk holder dig relevant og opdateret i et skiftende marked.',
      en: "You've been there, done that, seen it. Your network is your biggest asset. You seek quality over quantity. You are typically 50+ years old, have 10+ years of experience in Indonesia, and have seen most of it. You know what works and what does not work. You are not just seeking more contacts – you are seeking meaningful connections with people at your level. You also value the opportunity to give back through mentorship and to share your knowledge with younger generations. You understand that networking keeps you relevant and updated in a changing market.",
    },
    benefits: {
      da: [
        'Peers at sammenligne noter med (de challenges you face er unikke)',
        'Mulighed for at give tilbage gennem mentorskab (surprisingly rewarding)',
        'Adgang til næste generation (fresh perspectives)',
        'Strategic partnerships med andre seniore',
        'Relevant og connectet i et skiftende marked',
      ],
      en: [
        'Peers to compare notes with (the challenges you face are unique)',
        'Opportunity to give back through mentorship (surprisingly rewarding)',
        'Access to next generation (fresh perspectives)',
        'Strategic partnerships with other seniors',
        'Relevant and connected in a changing market',
      ],
    },
    youllMeet: {
      da: 'Andre veteraner, yngre talenter der søger råd, decision-makers på dit niveau, folk der transition til næste fase (nogle går på pension, nogle starter nyt).',
      en: 'Other veterans, younger talents seeking advice, decision-makers at your level, people transitioning to next phase (some retiring, some starting new).',
    },
    nextSteps: {
      da: [
        'Kom til event',
        'Del dine erfaringer generøst',
        'Find 1-2 yngre folk at mentorere',
        'Connect med peers omkring fælles challenges',
      ],
      en: [
        'Come to event',
        'Share your experiences generously',
        'Find 1-2 younger people to mentor',
        'Connect with peers around common challenges',
      ],
    },
    triggers: {
      ageGroup: ['50-plus'],
      experience: ['veteran'],
      eventPriorities: ['quality-connections'],
    },
  },
  {
    id: 'market-explorer',
    title: {
      da: 'Market Explorer',
      en: 'The Market Explorer',
    },
    tagline: {
      da: 'Ny i Indonesien · Søger forståelse og orientering · Vil lære',
      en: 'New to Indonesia · Seeking understanding and orientation · Wants to learn',
    },
    description: {
      da: 'Du er relativt ny i det indonesiske business-landskab. Alt er nyt. Du vil forstå hvordan tingene fungerer her. Du er typisk kommet til Indonesien inden for de sidste 1-2 år, eller planlægger at komme snart. Du står overfor en stejl læringskurve hvor alt fungerer anderledes end du er vant til. Du har brug for praktisk hjælp, ærlige svar, og folk der kan guide dig gennem de første udfordringer. Du søger ikke teoretisk viden – du søger real talk fra folk der har været der. Du vil undgå de fejl andre har lavet og lære hurtigere.',
      en: "You're relatively new to the Indonesian business landscape. Everything is new. You want to understand how things work here. You are typically new to Indonesia within the last 1-2 years, or planning to come soon. You face a steep learning curve where everything works differently than you are used to. You need practical help, honest answers, and people who can guide you through the first challenges. You are not seeking theoretical knowledge – you are seeking real talk from people who have been there. You want to avoid the mistakes others have made and learn faster.",
    },
    benefits: {
      da: [
        'Massiv læringskurve-forkortelse (lær fra andres fejl)',
        'Praktiske svar på konkrete spørgsmål',
        "Cultural dos and don'ts fra folk der lærte det hårde vej",
        'Realistic view (ikke poleret marketing-bullshit)',
        'Trygt rum til at stille "dumme" spørgsmål',
      ],
      en: [
        "Massive learning curve shortcut (learn from others' mistakes)",
        'Practical answers to concrete questions',
        "Cultural dos and don'ts from people who learned the hard way",
        'Realistic view (not polished marketing BS)',
        'Safe space to ask "stupid" questions',
      ],
    },
    youllMeet: {
      da: 'Veteraner der husker at være ny, andre relativt nye (I er i samme båd), lokale der kan forklare kontekst, expats der navigerer mellem kulturer.',
      en: "Veterans who remember being new, other relatively new people (you're in the same boat), locals who can explain context, expats navigating between cultures.",
    },
    nextSteps: {
      da: [
        'Kom til event med en notesbog (mentalt eller fysisk)',
        'Stil spørgsmål som: "Hvad ville du ønske du vidste når du startede?"',
        'Lyt og lær',
        'Følg op med dem der giver gode insights',
        'Giv tilbage når du selv er veteran',
      ],
      en: [
        'Come to event with a notebook (mental or physical)',
        'Ask questions like: "What do you wish you knew when you started?"',
        'Listen and learn',
        'Follow up with those who give good insights',
        "Give back when you're a veteran yourself",
      ],
    },
    triggers: {
      experience: ['completely-new', 'relatively-new'],
      goals: ['understand-market', 'learned-from-experienced'],
    },
  },
  // Additional 10 profiles
  {
    id: 'startup-founder',
    title: {
      da: 'Startup Founder',
      en: 'The Startup Founder',
    },
    tagline: {
      da: 'Iværksætter · Startup · Søger partnere og funding',
      en: 'Entrepreneur · Startup · Seeking partners and funding',
    },
    description: {
      da: 'Du er i gang med at bygge noget nyt. Du har brug for partnere, investorer, og folk der forstår startup-journeyen. Du er typisk iværksætter eller startup-founder, måske i din første eller anden venture. Du står overfor udfordringer med funding, partnere, markedsvalidering, eller at finde de rigtige mennesker til at hjælpe dig bygge. Du har brug for adgang til investorer, potentielle co-founders, og mentors der har bygget succesfulde startups. Du søger også market validation fra erfarne folk og muligheder for at lære fra andres fejl og succeser.',
      en: "You're building something new. You need partners, investors, and people who understand the startup journey. You are typically an entrepreneur or startup founder, maybe in your first or second venture. You face challenges with funding, partners, market validation, or finding the right people to help you build. You need access to investors, potential co-founders, and mentors who have built successful startups. You also seek market validation from experienced people and opportunities to learn from others' mistakes and successes.",
    },
    benefits: {
      da: [
        'Adgang til investorer og angels',
        'Potentielle co-founders eller early employees',
        'Mentorskab fra succesfulde entrepreneurs',
        'Market validation fra erfarne folk',
        'Access til accelerator programs',
      ],
      en: [
        'Access to investors and angels',
        'Potential co-founders or early employees',
        'Mentorship from successful entrepreneurs',
        'Market validation from experienced people',
        'Access to accelerator programs',
      ],
    },
    youllMeet: {
      da: 'Andre founders, investorer, tech-leaders, business angels, accelerator program managers.',
      en: 'Other founders, investors, tech-leaders, business angels, accelerator program managers.',
    },
    nextSteps: {
      da: [
        'Kom til event med klar pitch',
        'Søg specifikt efter investorer eller partners',
        'Del dine challenges åbent',
        'Byg relationer før du beder om noget',
      ],
      en: [
        'Come to event with clear pitch',
        'Seek specifically investors or partners',
        'Share your challenges openly',
        'Build relationships before asking for anything',
      ],
    },
    triggers: {
      businessSituation: ['entrepreneur'],
      goals: ['new-customers', 'know-right-people'],
    },
  },
  {
    id: 'career-transitioner',
    title: {
      da: 'Career Transitioner',
      en: 'The Career Transitioner',
    },
    tagline: {
      da: 'Søger nye muligheder · Skifter retning · Vil finde næste step',
      en: 'Seeking new opportunities · Changing direction · Wants to find next step',
    },
    description: {
      da: 'Du er klar til noget nyt. Måske skifter du branche, måske starter du selvstændig, måske søger du helt andet. Du har brug for indsigt og muligheder. Du er typisk i en transition-fase i din karriere, måske efter 5-10 år i samme rolle eller branche. Du føler at du har brug for en forandring, men er usikker på hvilken retning. Du søger inspiration, eksempler fra andre der har skiftet retning, og konkrete muligheder i nye områder. Du vil høre om andres karriereveje og lære hvordan de navigerede deres transition.',
      en: "You're ready for something new. Maybe changing industry, maybe going independent, maybe seeking something completely different. You need insights and opportunities. You are typically in a transition phase in your career, maybe after 5-10 years in the same role or industry. You feel you need a change, but are uncertain about which direction. You seek inspiration, examples from others who have changed direction, and concrete opportunities in new areas. You want to hear about others' career paths and learn how they navigated their transition.",
    },
    benefits: {
      da: [
        'Adgang til jobs i forskellige brancher',
        'Indsigt i hvordan andre skiftede retning',
        'Netværk i nye områder',
        'Mentorskab fra folk der gjorde det samme',
        'Muligheder du ikke vidste eksisterede',
      ],
      en: [
        'Access to jobs in different industries',
        'Insight into how others changed direction',
        'Network in new areas',
        'Mentorship from people who did the same',
        'Opportunities you did not know existed',
      ],
    },
    youllMeet: {
      da: 'Folk der skiftede karriere, recruiters, branche-leaders, selvstændige der startede noget nyt.',
      en: 'People who changed careers, recruiters, industry leaders, independents who started something new.',
    },
    nextSteps: {
      da: [
        'Kom til event med åbent sind',
        'Spørg om karriereveje i forskellige retninger',
        'Lyt til andres transition-stories',
        'Find 2-3 mennesker at følge op med',
      ],
      en: [
        'Come to event with open mind',
        'Ask about career paths in different directions',
        'Listen to others transition stories',
        'Find 2-3 people to follow up with',
      ],
    },
    triggers: {
      businessSituation: ['seeking-opportunities'],
      goals: ['career-opportunities'],
    },
  },
  {
    id: 'industry-specialist',
    title: {
      da: 'Industry Specialist',
      en: 'The Industry Specialist',
    },
    tagline: {
      da: 'Ekspert i specifik branche · Søger branche-netværk · Vil udvide',
      en: 'Expert in specific industry · Seeking industry network · Wants to expand',
    },
    description: {
      da: 'Du er dygtig i dit område og vil møde andre i samme branche. Du søger både konkurrenter (at lære fra) og komplementære partnere. Du har specialiseret dig i en specifik branche eller sektor og har bygget ekspertise over tid. Du ved at branche-netværk er uvurderligt for at holde dig opdateret på trends, best practices, og hvad konkurrenterne gør. Du søger både at lære fra andre i samme branche og at finde komplementære partnere du kan samarbejde med. Du værdsætter branche-specifik indsigt og muligheder for at udvide dit netværk inden for dit område.',
      en: "You're skilled in your area and want to meet others in the same industry. You seek both competitors (to learn from) and complementary partners. You have specialized in a specific industry or sector and have built expertise over time. You know that industry networks are invaluable for keeping you updated on trends, best practices, and what competitors are doing. You seek both to learn from others in the same industry and to find complementary partners you can collaborate with. You value industry-specific insights and opportunities to expand your network within your area.",
    },
    benefits: {
      da: [
        'Branche-specifikt netværk',
        'Indsigt i hvad konkurrenter gør',
        'Potentielle partnerships',
        'Market trends i dit område',
        'Best practices fra peers',
      ],
      en: [
        'Industry-specific network',
        'Insight into what competitors do',
        'Potential partnerships',
        'Market trends in your area',
        'Best practices from peers',
      ],
    },
    youllMeet: {
      da: 'Andre specialister i din branche, branche-leaders, suppliers, kunder, komplementære services.',
      en: 'Other specialists in your industry, industry leaders, suppliers, customers, complementary services.',
    },
    nextSteps: {
      da: [
        'Kom til event fokuseret på din branche',
        'Identificer 3-5 relevante mennesker',
        'Del dine insights generøst',
        'Byg branche-specifikke relationer',
      ],
      en: [
        'Come to event focused on your industry',
        'Identify 3-5 relevant people',
        'Share your insights generously',
        'Build industry-specific relationships',
      ],
    },
    triggers: {
      industry: ['production', 'tech', 'consulting', 'finance'],
      goals: ['insights-trends'],
    },
  },
  {
    id: 'cultural-connector',
    title: {
      da: 'Cultural Connector',
      en: 'The Cultural Connector',
    },
    tagline: {
      da: 'Interesseret i kultur · Søger forståelse · Vil bygge broer',
      en: 'Interested in culture · Seeking understanding · Wants to build bridges',
    },
    description: {
      da: 'Du er fascineret af kulturelle forskelle og vil forstå hvordan dansk og indonesisk business-kultur mødes. Du er nysgerrig og åben. Du har måske ingen direkte forbindelse til Danmark endnu, men er interesseret i dansk business-kultur og hvordan den fungerer. Du er typisk indonesier eller international professional der er nysgerrig på at lære om danske business-praktikker, værdier, og måder at arbejde på. Du søger et miljø hvor du kan observere og lære fra folk der faktisk lever den danske business-kultur i Indonesien. Du værdsætter real talk over teoretisk viden.',
      en: "You're fascinated by cultural differences and want to understand how Danish and Indonesian business cultures meet. You're curious and open. You may not have a direct connection to Denmark yet, but are interested in Danish business culture and how it works. You are typically Indonesian or international professional who is curious to learn about Danish business practices, values, and ways of working. You seek an environment where you can observe and learn from people who actually live the Danish business culture in Indonesia. You value real talk over theoretical knowledge.",
    },
    benefits: {
      da: [
        'Kulturel læring fra begge sider',
        'Forståelse af cross-cultural business',
        'Netværk med både danskere og indonesiere',
        'Insights i kulturelle nuancer',
        'Mulighed for at være cultural bridge',
      ],
      en: [
        'Cultural learning from both sides',
        'Understanding of cross-cultural business',
        'Network with both Danes and Indonesians',
        'Insights into cultural nuances',
        'Opportunity to be cultural bridge',
      ],
    },
    youllMeet: {
      da: 'Cultural trainers, expats, lokale der arbejder cross-culture, kommunikations-eksperter, folk med mixed backgrounds.',
      en: 'Cultural trainers, expats, locals working cross-culture, communication experts, people with mixed backgrounds.',
    },
    nextSteps: {
      da: [
        'Kom til event med nysgerrighed',
        'Stil spørgsmål om kulturelle forskelle',
        'Del dine observationer',
        'Byg relationer på tværs af kulturer',
      ],
      en: [
        'Come to event with curiosity',
        'Ask questions about cultural differences',
        'Share your observations',
        'Build relationships across cultures',
      ],
    },
    triggers: {
      denmarkConnection: ['interested'],
      goals: ['feel-at-home'],
    },
  },
  {
    id: 'network-builder',
    title: {
      da: 'Network Builder',
      en: 'The Network Builder',
    },
    tagline: {
      da: 'Fokuserer på netværk · Kvalitet over kvantitet · Bygger langsigtet',
      en: 'Focuses on network · Quality over quantity · Building long-term',
    },
    description: {
      da: 'Du ved at netværk er alt. Du bygger langsigtet relationer og søger kvalitet over kvantitet. Du investerer i mennesker. Du forstår at de bedste business-muligheder kommer fra dybe, tillidsbaserede relationer, ikke fra at samle visitkort. Du er villig til at investere tid i at bygge ægte forbindelser, fordi du ved at det betaler sig tilbage over tid. Du søger ikke bare flere kontakter – du søger mennesker du kan have en gensidig, langsigtet relation med. Du værdsætter kvalitet over kvantitet og er villig til at give før du får.',
      en: "You know that network is everything. You build long-term relationships and seek quality over quantity. You invest in people. You understand that the best business opportunities come from deep, trust-based relationships, not from collecting business cards. You are willing to invest time in building genuine connections, because you know it pays back over time. You are not just seeking more contacts – you are seeking people you can have a mutual, long-term relationship with. You value quality over quantity and are willing to give before you get.",
    },
    benefits: {
      da: [
        'Kvalitets-forbindelser der varer',
        'Langsigtet netværk',
        'Gensidig værdi over tid',
        'Trust-baserede relationer',
        'Access til folks netværk gennem tillid',
      ],
      en: [
        'Quality connections that last',
        'Long-term network',
        'Mutual value over time',
        'Trust-based relationships',
        "Access to people's networks through trust",
      ],
    },
    youllMeet: {
      da: 'Andre network-builders, relationship-focused folk, langsigtet tænkende mennesker, trust-builders.',
      en: 'Other network-builders, relationship-focused people, long-term thinking people, trust-builders.',
    },
    nextSteps: {
      da: [
        'Kom til event med langsigtet mindset',
        'Fokuser på få dybe samtaler',
        'Byg tillid først',
        'Følg op konsekvent',
      ],
      en: [
        'Come to event with long-term mindset',
        'Focus on few deep conversations',
        'Build trust first',
        'Follow up consistently',
      ],
    },
    triggers: {
      eventPriorities: ['quality-connections'],
      goals: ['bigger-network'],
    },
  },
  {
    id: 'knowledge-seeker',
    title: {
      da: 'Knowledge Seeker',
      en: 'The Knowledge Seeker',
    },
    tagline: {
      da: 'Vil lære · Søger indsigt · Åben for nye perspektiver',
      en: 'Wants to learn · Seeking insight · Open to new perspectives',
    },
    description: {
      da: 'Du er nysgerrig og vil lære. Du søger indsigt, perspektiver, og viden du ikke kan få andre steder. Du værdsætter real talk. Du er typisk en læringsorienteret person der ved at den bedste viden kommer fra praktikere, ikke fra bøger eller teorier. Du søger ærlige, praktiske indsigt fra folk der faktisk har oplevet det. Du vil høre om både succeser og fejl, fordi du ved at man lærer mest fra real stories. Du stiller gode spørgsmål og lytter aktivt. Du værdsætter muligheden for at lære fra erfarne folk og få forskellige perspektiver på samme problem.',
      en: "You're curious and want to learn. You seek insights, perspectives, and knowledge you can't get elsewhere. You value real talk. You are typically a learning-oriented person who knows that the best knowledge comes from practitioners, not from books or theories. You seek honest, practical insights from people who have actually experienced it. You want to hear about both successes and failures, because you know you learn most from real stories. You ask good questions and listen actively. You value the opportunity to learn from experienced people and get different perspectives on the same problem.",
    },
    benefits: {
      da: [
        'Real insights fra praktikere',
        'Læring du ikke får i bøger',
        'Forskellige perspektiver på samme problem',
        'Access til erfarne folk',
        'Praktisk viden der virker',
      ],
      en: [
        'Real insights from practitioners',
        "Learning you don't get in books",
        'Different perspectives on same problem',
        'Access to experienced people',
        'Practical knowledge that works',
      ],
    },
    youllMeet: {
      da: 'Erfarne folk der deler generøst, thought leaders, praktikere med real stories, lærings-orienterede mennesker.',
      en: 'Experienced people who share generously, thought leaders, practitioners with real stories, learning-oriented people.',
    },
    nextSteps: {
      da: [
        'Kom til event med notesbog',
        'Stil gode spørgsmål',
        'Lyt aktivt',
        'Følg op med tak og flere spørgsmål',
      ],
      en: [
        'Come to event with notebook',
        'Ask good questions',
        'Listen actively',
        'Follow up with thanks and more questions',
      ],
    },
    triggers: {
      eventPriorities: ['learning'],
      goals: ['learned-from-experienced', 'understand-market'],
    },
  },
  {
    id: 'social-connector',
    title: {
      da: 'Social Connector',
      en: 'The Social Connector',
    },
    tagline: {
      da: 'Værdsætter det sociale · Business + venskab · Mennesker først',
      en: 'Values the social · Business + friendship · People first',
    },
    description: {
      da: 'Du ved at det bedste business kommer fra ægte relationer. Du værdsætter det sociale aspekt og vil møde mennesker, ikke bare kontakter. Du er typisk en person der værdsætter det menneskelige aspekt af business. Du ved at de bedste samarbejder opstår når folk faktisk kan lide hinanden og har et gensidigt respekt. Du søger ikke bare business-kontakter – du søger mennesker du kan have en ægte relation med. Du værdsætter også det sociale support-netværk, især hvis du er ny i landet. Du vil møde folk der forstår både business og det personlige.',
      en: "You know that the best business comes from real relationships. You value the social aspect and want to meet people, not just contacts. You are typically a person who values the human aspect of business. You know that the best collaborations arise when people actually like each other and have mutual respect. You are not just seeking business contacts – you are seeking people you can have a genuine relationship with. You also value the social support network, especially if you are new to the country. You want to meet people who understand both business and the personal.",
    },
    benefits: {
      da: [
        'Ægte venskaber gennem business',
        'Social support i et nyt land',
        'Mennesker først, business efter',
        'Community feeling',
        'Langsigtet relationer baseret på gensidig respekt',
      ],
      en: [
        'Real friendships through business',
        'Social support in a new country',
        'People first, business after',
        'Community feeling',
        'Long-term relationships based on mutual respect',
      ],
    },
    youllMeet: {
      da: 'Folk der også værdsætter det sociale, expats der søger community, mennesker der bygger relationer langsigtet.',
      en: 'People who also value the social, expats seeking community, people building relationships long-term.',
    },
    nextSteps: {
      da: [
        'Kom til event med åbent sind',
        'Fokuser på at kende folk som mennesker',
        'Byg relationer uden agenda',
        'Bliv en del af community',
      ],
      en: [
        'Come to event with open mind',
        'Focus on knowing people as humans',
        'Build relationships without agenda',
        'Become part of community',
      ],
    },
    triggers: {
      eventPriorities: ['social-connection'],
      goals: ['feel-at-home'],
    },
  },
  {
    id: 'strategic-partner',
    title: {
      da: 'Strategic Partner',
      en: 'The Strategic Partner',
    },
    tagline: {
      da: 'Søger strategiske samarbejder · Win-win · Langsigtet partnerships',
      en: 'Seeking strategic collaborations · Win-win · Long-term partnerships',
    },
    description: {
      da: 'Du søger ikke bare kunder eller partnere – du søger strategiske samarbejder der skaber værdi for begge parter over tid. Du er typisk virksomhedsejer eller leder der tænker langsigtet. Du forstår at de bedste partnerships er dem der skaber synergier og værdi for begge sider. Du søger ikke bare enkeltstående transaktioner – du søger samarbejder der kan vokse og udvikle sig over tid. Du værdsætter win-win situationer og er villig til at investere i at bygge strategiske relationer. Du ser muligheder for at kombinere styrker med andre virksomheder.',
      en: "You're not just seeking customers or partners – you're seeking strategic collaborations that create value for both parties over time. You are typically a business owner or leader who thinks long-term. You understand that the best partnerships are those that create synergies and value for both sides. You are not just seeking individual transactions – you are seeking collaborations that can grow and develop over time. You value win-win situations and are willing to invest in building strategic relationships. You see opportunities to combine strengths with other companies.",
    },
    benefits: {
      da: [
        'Strategiske partnerships',
        'Win-win samarbejder',
        'Langsigtet værdi',
        'Komplementære partnere',
        'Synergier mellem virksomheder',
      ],
      en: [
        'Strategic partnerships',
        'Win-win collaborations',
        'Long-term value',
        'Complementary partners',
        'Synergies between companies',
      ],
    },
    youllMeet: {
      da: 'Andre virksomhedsejere, strategiske tænkere, folk der bygger langsigtet, potential partners.',
      en: 'Other business owners, strategic thinkers, people building long-term, potential partners.',
    },
    nextSteps: {
      da: [
        'Kom til event med klar vision',
        'Identificer komplementære virksomheder',
        'Fokuser på synergier',
        'Byg partnerships langsigtet',
      ],
      en: [
        'Come to event with clear vision',
        'Identify complementary companies',
        'Focus on synergies',
        'Build partnerships long-term',
      ],
    },
    triggers: {
      businessSituation: ['own-business'],
      goals: ['new-customers', 'know-right-people'],
      eventPriorities: ['concrete-opportunities'],
    },
  },
  {
    id: 'diplomatic-connector',
    title: {
      da: 'Diplomatic Connector',
      en: 'The Diplomatic Connector',
    },
    tagline: {
      da: 'Repræsenterer danske interesser · Officiel rolle · Bygger broer',
      en: 'Represents Danish interests · Official role · Building bridges',
    },
    description: {
      da: 'Du repræsenterer danske interesser i Indonesien – måske gennem ambassade, Trade Council, eller organisation. Du bygger broer mellem lande. Du har en officiel eller semi-officiel rolle hvor du faciliterer forbindelser mellem Danmark og Indonesien. Du søger et netværk hvor du kan møde både danske og indonesiske beslutningstagere, og hvor du kan bruge DanCham som platform for at fremme danske interesser. Du værdsætter adgang til policy-makers, høj-niveau business leaders, og muligheden for at bygge strategiske forbindelser på begge sider.',
      en: "You represent Danish interests in Indonesia – maybe through embassy, Trade Council, or organization. You're building bridges between countries. You have an official or semi-official role where you facilitate connections between Denmark and Indonesia. You seek a network where you can meet both Danish and Indonesian decision-makers, and where you can use DanCham as a platform to promote Danish interests. You value access to policy-makers, high-level business leaders, and the opportunity to build strategic connections on both sides.",
    },
    benefits: {
      da: [
        'Netværk til både danske og indonesiske beslutningstagere',
        'Indsigt i business-landskabet',
        'Access til policy-makers',
        'Platform for at fremme danske interesser',
        'Forbindelser på højeste niveau',
      ],
      en: [
        'Network to both Danish and Indonesian decision-makers',
        'Insight into business landscape',
        'Access to policy-makers',
        'Platform to promote Danish interests',
        'Connections at highest level',
      ],
    },
    youllMeet: {
      da: 'Andre diplomater, Trade Council folk, ambassade-personale, høj-niveau business leaders, policy-makers.',
      en: 'Other diplomats, Trade Council people, embassy staff, high-level business leaders, policy-makers.',
    },
    nextSteps: {
      da: [
        'Kom til event med officiel rolle i baghovedet',
        'Byg relationer på begge sider',
        'Facilitér connections',
        'Brug DanCham som platform',
      ],
      en: [
        'Come to event with official role in mind',
        'Build relationships on both sides',
        'Facilitate connections',
        'Use DanCham as platform',
      ],
    },
    triggers: {
      businessSituation: ['danish-interest'],
      denmarkConnection: ['danish', 'company-collaborates'],
    },
  },
  {
    id: 'mid-career-accelerator',
    title: {
      da: 'Mid-Career Accelerator',
      en: 'The Mid-Career Accelerator',
    },
    tagline: {
      da: '30-40 år · Etablerer sig · Vil accelerere karriere',
      en: '30-40 years · Establishing yourself · Wants to accelerate career',
    },
    description: {
      da: 'Du er i midten af din karriere. Du har erfaring, men vil til næste level. Du søger både mentors og muligheder for at vokse. Du er typisk 30-40 år gammel, har 5-10 års erfaring, og er klar til at accelerere din karriere. Du har bygget et fundament, men søger nu det næste skridt opad. Du ved at det kræver både kompetencer og netværk. Du søger mentors der kan guide dig, peers du kan lære sammen med, og muligheder for at blive synlig for decision-makers. Du forstår at karriere-accelerering kræver strategisk netværk og adgang til næste level jobs.',
      en: "You're in the middle of your career. You have experience, but want the next level. You seek both mentors and opportunities to grow. You are typically 30-40 years old, have 5-10 years of experience, and are ready to accelerate your career. You have built a foundation, but are now seeking the next step up. You know it requires both skills and network. You seek mentors who can guide you, peers you can learn together with, and opportunities to become visible to decision-makers. You understand that career acceleration requires strategic networking and access to next level jobs.",
    },
    benefits: {
      da: [
        'Mentorskab fra seniore',
        'Access til næste level jobs',
        'Netværk der accelererer karriere',
        'Indsigt i leadership',
        'Strategic career advice',
      ],
      en: [
        'Mentorship from seniors',
        'Access to next level jobs',
        'Network that accelerates career',
        'Insight into leadership',
        'Strategic career advice',
      ],
    },
    youllMeet: {
      da: 'Andre mid-career folk, seniore der kan mentorere, decision-makers, folk der klatrede samme vej.',
      en: 'Other mid-career people, seniors who can mentor, decision-makers, people who climbed the same path.',
    },
    nextSteps: {
      da: [
        'Kom til event med klare karriere-mål',
        'Søg specifikt efter mentors',
        'Byg relationer med seniore',
        'Følg op strategisk',
      ],
      en: [
        'Come to event with clear career goals',
        'Seek specifically mentors',
        'Build relationships with seniors',
        'Follow up strategically',
      ],
    },
    triggers: {
      ageGroup: ['30-40'],
      goals: ['career-opportunities', 'bigger-network'],
    },
  },
];

