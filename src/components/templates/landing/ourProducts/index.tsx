import Carousel from "@/components/carousel";
import Card from "./card";
import clsx from "clsx";
import ourProductsCSS from "./ourProducts.module.css";
import lukaCSS from "@/styles/luka.module.css";
import { Box, Typography } from "@mui/material";
import cardsArray from "./ourProductsArray";
import Square from "@/components/square";
import { randomUUID } from "crypto";

const OurProducts = (): JSX.Element => {
  const cardsInfo = cardsArray;
  return (
    <Box
      className={clsx(
        ourProductsCSS["ourproducts-container"],
        lukaCSS["flex-column"]
      )}
      sx={{
        padding: {
          xs: "50px 0",
          md: "60px 0",
        },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          margin: "0 auto",
          marginBottom: "60px",
          maxWidth: "1335px",
          padding: "0 35px",
          flexDirection: "column",
        }}
      >
        <Typography
          className={ourProductsCSS.title}
          sx={{
            fontSize: { xs: "28px", sm: "32px" },
          }}
        >
          How it works
        </Typography>
        <Typography
          className={ourProductsCSS.subtitle}
          sx={{
            marginBottom: "0px",
            fontSize: { xs: "18px", sm: "22px" },
          }}
        >
          We offer a product suite that can satisfy you business needs.
        </Typography>
        <Typography
          className={ourProductsCSS.subtitle}
          sx={{
            marginBottom: "0px",
            fontSize: { xs: "18px", sm: "22px" },
          }}
        >
          A Multi-Payment method Gateway to improve your WEB site. A SDK for
          your mobile apps. APIs for your ERP or Management software. And a
          Virtual Point of Sale for all your brick and mortar transactions.
        </Typography>
        <Typography
          className={ourProductsCSS.subtitle}
          sx={{
            fontSize: { xs: "18px", sm: "22px" },
          }}
        >
          All together in one single platform
        </Typography>
      </Box>
      <Carousel
        buttonsMargin={60}
        height="410"
        width="300"
        id={"22525-25648df2-dfsdf568s"}
      >
        {cardsInfo.map((card) => {
          return (
            <Card
              key={card.idCard}
              id={card.id}
              idCard={card.idCard}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
            />
          );
        })}
      </Carousel>
      <Square
        color="#0878FF20"
        bottom={"0"}
        right={"0"}
        maxHeight={180}
        maxWidth={120}
      />
    </Box>
  );
};

export default OurProducts;
