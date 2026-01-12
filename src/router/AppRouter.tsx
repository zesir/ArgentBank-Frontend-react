import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Transaction from "@/pages/Transaction";
import User from "@/pages/User";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
};

export default AppRouter;
