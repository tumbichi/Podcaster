import { useContext } from "react";
import LoadingContext from "../LoadingContext";

const useLoadingState = (): boolean => {
  const context = useContext(LoadingContext);

  if (context === undefined) {
    throw new Error("useLoadingState must be used within a LoadingProvider");
  }

  return context.loading;
};

export default useLoadingState;
