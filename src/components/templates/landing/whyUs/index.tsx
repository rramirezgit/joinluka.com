import Carousel from "@/components/carousel";
import clsx from "clsx";
import lukaCSS from "@/styles/luka.module.css";
import whyUsCSS from "./whyUs.module.css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Card from "./card";
import Square from "@/components/square";
import cardsInfo from "./whyUsArray";
import { colors } from "@/theme/variables";

const WhyUs = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      className={clsx(whyUsCSS["whyus-container"], lukaCSS["flex-column"])}
      sx={{
        position: "relative",
        padding: {
          xs: "50px 50px",
          carousel: "50px 100px 0px 100px",
        },
      }}
    >
      <Box className={whyUsCSS["title-box"]}>
        <Typography
          className={whyUsCSS.title}
          sx={{
            fontSize: { xs: "28px", sm: "32px" },
            textAlign: "center",
          }}
        >
          Why Us
        </Typography>
        <Typography
          className={whyUsCSS.text}
          sx={{
            fontSize: { xs: "18px", sm: "22px" },
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          We got the experience and expertise to ease your payments capability
          so you can focus on growing your business
        </Typography>
      </Box>
      <Box
        className={whyUsCSS["small-container"]}
        sx={{
          height: {
            xs: "650px",
            md: "620px",
          },
          width: {
            xs: "100vw",
            md: "75%",
          },
          maxWidth: {
            md: "1100px",
          },
          padding: "30px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Carousel
          width="300"
          height={useMediaQuery(theme.breakpoints.down("lg")) ? "593" : "605"}
          id={"87sdfgsf-654f87gs-sdfg657sdf"}
        >
          {cardsInfo.map((card) => {
            return (
              <Card
                id={card.key}
                key={card.key}
                title={card.title}
                tags={card.tags}
                text={card.text}
                imageUrl={card.imageUrl}
              />
            );
          })}
        </Carousel>
        <Box
          sx={{
            display: {
              xs: "none",
              xl: "block",
            },
          }}
        >
          {/* <Square
            color="#5AE1E230"
            top={"-180"}
            left={"-180"}
            maxHeight={280}
            maxWidth={220}
          /> */}
        </Box>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: colors.light_blue,
            width: "130%",
            height: "260px",
            top: "30%",
            zIndex: 0,
          }}
        ></Box>
      </Box>
      {/* <Box
        sx={{
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      >
        <Square
          color="#5AE1E230"
          top={"400"}
          right={"0"}
          maxHeight={300}
          maxWidth={160}
        />
      </Box> */}
      {/* <Square
        color="#5AE1E230"
        top={"0"}
        left={"0"}
        maxHeight={180}
        maxWidth={130}
      />
      <Square
        color="#0878FF25"
        bottom={"0"}
        right={"0"}
        maxHeight={160}
        maxWidth={130}
      /> */}
    </Box>
  );
};

export default WhyUs;
