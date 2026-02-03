import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Transaction from "@/pages/Transaction";
import UserContainer from "@/pages/User/UserContainer";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserContainer />
          </PrivateRoute>
        }
      />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
};

export default AppRouter;
