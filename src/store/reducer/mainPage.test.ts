import mainPage, {
  setIsClientError,
  setIsFocus,
  setIsServerError,
} from './mainPageState';

import { TMainPageStateType } from 'types';

let startState: TMainPageStateType;

beforeEach(() => {
  startState = {
    isClientError: false,
    isServerError: false,
    isFocus: false,
  };
});

describe('unit-test for mainPageSlice', () => {
  test('should return true, if input onFocus', () => {
    const result = expect(mainPage(startState, setIsFocus(true)));
    result.toEqual({
      isClientError: false,
      isServerError: false,
      isFocus: true,
    });
  });

  test('should return true, if input onBlur', () => {
    const result = expect(mainPage(startState, setIsFocus(false)));
    result.toEqual({
      isClientError: false,
      isServerError: false,
      isFocus: false,
    });
  });

  test('should return true, if user catch server error', () => {
    const result = expect(mainPage(startState, setIsServerError(true)));
    result.toEqual({
      isClientError: false,
      isServerError: true,
      isFocus: false,
    });
  });

  test('should return true, if user catch client error', () => {
    const result = expect(mainPage(startState, setIsClientError(true)));
    result.toEqual({
      isClientError: true,
      isServerError: false,
      isFocus: false,
    });
  });
});
