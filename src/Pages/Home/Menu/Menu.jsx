import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../../Components/MenuItems";
import SectionTitle from "../../../Components/sectionTitle";

const Menu = () => {
  const {menu, loading} = useMenu(); 

  const popularItems = menu.filter((item) => item.category === "popular");
  console.log(menu, popularItems)

  return (
    <>
      <SectionTitle
        title={"FROM OUR MENU"}
        subtitle={"Check it out"}
      ></SectionTitle>
     {
      loading ? <h2 className="text-xl text-center">Loading</h2> :  <MenuItems items={popularItems} btnText={"View Full Menu"}></MenuItems>
     }
    </>
  );
};

export default Menu;
