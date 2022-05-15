/// <reference types="vite/client" />
import { ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit';
import { FocusEvent, ReactNode } from 'react';
import { LongSection } from './components/fill-details/LongDetail';
import { MediumSection } from './components/fill-details/MediumDetail';
import { ShortSection } from './components/fill-details/ShortDetail';

type BlurEvent = FocusEvent<HTMLInputElement>;
type AllActions = LongSection | MediumSection | ShortSection | 'references';

interface Desc {
  heading?: string;
  placeholder?: string;
  contents: string[];
}

// <actions>
interface StringValueAction {
  id: string;
  content: string;
}
interface DescContentAction {
  id: string;
  descId: number;
  content: string;
}
// <actions />

interface Ui {
  theme: string;
  spellCheck: boolean;
  screen: 'resume' | 'templates' | 'edit';
  fontSize: 'medium' | 'small' | 'large';
  listStyle: string;
  showTools: boolean;
  focused: {
    section: AllActions;
    id: string;
  };
}

interface State {
  beingUsed: boolean;
  heading: string;
}

// interface ExperienceState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }

interface AchievementState extends State {
  data: {
    [id: string]: {
      primary: string;
      when: string;
      description: string;
    };
  };
  order: [string];
}

// interface EducationState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }

interface LongDetailState extends State {
  data: {
    [id: string]: {
      primary: string;
      secondary?: string;
      from: string;
      to: string;
      location?: string;
      description: { heading: string; contents: string[] };
    };
  };
  order: [string];
}

interface SkillState extends State {
  data: [
    {
      type: string;
      value: 1 | 2 | 3 | 4 | 5;
    }
  ];
}

interface ReferenceState extends State {
  data: [
    {
      person: string;
      contact: string;
    }
  ];
}

// interface ShortDetail {
//   heading: string;
//   placeholder: string;
// }

// interface FromToLocation {
//   id: string;
//   from: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   to: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   location: {
//     content: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
// }

// interface LongDetail {
//   id: string;
//   primary: {
//     heading: string;
//     placeholder: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   secondary: {
//     heading: string;
//     placeholder: string;
//     change: ActionCreatorWithPayload<StringValueAction, string>;
//   };
//   description: {
//     heading: string;
//     placeholder: string;
//     contents: string[];
//     setHeading: ActionCreatorWithPayload<StringValueAction, string>;
//     setContent: ActionCreatorWithPayload<DescContentAction, string>;
//     create: ActionCreatorWithPayload<{ id: string }, string>;
//   };
//   periodAndLocation: ReactNode;
// }

// interface MediumDetail {
//   description: Desc;
// }

interface MediumDetailState extends State {
  data: {
    [id: string]: {
      primary: string;
      when: string;
      description: string;
    };
  };
  order: [string];
}

// interface LanguageState extends State {
//   data: [
//     {
//       type: string;
//       value: 1 | 2 | 3 | 4 | 5;
//     }
//   ];
// }

interface ShortDeatilState extends State {
  data: {
    type: string;
    value: 1 | 2 | 3 | 4 | 5;
  }[];
}

// interface AwardState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       when: string;
//       description: string;
//     };
//   };
//   order: [string];
// }

// interface VolunteerState extends State {
//   data: {
//     [id: string]: {
//       primary: string;
//       secondary: string;
//       from: string;
//       to: string;
//       location: string;
//       description: { heading: string; contents: string[] };
//     };
//   };
//   order: [string];
// }
