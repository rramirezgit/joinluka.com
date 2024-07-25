import { Box, List, ListItem, Typography } from "@mui/material";
import clsx from "clsx";
import lukaCSS from "@/styles/luka.module.css";
import integrationCSS from "./integration.module.css";
import Image from "next/image";
import int from "@/assets/integration/integration.svg";
import back from "@/assets/integration/background.svg";
import CircleIcon from "@mui/icons-material/Circle";
import CustomListItem from "@/components/info/CustomListItem";

const Integration = (): JSX.Element => {
  return (
    <Box
      className={clsx(
        integrationCSS["integration-container"],
        lukaCSS["flex-column"]
      )}
    >
      <Box
        className={integrationCSS["integration-relative-container"]}
        sx={{
          margin: "0px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          maxWidth: "1335px",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          className={integrationCSS["integration-full-container"]}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "930px",
            position: "absolute",
            top: "0px",
            left: "0px",
            padding: "0px 35px",
          }}
        >
          <Typography
            className={integrationCSS.toptitle}
            sx={{ fontSize: { xs: "22px", sm: "24px" } }}
          >
            Our solution
          </Typography>
          <Typography
            className={integrationCSS.title}
            sx={{ fontSize: { xs: "28px", sm: "32px" } }}
          >
            Introducing Luka: Your All-in-One Payment Ecosystem
          </Typography>
          <Typography
            className={integrationCSS.subtitle}
            fontWeight={500}
            sx={{ fontSize: { xs: "18px", sm: "22px" } }}
          >
            Luka offers a comprehensive payment platform tailored for SMBs like
            yours.
          </Typography>
          <Typography
            className={integrationCSS.subtitle}
            fontWeight={500}
            sx={{ fontSize: { xs: "18px", sm: "22px" } }}
            margin={"20px 0px"}
          >
            We unify billing and payment solutions, giving you:
          </Typography>
          <List sx={{ maxWidth: "600px" }}>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Centralized management of all payment methods, processors and/or
                acquirers.
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Easy setup and full customization
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Enhanced customer satisfaction
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Improved conversion rates
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Streamlined operations
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                color: "var(--gray_text_dark) !important",
                padding: "0px !important",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <CircleIcon
                sx={{
                  fontSize: "8px !important",
                  color: "var(--gray_text_dark) !important",
                  marginRight: "10px",
                  marginTop: "14px",
                }}
              />
              <Typography
                fontWeight={500}
                sx={{ fontSize: { xs: "18px", sm: "22px" } }}
              >
                Direct collection and automated reconciliation through your own
                payment accounts
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          className={integrationCSS["integration-img-container"]}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "flex-end",
            marginTop: "300px",
          }}
        >
          <Box
            className={integrationCSS["integration-img"]}
            sx={{ maxWidth: "975px" }}
          >
            <Image
              src={int}
              alt="coin"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Integration;
