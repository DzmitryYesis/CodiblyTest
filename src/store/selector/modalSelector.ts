import { RootState } from 'store/store';

export const getModalStatus = (state: RootState): boolean => state.modal.modalOpen;
