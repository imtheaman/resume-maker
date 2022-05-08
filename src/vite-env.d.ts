/// <reference types="vite/client" />
interface Period {
  month: number;
  year: number;
}

interface Desc {
  heading?: string;
  placeholder?: string;
  contents: string[];
}

interface LongDetail {}

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
  data: [
    {
      position: string;
      company: string;
      from: Period;
      to: Period;
      location: string;
      description: { heading: string; placeholder: string; contents: string[] };
    }
  ];
}

interface AchievementState extends State {
  data: [
    {
      achievement: string;
      when: Period;
      description: string;
    }
  ];
}

interface EducationState extends State {
  data: [
    {
      course: string;
      institute: string;
      from: Period;
      to: Period;
      description: { heading: string; placeholder: string; contents: string[] };
    }
  ];
}

interface ProjectState extends State {
  data: [
    {
      project: string;
      from: Period;
      to: Period;
      description: { heading: string; placeholder: string; contents: string[] };
    }
  ];
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
  data: [
    {
      publication: string;
      description: string;
    }
  ];
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
  data: [
    {
      award: string;
      when: Period;
      description: string;
    }
  ];
}

interface OrganizationState extends State {
  data: [
    {
      organization: string;
      from: Period;
      to: Period;
      description: string;
    }
  ];
}

interface VolunteerState extends State {
  data: [
    {
      company: string;
      from: Period;
      to: Period;
      description: string;
    }
  ];
}
