import Home from "./components/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header/> 
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
