import { createSlice } from '@reduxjs/toolkit';

type TModalState = {
  modalOpen: boolean;
};

const initialState: TModalState = {
  modalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setClose(state) {
      state.modalOpen = false;
    },
    setOpen(state) {
      state.modalOpen = true;
    },
  },
});

export const { setClose, setOpen } = modalSlice.actions;

export default modalSlice.reducer;
