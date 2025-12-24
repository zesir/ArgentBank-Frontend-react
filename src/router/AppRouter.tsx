import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import User from "@/pages/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer footerText="Copyright 2020 Argent Bank" />
    </BrowserRouter>
  );
};

export default AppRouter;
