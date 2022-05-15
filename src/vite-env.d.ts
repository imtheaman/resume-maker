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
  focused: {
    section: AllActions;
    id: string;
  };
}

interface State {
  beingUsed: boolean;
  heading: string;
}

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

interface ShortDeatilState extends State {
  data: {
    type: string;
    value: 1 | 2 | 3 | 4 | 5;
  }[];
}

interface ProfileState {
  profilePic: string;
  name: string;
  intro: string;
  socials: {
    github: `https://github.com/${string}`;
    linkedin: `https://linkedin.com/in/${string}`;
    stackoverflow: `https://stackoverflow.com/users/${string}`;
    medium: `https://medium.com/@${string}`;
    reddit: `https://reddit.com/user/${string}`;
    connect: string;
    email: string;
    phone: string;
  };
}
