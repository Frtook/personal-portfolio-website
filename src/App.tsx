//componets
import Nabbar from "./components/Nabbar";

//pages
import Hero from "./pages/Hero";
import Working from "./pages/Working";
import Help from "./pages/Help";
import SelectedWorks from "./pages/SelectedWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nabbar />
      <Hero />
      <Working />
      <SelectedWorks />
      <Help />
      <Footer />
    </>
  );
}

export default App;
