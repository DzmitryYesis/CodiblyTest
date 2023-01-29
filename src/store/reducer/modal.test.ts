import modal, { setClose, setOpen } from 'store/reducer/modal';
import { TModalState } from 'types';

let startState: TModalState;

beforeEach(() => {
  startState = {
    modalOpen: false,
  };
});

describe('unit-tests for modalSlice', () => {
  test('should return false, if modal closed', () => {
    const result = expect(modal(startState, setClose()));
    result.toEqual({ modalOpen: false });
  });

  test('should return true, if modal opened', () => {
    const result = expect(modal(startState, setOpen()));
    result.toEqual({ modalOpen: true });
  });
});
