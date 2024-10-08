/* eslint-disable multiline-ternary */

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./ready.module.css";

interface aboutUsProps {
  aboutUs?: boolean;
}

const Ready = ({ aboutUs = false }: aboutUsProps): JSX.Element => {
  const router = useRouter();
  return (
    <Box
      className={styles.content}
      sx={{
        height: {
          xs: aboutUs ? "0" : "395px",
          md: "406px",
        },
        padding: {
          xs: "30px",
          md: "90px",
        },
      }}
    >
      {aboutUs ? (
        <>
          <Typography
            classes={{ root: styles.title }}
            sx={{
              fontSize: {
                xs: "40px",
              },
            }}
          >
            {"Let's build the future of fintech together"}
          </Typography>
          <Button
            variant={"contained"}
            onClick={() => router.push("/sales")}
            sx={{
              width: "144px",
              height: " 48px",
              fontSize: "16px",
              marginTop: "64px",
              position: "relative",
              zIndex: 99,
            }}
          >
            Contact sales
          </Button>
        </>
      ) : (
        <>
          <Typography
            classes={{ root: styles.title }}
            sx={{
              fontSize: {
                xs: "30.153px",
                md: "45px",
              },
            }}
          >
            Ready, get set, go!
          </Typography>
          <Typography
            classes={{ root: styles.subtitle }}
            sx={{
              fontSize: {
                xs: "20px",
                md: "24px",
              },
            }}
          >
            Let’s explore how we may help you or just apply online and start
            using our service in matter of minutes.
          </Typography>
          <Box
            sx={{
              marginTop: {
                xs: "10px",
              },
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: {
                xs: "10px",
                md: "40px",
              },
            }}
          >
            <Button
              variant={"contained"}
              color={"primary"}
              size={"large"}
              sx={{
                width: "144px",
                height: " 48px",
                fontSize: "16px",
              }}
              onClick={() => router.push("/sales")}
            >
              Contact sales
            </Button>
            <Button
              variant={"outlined"}
              color={"secondary"}
              size={"large"}
              sx={{
                width: "144px",
                height: " 48px",
                border: "2px solid #5AE1E2",
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "-0.02em",
                display: "none",
              }}
            >
              Apply now
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Ready;
