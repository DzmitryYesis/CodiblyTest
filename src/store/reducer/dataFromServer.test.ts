import dataFromServer, {
  setDataFromServer,
  setDetailInfo,
  setFilterData,
} from 'store/reducer/dataFromServer';
import { TReducersDataFromServerType, TResponseDataType } from 'types';

let startState: TReducersDataFromServerType;

beforeEach(() => {
  startState = {
    data: [] as TResponseDataType[],
    dataForDetail: {} as TResponseDataType,
    filterData: {} as TResponseDataType,
  };
});

describe('unit-tests for dataFromServerSlice', () => {
  test('should return true, if user get data from server and put on store', () => {
    const result = expect(
      dataFromServer(
        startState,
        setDataFromServer([
          {
            id: 1,
            name: 'cerulean',
            year: 2000,
            color: '#98B2D1',
            pantone_value: '15-4020',
          },
          {
            id: 2,
            name: 'fuchsia rose',
            year: 2001,
            color: '#C74375',
            pantone_value: '17-2031',
          },
          {
            id: 3,
            name: 'true red',
            year: 2002,
            color: '#BF1932',
            pantone_value: '19-1664',
          },
          {
            id: 4,
            name: 'aqua sky',
            year: 2003,
            color: '#7BC4C4',
            pantone_value: '14-4811',
          },
          {
            id: 5,
            name: 'tigerlily',
            year: 2004,
            color: '#E2583E',
            pantone_value: '17-1456',
          },
        ]),
      ),
    );
    result.toEqual({
      data: [
        {
          id: 1,
          name: 'cerulean',
          year: 2000,
          color: '#98B2D1',
          pantone_value: '15-4020',
        },
        {
          id: 2,
          name: 'fuchsia rose',
          year: 2001,
          color: '#C74375',
          pantone_value: '17-2031',
        },
        {
          id: 3,
          name: 'true red',
          year: 2002,
          color: '#BF1932',
          pantone_value: '19-1664',
        },
        {
          id: 4,
          name: 'aqua sky',
          year: 2003,
          color: '#7BC4C4',
          pantone_value: '14-4811',
        },
        {
          id: 5,
          name: 'tigerlily',
          year: 2004,
          color: '#E2583E',
          pantone_value: '17-1456',
        },
      ],
      dataForDetail: {},
      filterData: {},
    });
  });

  test('should return true, if user get data from server filtered by ID', () => {
    const result = expect(
      dataFromServer(
        startState,
        setFilterData({
          id: 5,
          name: 'tigerlily',
          year: 2004,
          color: '#E2583E',
          pantone_value: '17-1456',
        }),
      ),
    );
    result.toEqual({
      data: [],
      dataForDetail: {},
      filterData: {
        id: 5,
        name: 'tigerlily',
        year: 2004,
        color: '#E2583E',
        pantone_value: '17-1456',
      },
    });
  });

  test('should return true, if user choose data for detail information', () => {
    const result = expect(
      dataFromServer(
        startState,
        setDetailInfo({
          id: 3,
          name: 'true red',
          year: 2002,
          color: '#BF1932',
          pantone_value: '19-1664',
        }),
      ),
    );
    result.toEqual({
      data: [],
      dataForDetail: {
        id: 3,
        name: 'true red',
        year: 2002,
        color: '#BF1932',
        pantone_value: '19-1664',
      },
      filterData: {},
    });
  });
});
