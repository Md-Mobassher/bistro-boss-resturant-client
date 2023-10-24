import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover";

import shopbgImg from "../../../assets/shop/banner2.jpg"
import ShopItems from "../ShopItems";

const Shop = () => {
    return (
        <>
            <Helmet>
                <title>Raiyan Restaurant | Shop</title>
            </Helmet>
            <Cover bgImg={shopbgImg} title={"OUR SHOP"} subTitle={"Would you like to try a dish?"}/>

                <ShopItems />
        
        </>
    );
};

export default Shop;