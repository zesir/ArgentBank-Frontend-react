import type { RootState } from "@/redux/store";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn, isAuthLoading } = useSelector(
    (state: RootState) => state.user,
  );

  if (isAuthLoading) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
