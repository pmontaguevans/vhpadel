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
import videoBackground from "./vhpadel.mp4"; // Import the video
import Gallery from "./components/Gallery";
import g1 from "./1.jpeg";
import g2 from "./2.jpeg";
import g3 from "./3.jpeg";
import g4 from "./4.jpeg";
import g5 from "./5.jpeg";
import g6 from "./6.jpeg";
import g7 from "./7.jpeg";

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
  const images = [g6, g2, g3, g5, g4, g1, g7];

  const targetRef = useRef(null);

  const scrollToContent = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <section className="full-screen-header">
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          className="video-background"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="header-content">
          <h1>
            Välkommen till <span>VH Padel</span>
          </h1>
          <h2>En av Malmös bästa padelhallar!</h2>
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
              title="MATCHi"
              content="Det går nu att boka våra banor på MATCHi. Under en period gick det att boka vidare hos PDL som drev hallen tidigare, men nu bokas allt via VH Padel. Bra att tänka på vid bokning är att minst en av spelarna måste ha MATCHi"
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
              title="KONTAKTA"
              content="Behöver du hjälp med bokning, hitta tränare, vill kontakta oss angående event, seriespel eller har kul förslag och idéer för en bättre padelupplevelse så hör mer än gärna av er!"
              imageUrl={padel2}
              reverse={false}
            />
          }
          index={2}
        />
      </div>

      <hr />

      <div className="business-section">
        <h2 className="underline-gap text-center">Företagsevent</h2>
        <p>
          <em>
            Vi har allt ni behöver för att kicka igång ert företagsevent!
            Alltifrån konferensrum, lånerack, bollar till ett skåp med dryck &
            snacks.
          </em>
          <br />
          <br />
          Planera ett företagsevent i en inspirerande och aktiv miljö där padel
          blir en del av er teamupplevelse! Oavsett om ni vill stärka
          teamkänslan, nätverka med andra företag eller bara ha en rolig dag
          tillsammans, erbjuder vi skräddarsydda lösningar för varje tillfälle.
          Kombinera spännande padelmatcher med professionellt planerade
          konferensmöjligheter och avkopplande afterwork-stunder. Våra lokaler
          och dedikerade personal ser till att ni får ett lyckat event från
          start till mål, där allt från sportaktiviteter till mat och dryck
          ingår. <br />
          Kontakta oss för att designa ert nästa event!
        </p>
      </div>

      <Gallery images={images} />
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
        <p>
          <p>
            © 2024 Skapad av{" "}
            <a
              href="https://creativeatmosphere.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Atmosphere AB
            </a>
          </p>
        </p>
        <a
          href="https://www.instagram.com/vh_padel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VH Padel på Instagram
          <FontAwesomeIcon icon={fabInstagram} />
        </a>
      </footer>
    </div>
  );
}

export default App;
