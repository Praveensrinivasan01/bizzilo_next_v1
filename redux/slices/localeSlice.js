import { createSlice } from '@reduxjs/toolkit';

const initialState = { current: 'en' };

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.current = action.payload;
    },
  },
});

export const { setLocale } = localeSlice.actions;
export default localeSlice.reducer;
