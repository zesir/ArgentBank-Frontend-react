import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import User from "@/pages/User";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default AppRouter;
