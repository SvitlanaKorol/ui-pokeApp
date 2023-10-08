import { DataItem } from '../../types/types';

export const GET_DATA_ITEMS_SUCCESS = 'GET_DATA_ITEMS_SUCCESS';

interface GetDataItemsSuccessAction {
  type: typeof GET_DATA_ITEMS_SUCCESS;
  payload: DataItem[];
}

export const getDataItemsSuccess = (payload: DataItem[]): GetDataItemsSuccessAction => ({
  type: GET_DATA_ITEMS_SUCCESS,
  payload,
});
