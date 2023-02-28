import { PropsWithChildren, useCallback, useMemo, useReducer } from "react";
import LoadingContext from "./LoadingContext";
import loadingReducer, { initialState } from "./reducer/loadingReducer";
import useRouteLoading from "@/Core/hooks/useRouteLoading";

const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [{ loading }, dispatch] = useReducer(loadingReducer, initialState);
  const { loading: routeLoading } = useRouteLoading();

  const showLoading = useCallback(() => {
    dispatch({ type: "SHOW_LOADING_ACTION" });
  }, []);

  const hideLoading = useCallback(() => {
    dispatch({ type: "HIDE_LOADING_ACTION" });
  }, []);

  const value = useMemo(
    () => ({ loading: loading || routeLoading, showLoading, hideLoading }),
    [hideLoading, loading, routeLoading, showLoading]
  );

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export default LoadingProvider;
