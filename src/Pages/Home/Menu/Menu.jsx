import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle";
import MenuItem from "../../../Components/MenuItem";
import Button from "../../../Components/Button";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-20  max-w-screen-xl mx-auto">
      <SectionTitle
        subtitle="Check it out"
        title="FROM OUR MENU"
      ></SectionTitle>

      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-5 gap-x-16">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center">
        <Button btnText={'View Full Menu'}></Button>
      </div>
    </section>
  );
};

export default Menu;
