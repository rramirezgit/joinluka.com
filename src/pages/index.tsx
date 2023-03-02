import Footer from "@/components/footer";
// import Gateway from './gateway'
// import OurProducts from './ourProducts'
// import PaymentLink from './paymentLink'
// import World from './world'
// import VPOS from './VPOS'
// import WhyUs from './whyUs'
import style from "./landing.module.css";
import { Box } from "@mui/material";
import Home from "@/components/templates/landing/home";
import OurProducts from "@/components/templates/landing/ourProducts";
import Gateway from "@/components/templates/landing/gateway";
import PaymentLink from "@/components/templates/landing/paymentLink";
import VPOS from "@/components/templates/landing/VPOS";
import WhyUs from "@/components/templates/landing/whyUs";
import World from "@/components/templates/landing/world";

const Landing = (): JSX.Element => {
  return (
    <div className={style.landing}>
      <Home />
      <OurProducts />
      <Gateway />
      <PaymentLink />
      <VPOS />
      <WhyUs />
      <World />
      <Box sx={{ padding: "310px 35px 50px 35px" }}>
        <Footer />
      </Box>
    </div>
  );
};

export default Landing;
