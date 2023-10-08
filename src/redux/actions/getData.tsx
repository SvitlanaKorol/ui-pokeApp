export const GET_DATA_ITEMS = 'GET_DATA_ITEMS';

interface GetDataItemsAction {
  type: typeof GET_DATA_ITEMS;
}

export const getDataItems = (): GetDataItemsAction => ({
  type: GET_DATA_ITEMS,
});
