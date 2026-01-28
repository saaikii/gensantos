import React from 'react';
import {
  Landmark, Gavel, Calculator, UserCog, PieChart, Banknote, UserCheck,
  Leaf, Home, TrendingUp, HardHat, Trees, Package, ClipboardCheck,
  Scale, Map, Users, HeartHandshake, Stethoscope, Activity, FileText,
  Shield, Building2, Recycle, BookOpen, Briefcase, Hammer, Truck,
  LandPlot, Megaphone, MonitorSmartphone, Accessibility, UserPlus,
  Medal, GraduationCap, HeartPulse, Coins, Trash2, Book, Scroll, Store,
  Cross
} from 'lucide-react';

export interface SearchResult {
  id: string | number;
  name: string;
  description: string;
  type: 'department' | 'service' | 'news' | 'announcement' | 'activity';
  link?: string;
  icon?: React.ReactNode;
  category?: string;
  date?: string;
  image?: string;
}

export const departments = [
  { id: 'dept-1', name: "City Mayor's Office", icon: <Landmark />, description: "Executive direction and control over all city government operations.", type: 'department' as const, category: 'executive' },
  { id: 'dept-2', name: "Sangguniang Panlungsod", icon: <Gavel />, description: "Legislative body of the city government.", type: 'department' as const, category: 'executive' },
  { id: 'dept-3', name: "City Accountant's Office", icon: <Calculator />, description: "In charge of the accounting and internal audit services of the city.", type: 'department' as const, category: 'finance' },
  { id: 'dept-4', name: "City Administrator's Office", icon: <UserCog />, description: "Develops plans and strategies on management and administration-related programs.", type: 'department' as const, category: 'finance' },
  { id: 'dept-5', name: "City Budget Office", icon: <PieChart />, description: "Responsible for the budget administration and management of the city.", type: 'department' as const, category: 'finance' },
  { id: 'dept-6', name: "City Treasurer's Office", icon: <Banknote />, description: "Collection of taxes, fees, charges, and other impositions.", type: 'department' as const, category: 'finance' },
  { id: 'dept-7', name: "Human Resource Office", icon: <UserCheck />, description: "Responsible for the recruitment, selection, and placement of personnel.", type: 'department' as const, category: 'finance' },
  { id: 'dept-8', name: "City Agriculturist's Office", icon: <Leaf />, description: "Promotion of agricultural growth and development.", type: 'department' as const, category: 'services' },
  { id: 'dept-9', name: "City Assessor's Office", icon: <Home />, description: "Appraisal and assessment of real properties for taxation purposes.", type: 'department' as const, category: 'services' },
  { id: 'dept-10', name: "City Economic Management", icon: <TrendingUp />, description: "Formulation of economic development plans and policies.", type: 'department' as const, category: 'services' },
  { id: 'dept-11', name: "City Engineer's Office", icon: <HardHat />, description: "Infrastructure development and public works engineering.", type: 'department' as const, category: 'services' },
  { id: 'dept-12', name: "Environment & Natural Resources", icon: <Trees />, description: "Protection and conservation of the city's natural resources.", type: 'department' as const, category: 'services' },
  { id: 'dept-13', name: "City General Services Office", icon: <Package />, description: "Management of supply and property, and general services.", type: 'department' as const, category: 'public' },
  { id: 'dept-14', name: "City Housing & Land Management", icon: <Home />, description: "Housing and land management programs for the city.", type: 'department' as const, category: 'public' },
  { id: 'dept-15', name: "City Internal Audit Services", icon: <ClipboardCheck />, description: "Internal audit services for effective local governance.", type: 'department' as const, category: 'public' },
  { id: 'dept-16', name: "City Legal Office", icon: <Scale />, description: "Legal assistance and support to the city government.", type: 'department' as const, category: 'public' },
  { id: 'dept-17', name: "City Planning & Development", icon: <Map />, description: "Formulation of comprehensive development plans.", type: 'department' as const, category: 'public' },
  { id: 'dept-18', name: "City Population Management", icon: <Users />, description: "Implementation of population management programs.", type: 'department' as const, category: 'public' },
  { id: 'dept-19', name: "Social Welfare & Development", icon: <HeartHandshake />, description: "Delivery of basic social welfare services.", type: 'department' as const, category: 'social' },
  { id: 'dept-20', name: "City Veterinarian's Office", icon: <Stethoscope />, description: "Veterinary services and animal welfare programs.", type: 'department' as const, category: 'social' },
  { id: 'dept-21', name: "City Health Office", icon: <Activity />, description: "Health services and medical assistance programs.", type: 'department' as const, category: 'social' },
  { id: 'dept-22', name: "Dr. Jorge P. Royeca Hospital", icon: <Building2 />, description: "City government-run tertiary hospital.", type: 'department' as const, category: 'social' },
  { id: 'dept-23', name: "Local Civil Registrar", icon: <FileText />, description: "Civil registration services for vital events.", type: 'department' as const, category: 'social' },
  { id: 'dept-24', name: "Public Safety Office", icon: <Shield />, description: "Ensures public safety and order in the city.", type: 'department' as const, category: 'social' },
  { id: 'dept-25', name: "Office of Building Officials", icon: <Building2 />, description: "Regulation of building construction and maintenance.", type: 'department' as const, category: 'social' },
  { id: 'dept-26', name: "Waste Management Office", icon: <Recycle />, description: "Solid waste management and disposal services.", type: 'department' as const, category: 'social' },
  { id: 'dept-27', name: "Youth Affairs Development Office", icon: <GraduationCap />, description: "The City Mayor’s Office – Youth Affairs Development Office (YADO) is a local government unit that plans and implements programs for youth development, empowerment, and protection under the City Mayor’s leadership.\n\nIt coordinates with schools, barangays, youth councils, and partner organizations to promote youth leadership, skills training, volunteerism, health and well-being, sports, arts, and livelihood opportunities, while also ensuring that youth concerns are included in city plans and policies through consultations and community engagement.", type: 'department' as const, category: 'social' },
  { id: 'dept-28', name: "Information and Communications Technology Division", icon: <MonitorSmartphone />, description: "Manages and maintains the city government's ICT infrastructure and systems.", type: 'department' as const, category: 'services' }
];

export const services = [
  { id: 'svc-1', name: "LGU-GENSAN Citizen’s Charter 2026-1st Edition (FULL)", link: "https://gensantos.gov.ph/general-santos-city/citizens-charter/lgu-gensan-citizens-charter-2025-1st-edition/", icon: <BookOpen />, type: 'service' as const, description: "Official 2026 iteration of GenSan's Citizen's Charter.", category: 'executive' },
  { id: 'svc-2', name: "City Accountant’s Office", link: "https://drive.google.com/file/d/1cSUpbK6Yv1rmgu7zknWq-p4q4XUkpGpp/view?usp=sharing", icon: <Calculator />, type: 'service' as const, description: "Accounting and internal audit service guides.", category: 'finance' },
  { id: 'svc-3', name: "City Administrator’s Office", link: "https://drive.google.com/file/d/1TTGDXStXldHdA15tauUTu2_IUeOoPajs/view?usp=sharing", icon: <Briefcase />, type: 'service' as const, description: "Administrative program guides.", category: 'executive' },
  { id: 'svc-4', name: "City Agriculturist’s Office", link: "https://drive.google.com/file/d/1TMVUxlK42QUROHXxpA5w7pv-uyZ-bKQQ/view?usp=sharing", icon: <Leaf />, type: 'service' as const, description: "Agricultural growth promotion guides.", category: 'services' },
  { id: 'svc-5', name: "City Assessor’s Office", link: "https://drive.google.com/file/d/1U2RUrFgZ0J49E17ZSDs-0IKLPLq_WZjV/view?usp=sharing", icon: <Home />, type: 'service' as const, description: "Real property appraisal and assessment guides.", category: 'finance' },
  { id: 'svc-6', name: "City Budget Office", link: "https://drive.google.com/file/d/1XXLXbNOz7e-kgVf1j0jE3YakC_wpNHph/view?usp=sharing", icon: <Coins />, type: 'service' as const, description: "Budget administration guides.", category: 'finance' },
  { id: 'svc-7', name: "City Economic Management & Cooperative Dev't", link: "https://drive.google.com/file/d/1EU7WdH9UFcxfyfIT7i01wz1XxP5Ht6PL/view?usp=sharing", icon: <TrendingUp />, type: 'service' as const, description: "Economic development plan guides.", category: 'services' },
  { id: 'svc-8', name: "City Engineer’s Office", link: "https://drive.google.com/file/d/17HlADOoOS7nmIA-ocaIdXZUxAVvCm-gL/view?usp=sharing", icon: <Hammer />, type: 'service' as const, description: "Infrastructure and engineering service guides.", category: 'services' },
  { id: 'svc-9', name: "City Environment & Natural Resources", link: "https://drive.google.com/file/d/1uIatx_ga_Suk1Ib5SNKsfDqZxt6U6Ry3/view?usp=sharing", icon: <Trees />, type: 'service' as const, description: "Environment protection guides.", category: 'services' },
  { id: 'svc-10', name: "City General Services Office", link: "https://drive.google.com/file/d/1zyYtUzmoDYvw9Az3mLdwgLuoyi7ozQgX/view?usp=sharing", icon: <Truck />, type: 'service' as const, description: "Supply and property management guides.", category: 'services' },
  { id: 'svc-11', name: "City Housing & Land Management", link: "https://drive.google.com/file/d/1gX0Ofq7vefPq1LfucwIB1oP5Uyh4VO_u/view?usp=sharing", icon: <LandPlot />, type: 'service' as const, description: "Housing and land program guides.", category: 'services' },
  { id: 'svc-12', name: "City Internal Audit Services", link: "https://drive.google.com/file/d/1FqCvdkUB0XXOjAI_k9yteHygxuuqJTCS/view?usp=sharing", icon: <ClipboardCheck />, type: 'service' as const, description: "Audit service guides.", category: 'executive' },
  { id: 'svc-13', name: "City Legal Office", link: "https://drive.google.com/file/d/1CVvS0AW6kXIhWhLNv6u0CF5unEI644-y/view?usp=sharing", icon: <Scale />, type: 'service' as const, description: "Legal assistance guides.", category: 'executive' },
  { id: 'svc-14', name: "City Mayor’s Office (Main)", link: "https://drive.google.com/file/d/18zJQ9oMoZ1bHQwcweT-BLq-SDTSXCaM1/view?usp=drive_link", icon: <Building2 />, type: 'service' as const, description: "Primary office service guides.", category: 'executive' },
  { id: 'svc-15', name: "CMO - Public Information Office", link: "https://drive.google.com/file/d/1zjh3imVZe71sW_BNoKNzuKpj95c_-MYk/view?usp=sharing", icon: <Megaphone />, type: 'service' as const, description: "Information office guides.", category: 'executive' },
  { id: 'svc-16', name: "CMO - AKLAT", link: "https://drive.google.com/file/d/1jqxfOqr7G5jMvHvy7MCNTzBtoOMohL1j/view", icon: <Book />, type: 'service' as const, description: "Library and literacy program guides.", category: 'executive' },
  { id: 'svc-17', name: "CMO - Integrated Barangay Affairs", link: "https://drive.google.com/file/d/1FTvhI6R3nRDcZW2jo_7bJduQ30GPAc2i/view?usp=sharing", icon: <HeartHandshake />, type: 'service' as const, description: "Barangay affairs guides.", category: 'executive' },
  { id: 'svc-18', name: "CMO - Bids and Awards Committee", link: "https://drive.google.com/file/d/1kOmgz5wZAmfjmRPhSPXWRzXuPFwulc8K/view?usp=sharing", icon: <Gavel />, type: 'service' as const, description: "Procurement and bidding guides.", category: 'finance' },
  { id: 'svc-19', name: "CMO - ICT Division", link: "https://drive.google.com/file/d/15HJx4zlC0rdSD-f4SI4cdmySdhBlv_dy/view?usp=drive_link", icon: <MonitorSmartphone />, type: 'service' as const, description: "Information technology guides.", category: 'services' },
  { id: 'svc-20', name: "CMO - Business Permits & Licenses", link: "https://drive.google.com/file/d/14nWcQyUUKpN2CfceE3x6DLgTn1gE_hag/view?usp=sharing", icon: <Store />, type: 'service' as const, description: "Business licensing guides.", category: 'services' },
  { id: 'svc-21', name: "CMO - Persons with Disabilities Affairs", link: "https://drive.google.com/file/d/1Y6P3nYB-REld39qnbhDJ00e2gUPn97As/view?usp=sharing", icon: <Accessibility />, type: 'service' as const, description: "PWD support guides.", category: 'social' },
  { id: 'svc-22', name: "CMO - Public Employment Services", link: "https://drive.google.com/file/d/1TXtdGtov0ekS15eMl6VnGQOEG0sopL4X/view?usp=sharing", icon: <UserPlus />, type: 'service' as const, description: "Employment and placement guides.", category: 'social' },
  { id: 'svc-23', name: "CMO - Sports & Games Development", link: "https://drive.google.com/file/d/1I3jpD4kDSSwitQcFfjFU9PoaAZcSD6Kx/view?usp=sharing", icon: <Medal />, type: 'service' as const, description: "Sports development guides.", category: 'social' },
  { id: 'svc-24', name: "CMO - Youth Affairs & Development", link: "https://drive.google.com/file/d/1ASD7FUYjP6KJyoHAfYsP3BgxIX4UmG4P/view?usp=sharing", icon: <GraduationCap />, type: 'service' as const, description: "Youth program guides.", category: 'social' },
  { id: 'svc-25', name: "City Planning & Development", link: "https://drive.google.com/file/d/1mzmXvR9bv8ysYQ6ofzJvLGr4e10AGsVq/view?usp=sharing", icon: <Map />, type: 'service' as const, description: "Comprehensive development guides.", category: 'executive' },
  { id: 'svc-26', name: "City Population Management", link: "https://drive.google.com/file/d/1Tkr2fOQCwe9MphSrreKe2cBj-0kW445Y/view?usp=sharing", icon: <Users />, type: 'service' as const, description: "Population program guides.", category: 'social' },
  { id: 'svc-27', name: "City Social Welfare & Development", link: "https://drive.google.com/file/d/147kWE66KAst4QgPDSV1p22WQsJrn_-sM/view?usp=sharing", icon: <HeartPulse />, type: 'service' as const, description: "Social welfare guides.", category: 'social' },
  { id: 'svc-28', name: "City Treasurer’s Office", link: "https://drive.google.com/file/d/1R3-MRAhLXqd9xHVwhBwR6ot41Z9irCyv/view?usp=sharing", icon: <Banknote />, type: 'service' as const, description: "Tax collection guides.", category: 'finance' },
  { id: 'svc-29', name: "City Veterinarian’s Office", link: "https://drive.google.com/file/d/1JTTEYG-kigutJr7IYsd3rphk2J1kCkCM/view?usp=sharing", icon: <Stethoscope />, type: 'service' as const, description: "Animal welfare guides.", category: 'services' },
  { id: 'svc-30', name: "City Health Office", link: "https://drive.google.com/file/d/1m5-uFFtHnq5p45VY3_0fjShiRGU6jcW9/view?usp=sharing", icon: <Activity />, type: 'service' as const, description: "Medical assistance guides.", category: 'social' },
  { id: 'svc-31', name: "Dr. Jorge P. Royeca City Hospital", link: "https://drive.google.com/file/d/1Tv2V976N0l9RVoFArS_5BeeQKUs0mYIm/view?usp=sharing", icon: <Cross />, type: 'service' as const, description: "Tertiary hospital guides.", category: 'social' },
  { id: 'svc-32', name: "Human Resource Management", link: "https://drive.google.com/file/d/18F9lFgKYSdMurhYbrNRoZptfCSUUzYOK/view?usp=sharing", icon: <UserCheck />, type: 'service' as const, description: "Personnel recruitment guides.", category: 'finance' },
  { id: 'svc-33', name: "Local Civil Registrar", link: "https://drive.google.com/file/d/1vA2EhGdrSPQ8WIRCw6hBqCcxDx-IIejN/view?usp=sharing", icon: <Scroll />, type: 'service' as const, description: "Civil registration guides.", category: 'services' },
  { id: 'svc-34', name: "Office of the Building Official", link: "https://drive.google.com/file/d/1duBFBv1qPvqGWGjdO_hk0sA09c4IrQvE/view?usp=sharing", icon: <HardHat />, type: 'service' as const, description: "Construction regulation guides.", category: 'services' },
  { id: 'svc-35', name: "Public Safety Office", link: "https://drive.google.com/file/d/1R7Ql7-iVkFruwKjULgGDiWNIQwYpegOn/view?usp=sharing", icon: <Shield />, type: 'service' as const, description: "Public order guides.", category: 'social' },
  { id: 'svc-36', name: "Sangguniang Panlungsod (Vice Mayor)", link: "https://drive.google.com/file/d/1M760MgOg8f9pArN6Aqlauku2doroakP-/view?usp=sharing", icon: <Gavel />, type: 'service' as const, description: "Legislative guides.", category: 'executive' },
  { id: 'svc-37', name: "Waste Management Office", link: "https://drive.google.com/file/d/1Brouu9YKb1HwPRLrGxteaxneVew_wptb/view?usp=drive_link", icon: <Trash2 />, type: 'service' as const, description: "Solid waste guides.", category: 'services' }
];

export const newsItems = [
  { id: 'news-1', title: "Ribbon Cutting & Turnover Ceremony", category: "News", date: "December 09, 2025", image: "/images/news_ribbon_cutting.jpg", summary: "Mayor Lorelie Pacquiao leads the Ribbon Cutting and Turnover ceremony with the theme 'From Hands that Built to Hearts that Serve: The Turnover of MEBA's Legacy'.", type: 'news' as const },
  { id: 'news-2', title: "LGU Institutionalizes Oversight on National Projects", category: "News", date: "January 20, 2026", image: "/images/news_lgu_oversight.png", summary: "GENERAL SANTOS CITY — National government agencies will soon be required to closely coordinate with the city government before implementing nationally funded projects, as the City Council moves to institutionalize stronger oversight and information-sharing on major developments within the city.", type: 'news' as const },
  { id: 'news-3', title: "428 families in Gensan get food assistance from DSWD’s Walang Gutom Program 2026", category: "News", date: "January 21, 2026", image: "/images/news_good_governance.jpg", summary: "GENERAL SANTOS CITY (PIA) — A total of 428 families from different barangays in General Santos City have become the first beneficiaries of the Walang Gutom Program for this year, which was recently launched by the Department of Social Welfare and Development (DSWD) in the city.", type: 'news' as const },
  { id: 'ann-1', title: "READ | EXECUTIVE ORDER NO. 72, S. 2026", category: "Announcement", date: "January 16, 2026", image: "/images/announcement.jpg", summary: "EXECUTIVE ORDER DECLARING SUSPENSION OF CLASSES AT ALL LEVELS IN PUBLIC AND PRIVATE SCHOOLS AND SUSPENSION OF WORK IN GOVERNMENT OFFICES WTTHIN GENERAL SANTOS CITY ON JANUARY 16, 2026, IN OBSERVANCE OF ISRA WAL MIRAJ (THE NOCTURNAL JOURNEY AND ASCENSION OF PROPHET MUHAMMAD, S.A.W)", type: 'announcement' as const },
  { id: 'ann-2', title: "Business Tax Payment Deadline Extended", category: "Announcement", date: "January 15, 2026", image: "/business_tax_deadline.png", summary: "The City Treasurer's Office announces the extension of the deadline for the 1st quarter business tax payment.", type: 'announcement' as const },
  { id: 'ann-3', title: "Road Closure Advisory: Pioneer Avenue", category: "Announcement", date: "January 14, 2026", image: "/road_closure_pioneer.png", summary: "Please be advised of the temporary road closure at Pioneer Avenue for road widening projects starting next week.", type: 'announcement' as const },
  { id: 'act-1', title: "GenSan Prepares for Kalilangan Festival 2026", category: "Activities", date: "January 15, 2026", image: "/images/kalilangan_festival.png", summary: "The city government announces the schedule of activities for the upcoming Kalilangan Festival.", type: 'activity' as const },
  { id: 'act-2', title: "Sunday Zumba at the Oval Plaza", category: "Activities", date: "Every Sunday", image: "/zumba_oval_plaza.png", summary: "Join the weekly community fitness program every Sunday morning at the Oval Plaza.", type: 'activity' as const },
  { id: 'act-3', title: "Inter-Barangay Basketball League Finals", category: "Activities", date: "January 20, 2026", image: "/basketball_league.jpg", summary: "Championship match between Brgy. Lagao and Brgy. Calumpang at the City Gym.", type: 'activity' as const },
];

export const allSearchableData: SearchResult[] = [
  ...departments.map(d => ({ ...d, type: 'department' as const })),
  ...services.map(s => ({ ...s, type: 'service' as const, description: s.description || '' })),
  ...newsItems.map(n => ({
    ...n,
    type: n.type,
    name: n.title,
    description: n.summary
  }))
];
