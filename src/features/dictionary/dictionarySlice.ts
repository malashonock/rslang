import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCurrentChapterPageLearned: false,
};

const currentPageLearned = createSlice({
  name: 'learnedPage',
  initialState,
  reducers: {
    setPageStatus: (state, action: { payload: boolean }) => {
      // eslint-disable-next-line no-param-reassign
      state.isCurrentChapterPageLearned = action.payload;
    },
  },
});

export const { setPageStatus } = currentPageLearned.actions;
export default currentPageLearned.reducer;
