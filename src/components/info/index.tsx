import { Box, Button, List, Typography } from "@mui/material";
import Tags from "@/components/tags";
import CustomListItem from "./CustomListItem";
import style from "./info.module.css";

interface InfoProps {
  textList: string[];
  tags?: string[];
  subtitle?: string;
  titleBlue: string;
  subtitleBlue?: string;
  title: string;
  button?: {
    text: string;
    color: any;
    variant: "contained" | "outlined";
    onclick: () => void;
    sx?: any;
  } | null;
  size?: {
    xs: string;
    lg: string;
    xl: string;
  };
}

const Info = ({
  textList,
  tags = [],
  titleBlue,
  title,
  subtitleBlue,
  subtitle = "",
  button = null,
  size,
}: InfoProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: size,
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginBottom: "10px",
          flexDirection: "column",
        }}
      >
        <Typography
          classes={{
            root: style.title,
          }}
          sx={{
            fontSize: { xs: "28px", sm: "32px" },
            marginBottom: '-8px !important'
          }}
        >
          {title}
        </Typography>
        <Typography
          classes={{
            root: style["title-blue"],
          }}
          sx={{
            fontSize: { xs: "28px", sm: "32px" },
          }}
        >
          {titleBlue}
        </Typography>
        <Typography
          classes={{
            root: style["subtitle-blue"],
          }}
          sx={{
            fontSize: { xs: "18px", sm: "22px" },
          }}
        >
          {subtitleBlue}
        </Typography>
      </Box>
      {subtitle.length > 0 && (
        <Typography
          classes={{
            root: style.subtitle,
          }}
        >
          {subtitle}
        </Typography>
      )}

      <List
        sx={{
          marginTop: "25px",
        }}
      >
        {textList.map((text, index) => (
          <CustomListItem key={index} text={text} />
        ))}
      </List>
      {tags.length > 0 && <Tags tags={tags} />}
      {button && (
        <Button
          sx={{
            ...button.sx,
            marginTop: "30px",
          }}
          color={button.color}
          variant={button.variant}
          onClick={button.onclick}
        >
          {button.text}
        </Button>
      )}
    </Box>
  );
};

export default Info;
