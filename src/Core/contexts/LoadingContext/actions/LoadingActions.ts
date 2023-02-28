interface ShowLoadingAction {
  type: "SHOW_LOADING_ACTION";
}

interface HideLoadingAction {
  type: "HIDE_LOADING_ACTION";
}

type LoadingActions = ShowLoadingAction | HideLoadingAction;

export default LoadingActions;
