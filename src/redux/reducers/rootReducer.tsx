import { combineReducers } from 'redux';
import { DataItem } from '../../types/types';
import { GET_DATA_ITEMS, GET_DATA_ITEMS_SUCCESS, GET_DATA_ITEMS_FAILURE } from '../actions';
import { formatErrors } from '../helpers';

interface DataState {
  isLoading: boolean;
  items: DataItem[];
  errors: string[];
}

interface GetDataItemsAction {
  type: typeof GET_DATA_ITEMS;
}

interface GetDataItemsSuccessAction {
  type: typeof GET_DATA_ITEMS_SUCCESS;
  payload: DataItem[];
}

interface GetDataItemsFailureAction {
  type: typeof GET_DATA_ITEMS_FAILURE;
  payload: {
    errors: string[];
  };
}

type ActionTypes = GetDataItemsAction | GetDataItemsSuccessAction | GetDataItemsFailureAction;

const initialState: DataState = {
  isLoading: false,
  items: [],
  errors: [],
};

const dataReducer = (state: DataState = initialState, action: ActionTypes): DataState => {
  switch (action.type) {
    case GET_DATA_ITEMS:
      return {
        ...state,
        isLoading: true,
        errors: [],
      };
    case GET_DATA_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case GET_DATA_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: formatErrors(action.payload.errors),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
