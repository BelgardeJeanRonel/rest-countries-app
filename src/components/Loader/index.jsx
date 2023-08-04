import { useSelector } from "react-redux";
import "./style.scss";

export function Loader() {

  const theme = useSelector((state) => state.theme);

  return <div className={theme === "dark" ? "spinner dark-mode" : "spinner"}></div>;
}
