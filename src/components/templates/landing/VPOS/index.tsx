import { Box, List, Typography } from "@mui/material";
import vposStyles from "./vpos.module.css";
import CustomListItem from "@/components/info/CustomListItem";
import Tags from "@/components/tags";
import PhoneBox from "./PhoneBox";
import Square from "@/components/square";
import ScrollBoxes from "./ScrollBoxes";
import cardsArray from "../ourProducts/ourProductsArray";
import MobileButtons from "@/components/mobileButtons";

const VPOS = (): JSX.Element => {
  return (
    <Box
      id={cardsArray[2].id}
      sx={{
        padding: {
          xs: "70px 0 70px 0",
          lg: "150px 0 100px 0",
        },
        width: "100%",
        position: "relative",
        cursor: "default",
      }}
    >
      <Box
        className={vposStyles.container}
        sx={{
          marginBottom: {
            xs: "40px !important",
            lg: "60px !important",
          },
          justifyContent: {
            xs: "center !important",
            lg: "space-between !important",
          },
          maxWidth: "1370px",
          padding: '0 60px'
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "480px",
              xl: "570px",
            },
            minWidth: {
              xs: "none",
              md: "400px",
              lg: "480px",
            },
            marginRight: {
              xs: "0",
              lg: "20px",
              xl: "0",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: "10px",
              flexDirection: {
                xs: "column",
                xl: "row",
              },
            }}
          >
            <Typography
              className={vposStyles["title-blue"]}
              sx={{
                fontSize: {
                  xs: "32px",
                },
              }}
            >
              VPOS
            </Typography>
            <Typography
              className={vposStyles.title}
              sx={{
                fontSize: {
                  xs: "32px",
                },
              }}
            >
              Hardware Free
            </Typography>
          </Box>
          <Typography className={vposStyles.subtitle}>
            Download, sign up, receive payments, that’s it!
          </Typography>
          <Box
            sx={{
              width: "100%",
              marginTop: "100px",
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            <PhoneBox />
          </Box>
          <List
            sx={{
              marginTop: "35px",
            }}
          >
            <CustomListItem
              text={
                "The solutions Luka offers to our current clients may support many businesses in need to simplify digital payments management, regardless of location."
              }
            />
            <CustomListItem
              text={
                "Fit for an international purpose. We are already transacting in multiple currencies and enabled international payment methods."
              }
            />
            <CustomListItem
              text={
                "Our team has a solid track record implementing and executing payment solutions in an intercontinental landscape."
              }
            />
          </List>
          <MobileButtons />
          {/* <Tags
            tags={["INTEGRATION VIA API", "GLOBAL REACH", "MULTIPLE USE CASES"]}
          /> */}
        </Box>
        <Box
          sx={{
            width: "640px",
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <PhoneBox />
        </Box>
      </Box>
      <ScrollBoxes />
      <Square
        color="#5AE1E230"
        bottom={"0"}
        left={"0"}
        maxHeight={90}
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

export default VPOS;
