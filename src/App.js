import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/SearchPharmacies/Search";
import Pharmacies from "./Components/Pharmacies/Pharmacies";

function App() {
  return (
    <div className="App">
      <div className="header_global">
        <Header />
      </div>
      <div className="main_global">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pharmacy" element={<Pharmacies />} />
        </Routes>
      </div>
      <div className="footer_global">
        <Footer />
      </div>
    </div>
  );
}

export default App;
