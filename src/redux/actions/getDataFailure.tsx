export const GET_DATA_ITEMS_FAILURE = 'GET_DATA_ITEMS_FAILURE';

interface GetDataItemsFailureAction {
  type: typeof GET_DATA_ITEMS_FAILURE;
  payload: {
    errors: string[];
  };
}

export const getDataItemsFailure = (errors: string[]): GetDataItemsFailureAction => ({
  type: GET_DATA_ITEMS_FAILURE,
  payload: { errors },
});
