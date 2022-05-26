import { PayloadAction } from '@reduxjs/toolkit';
import {
  DescContentAction,
  LongDetailState,
  MediumDetailState,
  ShortDetailState,
  StringValueAction,
} from '../../../vite-env';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { setFocused } from '../../editor';
export const FsetOrderDown = (
  state: any,
  action: PayloadAction<{ id: string }>
) => {
  const indextoMove = state.order.indexOf(action.payload.id);
  if (indextoMove === (state.order.length - 1)) return;
  const valueOfIndexAfter = state.order[indextoMove + 1];
  state.order[indextoMove] = valueOfIndexAfter;
  state.order[indextoMove + 1] = action.payload.id;
};

export const Fdelete = (
  state: any,
  action: PayloadAction<{ id: string; descId?: string }>
) => {
  if (action.payload.descId) {
    delete state.data[action.payload.id].description.contents[
      action.payload.descId
    ];
  } else {
    const order = state.order;
    order.splice(order.indexOf(action.payload.id), 1);
    delete state.data[action.payload.id];
  }
};

export const FsetOrderUp = (
  state: any,
  action: PayloadAction<{ id: string }>
) => {
  const indextoMove = state.order.indexOf(action.payload.id);
  if (indextoMove === 0) return;
  const valueOfIndexBefore = state.order[indextoMove - 1];
  state.order[indextoMove] = valueOfIndexBefore;
  state.order[indextoMove - 1] = action.payload.id;
};

export const FsetDescContent = (
  state: any,
  action: PayloadAction<DescContentAction>
) => {
  state.data[action.payload.id].description.contents[action.payload.descId] =
    action.payload.content;
};

export const FsetType = (
  state: any,
  action: PayloadAction<{ id: string; content: string }>
) => {
  state.data[action.payload.id].type = action.payload.content;
};

export const FsetValue = (
  state: any,
  action: PayloadAction<{ id: string; content: string }>
) => {
  state.data[action.payload.id].value = action.payload.content;
};

export const FsetPrimary = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].primary = action.payload.content;
};

export const FsetSecondary = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].secondary = action.payload.content;
};

export const FsetDescHeading = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].description.heading = action.payload.content;
};

export const FsetLocation = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].location = action.payload.content;
};

export const FsetTo = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].to = action.payload.content;
};

export const FsetFrom = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].from = action.payload.content;
};

export const FsetHeading = (state: any, action: PayloadAction<string>) => {
  state.heading = action.payload;
};

export const FsetBeingUsed = (state: any, action: PayloadAction<boolean>) => {
  state.beingUsed = action.payload;
};

export const Fcreate = (
  init_value: (
    | LongDetailState
    | MediumDetailState
    | ShortDetailState
  )['data'][string]
) => {
  return (
    state: any,
    action: PayloadAction<{ id: string; descId?: string }>
  ) => {
    const id = uuid();
    if (action.payload.descId) {
      state.data[action.payload.id].description.contents[id] = '';
      // todo : focus the newly created element
    } else {
      state.order.push(id);
      state.data[id] = init_value;
    }
  };
};

export const FsetWhen = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].when = action.payload.content;
};

export const FsetDesc = (
  state: any,
  action: PayloadAction<StringValueAction>
) => {
  state.data[action.payload.id].description = action.payload.content;
};