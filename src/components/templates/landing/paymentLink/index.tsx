import Info from "@/components/info";
import TextAndImg from "@/components/layaouts/TextAndImg";
import Laptop from "./laptop";
import style from "./paymentLink.module.css";
import { Button } from "@mui/material";
import Square from "@/components/square";
import cardsArray from "../ourProducts/ourProductsArray";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const PaymentLink = (): JSX.Element => {
  const router = useRouter();
  const handleClick = (): void => {
    router.push("/demo-link");
  };
  return (
    <Box position={"relative"} id={cardsArray[1].id}>
      <TextAndImg
        className={style.layout}
        heightSx={{
          xs: "auto",
          lg: "989px",
        }}
        flDirectionSx="column-reverse"
        sxTwo={{
          padding: {
            xs: "0px 0px 0px",
            lg: "0px 30px 0px 0px",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            marginTop: "30px",
            display: {
              xs: "block",
              lg: "none",
            },
            width: "198px",
            height: "48px",
            fontSize: "20px",
          }}
          onClick={handleClick}
        >
          View Demo
        </Button>

        <Laptop />

        <Info
          textList={[
            "Enable local & international payment methods and providers",
            "Use any messaging channel: SMS, WhatsApp, email, social media, or your app",
            "Simplify payment experiences for your customers",
            "Manage all payment links from one intuitive dashboard",
          ]}
          tags={["INTEGRATION VIA API", "GLOBAL REACH", "MULTIPLE USE CASES"]}
          titleBlue="Payment Link"
          title="In&Out"
          subtitleBlue="Receive and send payments with unparalleled convenience"
          button={{
            text: "View Demo",
            color: "primary_a",
            variant: "contained",
            onclick: handleClick,
            sx: {
              display: {
                xs: "none",
                lg: "block",
              },
              width: "144px",
              height: "48px",
              fontSize: "16px",
            },
          }}
          size={{
            xs: "85%",
            lg: "100%",
            xl: "570px",
          }}
        />
      </TextAndImg>
      <Square
        color="#0878FF20"
        bottom={"0"}
        right={"0"}
        maxHeight={140}
        maxWidth={120}
      />
      <Square
        color="#5AE1E230"
        top={"0"}
        left={"0"}
        maxHeight={160}
        maxWidth={130}
      />
    </Box>
  );
};

export default PaymentLink;
