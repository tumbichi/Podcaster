import LoadingAction from "../actions/LoadingAction";

interface LoadingState {
  loading: boolean;
}

export const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action: LoadingAction): LoadingState => {
  switch (action.type) {
    case "SHOW_LOADING_ACTION": {
      return {
        loading: true,
      };
    }
    case "HIDE_LOADING_ACTION": {
      return {
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default loadingReducer;
