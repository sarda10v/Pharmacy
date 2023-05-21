import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="header_global">
        <Header />
      </div>
      <div className="main_global">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer_global">
        <Footer />
      </div>
    </div>
  );
}

export default App;
