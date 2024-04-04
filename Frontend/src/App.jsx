import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Home/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
