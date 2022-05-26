/// <reference types="vite/client" />
import { ActionCreatorWithPayload, AnyAction } from '@reduxjs/toolkit';
import { FocusEvent, ReactNode } from 'react';

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

// Converts union to overloaded function
type UnionToOvlds<U> = UnionToIntersection<
  U extends any ? (f: U) => void : never
>;

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

// Finally me)
type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
  ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
  : [T, ...A];

export type ShortSection = 'interests' | 'languages' | 'skills' | 'references';
export type MediumSection = 'achievements' | 'awards' | 'publications';
export type LongSection =
  | 'experiences'
  | 'projects'
  | 'educations'
  | 'volunteers'
  | 'organizations';
export type BlurEvent = FocusEvent<HTMLInputElement>;
export type AllActions = LongSection | MediumSection | ShortSection;
// type Sections = UnionToArray<AllActions>

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

type FontFamily = 'default' | 'raleway' | 'open sans' | 'inter' | 'ubuntu'|'fira sans'|'roboto';
type Screen = 'resume' | 'templates' | 'edit';
type FontSize = 'regular' | 'medium' | 'small' | 'large';

interface Ui {
  theme: string;
  spellCheck: boolean;
  screen: Screen;
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

interface ShortDetailState extends State {
  data: {
    [id: string]: {
      type: string;
      value: string;
    };
  };
  order: [string];
}

interface ProfileState {
  profilePic: string;
  name: string;
  intro: string;
  socials: {
    github: string;
    linkedin: string;
    stackoverflow: string
    medium: string
    reddit: string
    connect: string;
    email: string;
    phone: string;
  };
}

type Social = keyof ProfileState['socials']

interface EditorState {
  focused: {
    section: AllActions;
    id: string;
    descId?: string;
  } | null;
}

type style =
  | 'short-section-fill-dark'
  | 'short-section-fill-light'
  | 'short-section-border';

interface StylesState {
  listStyle: string;
  contentStyle: string;
  skillStyle: style;
  languageStyle: style;
  interestStyle: style;
  fontSize: FontSize;
  fontFamily: FontFamily;
  layout: string[];
}

type Styles = ['interestStyle','languageStyle','listStyle', 'contentStyle', 'skillStyle']
