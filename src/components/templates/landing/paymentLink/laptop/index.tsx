import { Box } from "@mui/material";
import style from "./Laptop.module.css";

const Laptop = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          lg: "680px",
        },
        position: "relative",
      }}
    >
      <Box
        className={style.laptop}
        sx={{
          position: "relative",
          left: {
            xs: "0",
            lg: "-450px",
          },
        }}
      ></Box>
    </Box>
  );
};

export default Laptop;
