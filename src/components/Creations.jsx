import data from "../helpers/cardsInfo";
import CreationsCard from "./CreationsCard";

function Creations() {
  return (
    <section className="creations">
      <div className="creations__top">
        <h3 className="creations__h3">Our creations</h3>
        <a href="/" className="creations__a">
          See all
        </a>
      </div>
      <div className="creations__gallery">
        {data.map((el) => (
          <CreationsCard image={el.img} title={el.title} key={el.title}/>
        ))}
      </div>
      <a href="/" className="creations__a creations__a--second">
        See all
      </a>
    </section>
  );
}

export default Creations;
