import { Box } from "@mui/material";
import vposPhone from "@/assets/vpos/iPhone1.svg";
import vposPhone2 from "@/assets/vpos/iPhone2.svg";
import wifi from "@/assets/vpos/wifi.svg";
import Image from "next/image";
import styles from "./phone.module.css";

const PhoneBox = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: 'center'
      }}
    >
      <Box
        component={"figure"}
        className={styles.phone}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Image
          src={vposPhone}
          alt={"Demo"}
          style={{
            height: "100%",
            maxHeight: "645px",
            width: "45%",
          }}
        />
        <Image
          src={vposPhone2}
          alt={"Demo2"}
          style={{
            height: "100%",
            maxHeight: "645px",
            width: "45%",
          }}
        />
        <Box component={"figure"} className={styles["phone-wifi"]}>
          <Image src={wifi} alt={"Demo"} style={{ maxWidth: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneBox;
