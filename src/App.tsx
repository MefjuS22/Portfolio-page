import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { data } from "data/NavbarData";

function App() {
  const routes = data.map((route, index) => (
    <Route 
    key={route.text}
    path={route.to} 
    element={route.element} />
  ))
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {routes}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
