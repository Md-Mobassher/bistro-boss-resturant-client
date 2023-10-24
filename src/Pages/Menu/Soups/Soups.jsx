import Cover from "../../../Components/Cover";
import MenuItems from "../../../Components/MenuItems";

import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";

const Soups = () => {
  const { loading, menu } = useMenu();
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <>
      <Cover
        bgImg={soupImg}
        title={"Soups"}
        details={
          "Indulge in our heavenly selection of artisanal desserts, meticulously crafted to tantalize your taste buds. From our signature velvety cheesecakes to our decadent chocolate delicacies, each dessert at Raiyan promises a blissful symphony of flavors, leaving you craving for more."
        }
      ></Cover>

      {loading ? (
        <h2>Loading</h2>
      ) : (
        <MenuItems
          items={soups}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItems>
      )}
    </>
  );
};

export default Soups;
