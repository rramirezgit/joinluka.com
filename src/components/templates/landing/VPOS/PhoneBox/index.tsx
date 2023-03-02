import { Box } from "@mui/material";
import vposPhone from "@/assets/vpos/vpos-phone.svg";
import wifi from "@/assets/vpos/wifi.svg";
import Image from "next/image";

const PhoneBox = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        component={"figure"}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={vposPhone} alt={"Demo"} style={{ maxWidth: "100%" }} />
      </Box>
      <Box
        component={"figure"}
        sx={{
          position: "absolute",
          right: "43%",
          top: "-7%",
          width: "15%",
        }}
      >
        <Image src={wifi} alt={"Demo"} style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
};

export default PhoneBox;
