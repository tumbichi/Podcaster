interface ShowLoadingAction {
  type: "SHOW_LOADING_ACTION";
}

interface HideLoadingAction {
  type: "HIDE_LOADING_ACTION";
}

type LoadingAction = ShowLoadingAction | HideLoadingAction;

export default LoadingAction;
