import Cover from "../../../Components/Cover";
import menuCover from "../../../assets/menu/banner3.jpg"


const Banner = () => {
    return (
        <Cover bgImg={menuCover} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
    );
};

export default Banner;