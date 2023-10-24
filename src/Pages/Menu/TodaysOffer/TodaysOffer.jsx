import MenuItems from "../../../Components/MenuItems";
import SectionTitle from "../../../Components/sectionTitle";
import useMenu from "../../../hooks/useMenu";

const TodaysOffer = () => {
  const [menu] = useMenu();
  const todaysOffer = menu.filter((item) => item.category === "offered");

  return (
    <>
      <SectionTitle
        title={"TODAY'S OFFER"}
        subtitle={"Don't miss"}
      ></SectionTitle>
      <MenuItems
        items={todaysOffer}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>
    </>
  );
};

export default TodaysOffer;
