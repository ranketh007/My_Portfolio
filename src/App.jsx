import { useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer";
import About from "./About";
import Edu from "./Education";

function App() {
  useEffect(() => {
    if('scrollRestoration' in window.history){
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0,0)
  }, []);
  return(
    <>
    <Header />
    <main>
    <About />
    <Edu />
    </main>
    <Footer />
    </>
  );
}

export default App
