import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./App.css";
import Header from "./component/header/header";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
