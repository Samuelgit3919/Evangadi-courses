import { Routes, Route } from "react-router-dom";
import "./commonResource/css/styles.css";
import SectionOne from "./components/Main/SectionOne";
import SectionTwo from "./components/Main/SectionTwo";
import SectionThree from "./components/Main/SectionThree";
import SectionFour from "./components/Main/SectionFour";
import SectionFive from "./components/Main/SectionFive";
import Sectionsix from "./components/Main/Sectionsix";
import Alert from "./components/Main/Alert";
import YoutubeVideos from "./components/YoutubeVideos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Iphone from "./IphonePage/Iphone";
import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Alert />
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <Sectionsix />
              <YoutubeVideos />
            </>
          }
        />

        <Route path="/iphone" element={<Iphone />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
