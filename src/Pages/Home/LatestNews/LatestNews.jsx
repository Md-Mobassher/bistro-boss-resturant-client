import Button from "../../../Components/Button";
import SectionTitle from "../../../Components/SectionTitle";
import newsImg from "../../../assets/home/featured.jpg";

const LatestNews = () => {
    const customStyle = {
        color:'black',
        background: 'white',
      };

  return (
    <section
      className="hero bg-fixed text-white mb-20 bg-cover "
      style={{ backgroundImage: `url(${newsImg})` }}
    >
      <div className="hero-overlay bg-opacity-70 bg-[#151515B2]"></div>

      <div className="lg:px-20 mt-10">
        <SectionTitle
          subtitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="lg:flex  gap-20 pb-20  justify-center items-center px-5">
          <img className="lg:w-1/2 " src={newsImg} alt="" />
          <div className="mt-8 ">
            <h3 className="text-xl font-semibold">March 20, 2023</h3>
            <h3 className="text-lg font-semibold my-2">
              WHERE CAN I GET SOME?
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button style={customStyle}>Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
