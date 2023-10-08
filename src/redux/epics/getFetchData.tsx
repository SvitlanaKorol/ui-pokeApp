import { getDataItems, getDataItemsSuccess, getDataItemsFailure } from '../actions';
import { fetchDataFromApi } from '../../api/getData';
import { Dispatch } from 'redux';

export const getFetchData = () => async (dispatch: Dispatch) => {
  try {
    const apiData = await fetchDataFromApi('pokemon');
    dispatch(getDataItems());
    dispatch(getDataItemsSuccess(apiData));
  } catch (error) {
    const errorWithMessage = error as Error;
    const errorMessages = [errorWithMessage.message];
    dispatch(getDataItemsFailure(errorMessages));
  }
};
