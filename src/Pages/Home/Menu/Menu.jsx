import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle";
import MenuItem from "../../../Components/MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  
  return (
    <section className="mb-20  px-16">
      <SectionTitle
        subtitle="Check it out"
        title="FROM OUR MENU"
      ></SectionTitle>

      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 gap-x-16">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default Menu;
