import clsx from "clsx";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import lukaCSS from "@/styles/luka.module.css";
import whatWeDoCSS from "./whatWeDo.module.css";
import whatwedo from "@/assets/whatwedo/whatwedo.svg";
import whatwedo2 from "@/assets/whatwedo/whatwedohorizontal.svg";
import Image from "next/image";

const WhatWeDo = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      className={clsx(
        whatWeDoCSS["whatwedo-container"],
        lukaCSS["flex-column"]
      )}
      sx={{
        padding: {
          xs: '110px 35px 0px 35px',
          sm: '140px 35px 0px 35px',
          sd: '130px 35px 0px 35px',
          md: '200px 35px 0px 35px',
          lg: '180px 35px 0px 35px',
          xl: '160px 35px 0px 35px'
        } ,
      }}
    >
      <Box
        className={whatWeDoCSS["whatwedo-text"]}
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: {
            xs: "column",
            sd: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          overflow: "hidden",
          maxWidth: "1335px",
          maxHeight: {
            xs: "auto",
            sd: "280px",
          },
          padding: {
            xs: "40px 30px 30px 30px",
            sd: "60px",
          },
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#010954",
        }}
      >
        <Stack
          sx={{
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "22px", lg: "32px" } }}
            className={whatWeDoCSS.title}
          >
            What do we do?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", lg: "20px" },
              maxWidth: { xs: "350px", md: "690px" },
            }}
            className={whatWeDoCSS.subtitle}
          >
            We enable your preferred payment providers through a single hub.
            Take advantage of your billing and payments services through a
            secured multichannel platform. Benefit from enhanced payment and
            billing data, analytics and reporting.
          </Typography>
        </Stack>
        <Box
          sx={{
            marginLeft: "10px",
            marginTop: { xs: "10px", sd: "0px" },
            height: { xs: "auto", sd: "250px", md: "350px" },
          }}
        >
          <Image
            src={
              useMediaQuery(theme.breakpoints.up("sd")) ? whatwedo : whatwedo2
            }
            alt="coin"
            style={{ height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
