import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TodaysOffer from "../TodaysOffer/TodaysOffer";

import Desserts from "../Desserts/Desserts";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Raiyan Restaurant | Menu</title>
      </Helmet>

      <Banner></Banner>
      <TodaysOffer></TodaysOffer>
      <Desserts />
      <Pizza />
      <Salads />
      <Soups />
    </>
  );
};

export default Menu;
