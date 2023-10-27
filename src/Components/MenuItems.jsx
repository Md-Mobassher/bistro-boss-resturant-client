import Button from "./Button";
import MenuItems from "./MenuItem";


const MenuSection = ({ items, btnText}) => {
  return (
    <section className="mb-20 lg:px-20 px-5">

      <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-5 gap-x-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button>{btnText}</Button>
      </div>
    </section>
  );
};

export default MenuSection;
