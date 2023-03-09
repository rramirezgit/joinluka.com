import "./loading.module.css";

interface Props {
  size: number;
  firstColor: string;
  secondColor: string;
  border: number;
}

const Loading = ({
  size,
  firstColor,
  secondColor,
  border,
}: Props): JSX.Element => {
  const bodyStyles = document.body.style;
  if (size) {
    bodyStyles.setProperty("--size", `${size}px`);
  }
  if (firstColor) {
    bodyStyles.setProperty("--first_border_color", firstColor);
  }
  if (secondColor) {
    bodyStyles.setProperty("--second_border_color", secondColor);
  }
  if (border) {
    bodyStyles.setProperty("--border_size", `${border}px`);
  }
  return (
    <div className="loading inside">
      <div></div>
    </div>
  );
};

export default Loading;
