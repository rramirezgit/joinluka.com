import { Box } from "@mui/material";
import Square from "@/components/square";
import styles from "./formview.module.css";
import Image from "next/image";

interface Props {
  children: JSX.Element;
  image: string;
}

const FormView = ({ children, image }: Props): JSX.Element => {
  return (
    <Box
      className={styles.container}
      sx={{
        width: "100%",
        maxWidth: "1254px",
        padding: {
          xs: "0 70px",
          md: "0 35px",
        },
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: {
          xs: "center",
          lg: "space-between",
        },
        alignItems: {
          xs: "center",
          lg: "flex-start",
        },
      }}
    >
      <Box
        className={styles.figure}
        sx={{
          marginBottom: {
            xs: "80px",
            lg: "0",
          },
          marginLeft: {
            xs: "0",
            lg: "60px",
          },
          maxWidth: {
            xs: "400px",
            lg: "480px",
          },
          width: {
            xs: "70%",
            lg: "55%",
          },
          position: "relative",
        }}
      >
        <Image className={styles.image} src={image} alt="support" style={{ maxWidth: "100%", height: '100%' }} />
      </Box>
      <Box
        className={styles["form-container"]}
        sx={{
          width: {
            xs: "100%",
            sm: "530px",
          },
          height: {
            xs: "750px",
            sm: "850px",
          },
          padding: {
            xs: "0",
            sm: "50px",
          },
          borderRadius: {
            xs: "0",
            sm: "8px",
          },
          boxShadow: {
            xs: "none",
            sm: "5.6139px 5.6139px 13.5521px 1.80695px rgba(0, 0, 0, 0.04)",
          },
          position: "relative",
        }}
      >
        {children}
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <Square
            color="#5AE1E230"
            top={"100"}
            right={"-200"}
            maxHeight={150}
            maxWidth={200}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FormView;
