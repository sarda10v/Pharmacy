import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
