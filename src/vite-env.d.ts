/// <reference types="vite/client" />
interface Period {
  month: number | null;
  year: number | null;
}

interface Desc {
  heading?: string;
  placeholder?: string;
  contents: string[];
}

interface Ui {
  theme: string;
  spellCheck: boolean;
  screen: "resume" | "templates" | "edit";
  fontSize: "medium" | "small" | "large";
  isResumeBlank: boolean;
  listStyle: string;
  focused: boolean;
  showTools: boolean;
}

interface State {
  beingUsed: boolean;
  heading: string;
}

interface ExperienceState extends State {
  data: {
    [id: string]: {
      position: string;
      company: string;
      from: Period;
      to: Period;
      location: string;
      description: { heading: string; placeholder: string; contents: string[] };
    };
  };
  order: [string];
}

interface AchievementState extends State {
  data: {
    [id: string]: {
      achievement: string;
      when: Period;
      description: string;
    };
  };
  order: [string];
}

interface EducationState extends State {
  data: {
    [id: string]: {
      course: string;
      institute: string;
      from: Period;
      to: Period;
      description: { heading: string; placeholder: string; contents: string[] };
    };
  };
  order: [string];
}

interface ProjectState extends State {
  data: {
    [id: string]: {
      project: string;
      from: Period;
      to: Period;
      description: { heading: string; placeholder: string; contents: string[] };
    };
  };
  order: [string];
}

interface SkillState extends State {
  data: [string];
}

interface ReferenceState extends State {
  data: [
    {
      person: string;
      contact: string;
    }
  ];
}

interface SectionHeading {
  content: string;
  placeholder: string;
  setSection: Function;
}

interface ShortDetail {
  heading: string;
  placeholder: string;
}

interface LongDetail {
  description: Desc;
  setSection: Function;
  section: { heading: string; placeholder: string };
}

interface MediumDetail {
  description: Desc;
}

interface PublicationState extends State {
  data: {
    [id: string]: {
      publication: string;
      description: string;
    };
  };
  order: [string];
}

interface LanguageState extends State {
  data: [
    {
      language: string;
      fluency: 1 | 2 | 3 | 4 | 5;
    }
  ];
}

interface InterestState extends State {
  data: [string];
}

interface AwardState extends State {
  data: {
    [id: string]: {
      award: string;
      when: Period;
      description: string;
    };
  };
  order: [string];
}

interface OrganizationState extends State {
  data: {
    [id: string]: {
      organization: string;
      from: Period;
      to: Period;
      description: string;
    };
  };
  order: [string];
}

interface VolunteerState extends State {
  data: {
    [id: string]: {
      company: string;
      from: Period;
      to: Period;
      description: string;
    };
  };
  order: [string];
}
