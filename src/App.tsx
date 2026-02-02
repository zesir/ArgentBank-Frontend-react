import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";

import { getProfile } from "@/api/auth.api";
import { store } from "@/redux/store";
import { login, logout } from "@/redux/userSlice";

import AppRouter from "@/router/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    getProfile(token)
      .then((res) => {
        dispatch(
          login({
            token,
            ...res.body,
          }),
        );
      })
      .catch(() => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/sign-in");
      });
  }, [dispatch, navigate]);

  return (
    <>
      <Header />
      <AppRouter />
      <Footer footerText="Copyright 2020 Argent Bank" />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
