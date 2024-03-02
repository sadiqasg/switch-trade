import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  // const newArrivalData = products.filter(
  //   (item) => item.category === "mobile" || item.category === "wireless"
  // );
  // const bestSales = products.filter((item) => item.category === "sofa");

  const newly_added = products.slice(0, 9);
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Featured Items"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="Newly Added"
        bgColor="white"
        productItems={newly_added}
      />
    </Fragment>
  );
};

export default Home;
