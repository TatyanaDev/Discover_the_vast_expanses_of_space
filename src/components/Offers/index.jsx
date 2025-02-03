import offersData from "../../constant/offersData";

const Offers = () => (
  <section className="offers">
    <div className="offers__container">
      <h2 className="offers__title">Offers</h2>

      <div className="offers__grid">
        {offersData.map((offer, index) => (
          <article className="offers__card" key={index}>
            <h3 className="offers__card-title">{offer.title}</h3>
            <p className="offers__card-description">{offer.description}</p>
            <button className="offers__card-button">Learn more</button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Offers;
