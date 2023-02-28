import { createContext } from "react";

export interface LoadingContext {
  loading: boolean;
  hideLoading: () => void;
  showLoading: () => void;
}

export default createContext<LoadingContext | undefined>(undefined);
