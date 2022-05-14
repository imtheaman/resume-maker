import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import {
  FcreateData,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';
const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    beingUsed: false,
    heading: 'Languages',
    data: [{ type: '', value: 1 }],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createData: FcreateData,
    setValue: FsetValue,
  },
});
const { reducer: languagesReducer, actions } = languagesSlice;
export default actions;
export { languagesReducer };
