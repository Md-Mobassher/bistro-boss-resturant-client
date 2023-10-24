import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import LatestNews from "../LatestNews/LatestNews";
import Menu from "../Menu/Menu";
import Recommends from "../Recommend/Recommends";
import Testimonial from "../Testimonial/Testimonial";

import { Helmet } from "react-helmet-async";
import RaiyanRestaurant from "../RaiyanRestaurant/RaiyanRestaurant";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Raiyan Restaurant | Home</title>
        </Helmet>
            <Banner />
            <Category />
            <RaiyanRestaurant />
            <Menu />
            <CallUs />
            <Recommends />
            <LatestNews />
            <Testimonial />
        </>
    );
};

export default Home;