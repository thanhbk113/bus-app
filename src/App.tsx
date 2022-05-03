import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyTicket from "./pages/buyTicket/BuyTicket";
import HistoryBuy from "./components/historyBuy/HistoryBuy";
import TutorialBus from "./components/tutorialBus/TutorialBus";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veChungToi" element={<AboutUs />} />
          <Route path="/muave" element={<BuyTicket />} />
          <Route path="/xemlichsu" element={<HistoryBuy />} />
          <Route path="/huongdan" element={<TutorialBus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
