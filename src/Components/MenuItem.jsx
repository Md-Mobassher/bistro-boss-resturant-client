

const MenuItem = ({item , style}) => {
    const {name, image, recipe, price } = item

    return (
        <div style={style} className="flex gap-x-3 mt-5">
            <img className="lg:w-[150px] lg:h-[120px] w-[100px] h-[100px]" style={{borderRadius: "0 50px 50px 50px"}} src={image} alt={name} />
            <div>
                <h4 className="uppercase font-semibold text-lg text-yellow-500">{name}-----------</h4>
                <p>{recipe}</p>
            </div>
            <h5 className="font-semibold text-lg text-yellow-500">{price}</h5>
        </div>
    );
};

export default MenuItem;