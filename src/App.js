import React, { useRef } from "react";
import Container from "./components/Container";
import useIntersectionObserver from "./components/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as fabInstagram } from "@fortawesome/free-brands-svg-icons";
import Box from "./components/Box";
import padel2 from "./padel2.jpg";
import "./App.css";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMaps from "./components/GoogleMaps";
import Contact from "./components/Contact";
// import logo from "./vh-padel-high-res.png";
import videoBackground from "./vhpadel.mp4"; // Import the video

const TextSection = ({ title, content, index }) => {
  const [isVisible, ref] = useIntersectionObserver();

  const slideDirection = index % 2 === 0 ? "slide-in-left" : "slide-in-right";

  return (
    <div ref={ref} className="content-section-slide">
      <h2 className={`content-text ${isVisible ? slideDirection : ""}`}>
        {title}
      </h2>
      <div className={`content-text ${isVisible ? slideDirection : ""}`}>
        {content}
      </div>
    </div>
  );
};

function App() {
  const targetRef = useRef(null);

  const scrollToContent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* <header className="sticky-header">
        <div className="header-content">
          <img src={logo} alt="VH Padel Logo" className="header-logo" />
          <a
            href="https://www.instagram.com/vhpadel/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-instagram"
          >
            <FontAwesomeIcon icon={fabInstagram} />
          </a>
          <div className="header-title">VH Padel</div>
        </div>
      </header> */}

      <section className="full-screen-header">
        <video autoPlay muted loop className="video-background">
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>
        <div className="header-content">
          <h1>
            Välkommen till <span>VH Padel</span>
          </h1>
          <h2>En av Malmöområdets bästa padelhallar!</h2>
        </div>
        <div className="scroll-down" onClick={scrollToContent}>
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </div>
      </section>

      <section className="content-section" ref={targetRef}>
        <h2>
          <span>VH Padel</span> har precis tagit över den väldigt fina
          padelhallen i västra hamnen och vi är glada att kunna välkomna nya och
          gamla spelare, företag och tävlande till oss.
        </h2>
      </section>

      <Container />
      <div className="section-container">
        <TextSection
          content={
            <Box
              title="BOKA"
              content="Det går nu att boka våra banor på MATCHi. Under en period gick det att boka vidare hos PDL som drev hallen tidigare, men nu bokas allt via VH Padel"
              imageUrl={padel2}
              reverse={false}
            />
          }
          index={0}
        />
        <TextSection
          content={
            <Box
              title="I HALLEN"
              content="Det går också bra att kontakt oss i hallen under de tider som det finns personal. Vanligast på eftermiddagar och kvällar när många spelar."
              imageUrl={padel2}
              reverse={true}
            />
          }
          index={1}
        />
        <TextSection
          content={
            <Box
              title="MATCHi"
              content="Behöver du hjälp med bokning, hitta tränare, vill kontakta oss angående event, seriespel eller har kul förslag och idéer för en bättre padelupplevelse"
              imageUrl={padel2}
              reverse={false}
            />
          }
          index={2}
        />
      </div>

      <hr />
      <div className="contact-map-container">
        <div className="contact-section">
          <Contact />
        </div>
        <div className="google-maps">
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMaps />
          </APIProvider>
        </div>
      </div>
      <footer>
        <p>Copyright © All Rights Reserved</p>
        <a
          href="https://www.instagram.com/vhpadel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
          <FontAwesomeIcon icon={fabInstagram} />
        </a>
      </footer>
    </div>
  );
}

export default App;
