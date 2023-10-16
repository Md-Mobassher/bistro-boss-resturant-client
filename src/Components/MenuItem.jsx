

const MenuItems = ({item}) => {
    const {name, image, recipe, price } = item

    return (
        <div className="flex gap-x-3 ">
            <img className="w-[100px]" style={{borderRadius: "0 200px 200px 200px"}} src={image} alt={name} />
            <div>
                <h4 className="uppercase font-semibold text-lg text-yellow-500">{name}-----------</h4>
                <p>{recipe}</p>
            </div>
            <h5 className="font-semibold text-lg text-yellow-500">{price}</h5>
        </div>
    );
};

export default MenuItems;