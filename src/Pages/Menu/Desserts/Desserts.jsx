import Cover from "../../../Components/Cover";
import MenuItems from "../../../Components/MenuItems";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";

const Desserts = () => {
  const [menu] = useMenu();
  const dessserts = menu.filter((item) => item.category === "dessert");

  return (
    <>
      <Cover
        bgImg={dessertImg}
        title={"DESSERTS"}
        details={
          "Indulge in our heavenly selection of artisanal desserts, meticulously crafted to tantalize your taste buds. From our signature velvety cheesecakes to our decadent chocolate delicacies, each dessert at Raiyan promises a blissful symphony of flavors, leaving you craving for more."
        }
      ></Cover>
      
      <MenuItems
        items={dessserts}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuItems>
    </>
  );
};

export default Desserts;
