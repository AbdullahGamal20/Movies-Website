import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./Pages/Main.jsx/Main";
import HeaderBar from "./Pages/Header/Header";
import Banner from "./Pages/Banner/Banner";
import BackToTopBtn from "./Components/BackToTopBtn";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Banner />
      <Main />
      <BackToTopBtn />
    </div>
  );
}

export default App;
