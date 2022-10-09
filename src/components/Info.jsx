import images from "../helpers/images";

function Info() {
  return (
    <section className="info">
      <figure className="info__figure">
        <img src={images.infoBg} alt="interactive" className="info__img" />
      </figure>
      <div className="info__content">
        <h2 className="info__h2">The leader in interactive VR</h2>
        <p className="info__p">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default Info;
