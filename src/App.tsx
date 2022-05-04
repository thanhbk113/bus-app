import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyTicket from "./pages/buyTicket/BuyTicket";
import HistoryBuy from "./components/historyBuy/HistoryBuy";
import TutorialBus from "./components/tutorialBus/TutorialBus";
import Login from "./pages/login/Login";
import RequiredAuth from "./components/requirelayout/RequiredAuth";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/veChungToi" element={<AboutUs />} />
          <Route
            path="/muave"
            element={
              <RequiredAuth>
                <BuyTicket />
              </RequiredAuth>
            }
          />
          <Route
            path="/xemlichsu"
            element={
              <RequiredAuth>
                <HistoryBuy />
              </RequiredAuth>
            }
          />
          <Route
            path="/huongdan"
            element={
              <RequiredAuth>
                <TutorialBus />
              </RequiredAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
