import Creations from "../components/Creations";
import Info from "../components/Info";
import Landing from "../components/Landing";

function Home() {
  return (
    <section className="home">
      <Landing />
      <Info />
      <Creations />
    </section>
  );
}

export default Home;
