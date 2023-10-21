import Button from "../../../Components/Button";
import SectionTitle from "../../../Components/sectionTitle";
import newsImg from "../../../assets/home/featured.jpg";

const LatestNews = () => {
  return (
    <section
      className="hero bg-fixed text-white mb-20 bg-cover "
      style={{ backgroundImage: `url(${newsImg})` }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>

      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subtitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="flex gap-20 pb-20  justify-center items-center">
          <img className="w-1/2" src={newsImg} alt="" />
          <div>
            <h3 className="text-lg font-semibold">March 20, 2023</h3>
            <h3 className="text-lg font-semibold my-2">
              WHERE CAN I GET SOME?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button btnText={"Read More"}></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
