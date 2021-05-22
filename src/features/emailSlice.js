import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } = emailSlice.actions;

export const selectSendMessageIsOpen = state => state.email.sendMessageIsOpen;
export const selectOpenMail = state => state.email.selectedMail;

export default emailSlice.reducer;
