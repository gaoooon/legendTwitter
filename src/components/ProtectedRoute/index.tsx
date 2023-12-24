import { auth } from "@/firebase/config";
import { ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const user = auth.currentUser;

  if (!user) return <Navigate to="/login" />;

  return element;
};

export default ProtectedRoute;
