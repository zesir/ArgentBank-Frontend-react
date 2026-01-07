import AppRouter from "@/router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer footerText="Copyright 2020 Argent Bank" />
    </BrowserRouter>
  );
}

export default App;
