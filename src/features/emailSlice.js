import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = emailSlice.actions;

export const selectSendMessageIsOpen = state => state.email.sendMessageIsOpen

export default emailSlice.reducer;
