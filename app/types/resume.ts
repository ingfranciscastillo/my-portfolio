// JSON Resume Schema types — https://jsonresume.org/schema
export interface ResumeBasics {
  name: string;
  label: string;
  image?: string;
  email: string;
  phone?: string;
  url?: string;
  summary: string;
  location: {
    address?: string;
    postalCode?: string;
    city: string;
    countryCode?: string;
    region?: string;
  };
  profiles: Array<{
    network: string;
    username: string;
    url: string;
  }>;
}

export interface ResumeWork {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  location?: string;
}

export interface ResumeEducation {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface ResumeSkill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface ResumeProject {
  name: string;
  description: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface ResumePublication {
  name: string;
  publisher: string;
  releaseDate: string;
  url?: string;
  summary?: string;
}

export interface Resume {
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  projects: ResumeProject[];
  publications: ResumePublication[];
}
