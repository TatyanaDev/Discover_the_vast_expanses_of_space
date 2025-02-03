import earth from "../../assets/images/earth.png";

const SpaceBackground = () => (
  <section className="space-background">
    <div className="space-background__container">
      <h1 className="space-background__title">
        Discover the vast expanses of <span>space</span>
      </h1>
      <p className="space-background__description">
        Where the possibilities are <span>endless!</span>
      </p>

      <article>
        <button className="space-background__button">Learn more</button>
        <img src={earth} alt="Earth" className="space-background__image" />
      </article>
    </div>
  </section>
);

export default SpaceBackground;
