/// <reference types="vite/client" />
import { ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit';
import { FocusEvent, ReactNode } from 'react';

export type ShortSection = 'interests' | 'languages' | 'skills' | 'references';
export type MediumSection = 'achievements' | 'awards' | 'publications';
export type LongSection =
  | 'experiences'
  | 'projects'
  | 'educations'
  | 'volunteers'
  | 'organizations';
type BlurEvent = FocusEvent<HTMLInputElement>;
type AllActions = LongSection | MediumSection | ShortSection;

interface Desc {
  heading?: string;
  placeholder?: string;
  contents: {
    [id: string]: string;
  };
}

// <actions>
interface StringValueAction {
  id: string;
  content: string;
}
interface DescContentAction {
  id: string;
  descId: string;
  content: string;
}
// <actions />

type FontFamily = 'raleway' | 'open sans' | 'inter' | 'ubuntu';
type Screen = 'resume' | 'templates' | 'edit';
type FontSize = 'medium' | 'small' | 'large';

interface Ui {
  theme: string;
  spellCheck: boolean;
  screen: Screen;
  fontSize: FontSize;
  fontFamily: FontFamily;
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
      description: {
        heading: string;
        contents: {
          [id: string]: string;
        };
      };
    };
  };
  order: [string];
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
    [id: string]: {
      type: string;
      value: string;
    };
  };
  //* new addable
  style: 'short-section-fill-dark';
  order: [string];
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

interface EditorState {
  listStyle: string;
  focused: {
    section: AllActions;
    id: string;
    descId?: string;
  } | null;
}
