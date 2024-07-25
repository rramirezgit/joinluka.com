import TextAndImg from "@/components/layaouts/TextAndImg";
import Info from "@/components/info";
import style from "./gateway.module.css";
import { Button } from "@mui/material";
import Square from "@/components/square";
import { Box } from "@mui/system";
import cardsArray from "../ourProducts/ourProductsArray";
import img from "@/assets/gateway/gateway.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Gateway = (): JSX.Element => {
  const rouuter = useRouter();
  const handleClick = (): void => {
    rouuter.push("/demo-gateway");
  };
  return (
    <Box position={"relative"} id={cardsArray[0].id}>
      <TextAndImg
        className={style.layout}
        heightSx={{
          xs: "auto",
          lg: "989px",
        }}
        flDirectionSx="column"
        sxOne={{
          padding: {
            xs: "0px 0px 0px",
            lg: "0px 30px 0px 0px",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Info
          textList={[
            "Integrate in minutes with our robust APIs",
            "Process multi-currency payments with multiple methods",
            "Customize the gateway's look and feel to match your brand",
            "Manage transactions easily with our web control panel",
          ]}
          titleBlue="Gateway"
          title="Multi-Solution"
          subtitleBlue="Making payments seamless, your way!"
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
            lg: "570px",
            xl: "570px",
          }}
        />
        <Image src={img} alt="paymentLink" className={style.img} />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            margin: "20px 0px 0px",
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
      </TextAndImg>
      <Square
        color="#5AE1E230"
        bottom={"0"}
        left={"0"}
        maxHeight={160}
        maxWidth={130}
      />
      <Square
        color="#0878FF20"
        top={"0"}
        right={"0"}
        maxHeight={140}
        maxWidth={120}
      />
    </Box>
  );
};

export default Gateway;
