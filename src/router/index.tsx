import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "@/pages";
import { Layout, ProtectedRoute } from "@/components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute element={<Layout />} />}>
          <Route path="/" element={<P.HomePage />} />
          <Route path="/profile" element={<P.ProfilePage />} />
        </Route>

        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/signup" element={<P.SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
