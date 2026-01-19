import { store } from "@/redux/store";
import AppRouter from "@/router/AppRouter";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer footerText="Copyright 2020 Argent Bank" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
