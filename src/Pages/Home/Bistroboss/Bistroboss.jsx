import bgImg from '../../../assets/home/banner.jpg'

const Bistroboss = () => {
  return (
    <section
      className="hero min-h-[600px] my-16"
      style={{
        backgroundImage:
          `url(${bgImg})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl bg-white p-16">
          <h1 className="mb-5 text-4xl font-bold text-black">BISTRO BOSS</h1>
          <p className="mb-5 text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem ratione temporibus laborum quibusdam magnam. Voluptatem exercitationem molestiae harum? Consequuntur, reiciendis. Iste quas nisi perspiciatis accusamus dolores.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Bistroboss;
