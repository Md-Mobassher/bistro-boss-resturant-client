import Banner from "../Banner/Banner";
import Bistroboss from "../Bistroboss/Bistroboss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import LatestNews from "../LatestNews/LatestNews";
import Menu from "../Menu/Menu";
import Recommends from "../Recommend/Recommends";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <Bistroboss />
            <Menu />
            <CallUs />
            <Recommends />
            <LatestNews />
            <Testimonial />
        </>
    );
};

export default Home;