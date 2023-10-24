import Cover from "../../../Components/Cover";
import MenuItems from "../../../Components/MenuItems";

import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../hooks/useMenu";

const Pizza = () => {
  const { loading, menu } = useMenu();
  const pizzas = menu.filter((item) => item.category === "pizza");

  return (
    <>
      <Cover
        bgImg={pizzaImg}
        title={"PIZZA"}
        details={
          "Indulge in our heavenly selection of artisanal desserts, meticulously crafted to tantalize your taste buds. From our signature velvety cheesecakes to our decadent chocolate delicacies, each dessert at Raiyan promises a blissful symphony of flavors, leaving you craving for more."
        }
      ></Cover>

      {loading ? (
        <h2>Loading</h2>
      ) : (
        <MenuItems
          items={pizzas}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
        ></MenuItems>
      )}
    </>
  );
};

export default Pizza;
