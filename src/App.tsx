import { AuthProvider } from "@/context/AuthProvider";
import AppRouter from "@/router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer footerText="Copyright 2020 Argent Bank" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
