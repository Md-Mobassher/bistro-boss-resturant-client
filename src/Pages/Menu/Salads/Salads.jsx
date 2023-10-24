import Cover from "../../../Components/Cover";
import MenuItems from "../../../Components/MenuItems";

import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";

const Salads = () => {
  const { loading, menu } = useMenu();
  const salads = menu.filter((item) => item.category === "salad");

  return (
    <>
      <Cover
        bgImg={saladImg}
        title={"SALADS"}
        details={
          "Indulge in our heavenly selection of artisanal desserts, meticulously crafted to tantalize your taste buds. From our signature velvety cheesecakes to our decadent chocolate delicacies, each dessert at Raiyan promises a blissful symphony of flavors, leaving you craving for more."
        }
      ></Cover>

      {loading ? (
        <h2>Loading</h2>
      ) : (
        <MenuItems
          items={salads}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItems>
      )}
    </>
  );
};

export default Salads;
