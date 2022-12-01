import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
const initialResumeState = {
  id: 'resumeState',
  resumeState: {
    baseInfo: {
      name: '',
      mobile: '',
      email: '',
      currentLocation: {
        name: '',
        code: '',
      },
      base: null,
      city: null,
    },
    experiences: [
      {
        name: '',
        position: '',
        startTime: '',
        endTime: '',
        description: null,
      },
    ],
    projects: [
      {
        name: '',
        startTime: null,
        endTime: null,
        description: null,
      },
    ],
    educations: [
      {
        school: '',
        major: '',
        startTime: null,
        endTime: null,
        topDegree: '',
        description: null,
      },
    ],
    attachments: [
      {
        type: '',
        name: '',
        extension: '',
        size: null,
        mimeType: '',
        downloadUrl: '',
        previewUrl: null,
        resume: null,
      },
    ],
  },
};

export const resumeSlice = createSlice({
  name: 'resumeArea',
  initialState: _.cloneDeep(initialResumeState),
  reducers: {
    setInitialState: (state, { payload }) => {
      if (payload) {
        state.resumeState = _.cloneDeep(payload);
      }
    },
    setAddAnyState: (state, { payload }) => {
      console.log(payload);
      const { id, index, key, value } = payload;
      state.resumeState[id][index][key] = value;
    },
    setAnyState: (state, { payload }) => {
      const { id, key, value } = payload;
      state.resumeState[id][key] = value;
    },
    addDataItem: (state, { payload }) => {
      const { id } = payload;
      console.log(id);
      state.resumeState[id] = state.resumeState[id].concat(_.cloneDeep(initialResumeState[id][0]));
    },
    delDataItem: (state, { payload }) => {
      console.log(payload);
      const { id, idx } = payload;
      state.resumeState[id] = state.resumeState[id].filter((item, index) => index !== idx);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitialState, setAddAnyState, setAnyState, setBaseInfoState, addDataItem, delDataItem } =
  resumeSlice.actions;

export default resumeSlice.reducer;
