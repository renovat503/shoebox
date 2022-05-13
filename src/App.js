import Landing from "./components/landing";
import Login from "./components/Login";
import Navigation from "./components/navigation";
import Register from "./components/Register";
import Footer from "./components/footer";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div class="contentArea">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
