import Creations from "../components/Creations";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Landing from "../components/Landing";

function Home() {
  return (
    <section className="home">
      <Landing />
      <Info />
      <Creations />
      <Footer />
    </section>
  );
}

export default Home;
