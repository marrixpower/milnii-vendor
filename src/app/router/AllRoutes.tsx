import { Service } from "features/index";
import { AddVendor } from "pages/add-vendor";
import { ForgotPassword } from "pages/forgor-password";
import { Login } from "pages/login";
import { PreviewVendor } from "pages/preview-vendor";
import { SignUp } from "pages/sign-up";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { LINKS } from "shared/enums";

export const AllRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = async () => {
    const token = await Service.Firebase.getToken();

    if (token) {
      return null;
    }

    if (location.pathname == LINKS.registration) {
      return null;
    }

    navigate(LINKS.login);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route path={LINKS.login} element={<Login />} />
      <Route path={LINKS.forgot_password} element={<ForgotPassword />} />
      <Route path={LINKS.registration} element={<SignUp />} />

      <Route path={LINKS.base_url}>
        <Route path={LINKS.add_vendor} element={<AddVendor />} />
        <Route
          path={`${LINKS.preview_vendor}/:id`}
          element={<PreviewVendor />}
        />
      </Route>
    </Routes>
  );
};
