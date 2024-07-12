import Typography from "@mui/material/Typography";
import landing from "../landing.module.css";
import clsx from "clsx";
import Button from "@mui/material/Button";
import home from "./home.module.css";
import Box from "@mui/material/Box";
import Nav from "@/components/nav";
import Lottie from "lottie-react";
import animation from "@/assets/animation.json";

const BoxInfo = (): JSX.Element => {
  return (
    <Box
      className={home["content-info"]}
      sx={{
        padding: {
          xs: "57px 34px 0 34px",
          sm: "57px 34px 0 34px",
          md: "57px 0 0 0",
          lg: "57px 0 0 0",
        },
        width: {
          xs: '100%',
          sm: '100%',
          md: '70%'
        }
      }}
    >
      <Typography className={clsx(home.title, home.subtitle)}>
        <span className={home.subtitle2}>The multichannel</span> platform that
        unify{" "}
        <span className={home.subtitle3}>billing & payments solutions</span>
      </Typography>
      <Typography
        className={home.text}
        fontSize={{
          xs: 12,
          sm: 16,
        }}
      >
        Start accepting different payments methods for all your business
        channels
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: {
            xs: "26px",
            sm: "24px",
          },
          opacity: "0 !important",
          width: {
            xs: "144px",
          },
          height: {
            sm: "48px",
          },
          fontSize: {
            xs: "16px",
          },
          fontWeight: "600 !important",
        }}
      >
        Contact us
      </Button>
    </Box>
  );
};

const Home = (): JSX.Element => {
  return (
    <Box
      className={home.content}
      sx={{
        height: {
          xs: "796px",
          sm: "831px",
          md: "884px",
        },
      }}
    >
      <Nav ButtonColor="white" ButtonVariant="outlined" />
      <Box
        className={home.rentangles}
        sx={{
          height: {
            xs: "800px",
            sm: "762px",
            md: "851px",
          },
          backgroundSize: "cover !important",
        }}
      >
        <Box
          className={home.boxInfo}
          sx={{
            padding: {
              md: "0px 34px",
            },
          }}
        >
          <Box
            sx={{
              width: "1300px",
            }}
          >
            <BoxInfo />
          </Box>
        </Box>
        <Box className={home.boxLottie}>
          <Box
            className={home.triangle}
            sx={{
              clipPath: {
                xs: "polygon(-34% 48%, 216% 4%, 801% 39%)",
                sm: "polygon(-36% 77%, 143% -5%, 801% 67%)",
                md: "polygon(-135% 127%, 124% 3%, 146% 112%)",
                lg: "polygon(-78% 99%, 107% 1%, 135% 112%);",
                xl: "polygon(-90% 114%, 106% 2%, 138% 100%)",
              },
            }}
          ></Box>
          <Lottie
            animationData={animation}
            className={home.animation}
            loop={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
