function CreationsCard({ title, image }) {
  return (
    <div className="creations__card">
      <img src={image} alt={title} className="creations__img" />
      <h4 className="creations__h4">{title}</h4>
    </div>
  );
}

export default CreationsCard;
