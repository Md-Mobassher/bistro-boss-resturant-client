import MenuItems from "../../../Components/MenuItems";
import SectionTitle from "../../../Components/SectionTitle";

import useMenu from "../../../hooks/useMenu";

const TodaysOffer = () => {
  const { loading, menu } = useMenu();
  const todaysOffer = menu.filter((item) => item.category === "offered");

  const customStyle = {
    marginTop : '-40px'
  }

  return (
    <div className="mt-16">
      <SectionTitle
        title={"TODAY'S OFFER"}
        subtitle={"Don't miss"}
      ></SectionTitle>

      {loading ? (
        <h2>Loading</h2>
      ) : (
        <MenuItems
          style={customStyle}
          items={todaysOffer}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItems>
      )}
    </div>
  );
};

export default TodaysOffer;
