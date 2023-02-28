import { useContext } from "react";
import LoadingContext from "../LoadingContext";

interface UseLoadingMethodsReturn {
  showLoading: () => void;
  hideLoading: () => void;
}

const useLoadingMethods = (): UseLoadingMethodsReturn => {
  const context = useContext(LoadingContext);

  if (context === undefined) {
    throw new Error("useLoadingState must be used within a LoadingProvider");
  }

  const { showLoading, hideLoading } = context;

  return { showLoading, hideLoading };
};

export default useLoadingMethods;
