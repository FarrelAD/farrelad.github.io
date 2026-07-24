export interface ProjectEntry {
  title: string;
  role: string;
  date: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface SingleRoleExperience {
  role: string;
  company: string;
  date: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  projects?: never;
}

export interface MultiProjectExperience {
  company: string;
  date: string;
  projects: ProjectEntry[];
  role?: never;
  description?: never;
  responsibilities?: never;
  tags?: never;
}

export type ExperienceEntry = SingleRoleExperience | MultiProjectExperience;

export const experienceList: ExperienceEntry[] = [
  {
    role: 'Research Assistant - Backend Developer',
    company: 'RECLICKS FINCAPES IoT Smart Farming Sumenep',
    date: 'Jun 2026 — Dec 2026',
    description: 'Solar-powered smart farming research project funded by RECLICKS (a climate finance program by the Purnomo Yusgiantoro Center) in collaboration with the FINCAPES Project, led by the University of Waterloo, Canada, and funded by the Government of Canada.',
    responsibilities: [
      'Working as a Backend Developer bridging IoT systems with core software to ensure seamless data integration for the end-user application',
      'Designed and implemented backend APIs for ingesting and serving real-time sensor data from solar-powered farming infrastructure'
    ],
    tags: ['FastAPI', 'NestJS', 'Docker', 'Kubernetes', 'IoT']
  },
  {
    role: 'Research Assistant - Backend Developer',
    company: 'Building Energy Management System (BEMS) - ELPI',
    date: 'May 2026 — Oct 2026',
    description: 'Collaborative research project between the Electrical Engineering and Information Technology departments of POLINEMA, partnering with industry leader PT Pelayaran Nasional Ekalya Purnamasari (ELPI). The project focuses on developing a smart system to monitor electrical energy consumption relative to real-time human occupancy.',
    responsibilities: [
      'Responsible for bridging and integrating the IoT systems developed by the Electrical Engineering team into a web-based user application',
      'System implemented at the ELPI Building in Tegalsari, Surabaya'
    ],
    tags: ['PostgreSQL', 'TimescaleDB', 'NestJS', 'Docker']
  },
  {
    company: 'PT Peruri Wira Timur (PERURI SECURITY PRINTING)',
    date: 'Jan 2026 — Present',
    projects: [
      {
        title: 'HR Application',
        role: 'Fullstack Developer Intern',
        date: 'Jan 2026 — Jun 2026',
        description: 'Developed and optimized a Laravel-based internal HR application to digitalize employee administrative processes, including attendance, employee agendas, and reimbursements.',
        responsibilities: [
          'Enhanced existing features and ensured the system aligns with the company\'s operational workflows',
          'Built and maintained both frontend interfaces and backend logic for the internal HR platform'
        ],
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Full Stack']
      },
      {
        title: 'PPIC/QC System',
        role: 'Backend Developer Intern',
        date: 'Jul 2026 — Present',
        description: 'Building a web-based PPIC (Production Planning and Inventory Control) and QC (Quality Control) system from scratch, transforming traditional paper-based and Excel-driven workflows into a modern, integrated digital platform.',
        responsibilities: [
          'Designed and developed backend architecture, integrating previously siloed processes into a unified web application'
        ],
        tags: ['SvelteKit', 'Bun', 'MySQL', 'Backend']
      }
    ]
  }
];
