import { Link } from "react-router-dom";
import "./style.scss";
import arrowdark from "../../../assets/images/arrow-left-dark.svg";
import arrowlight from "../../../assets/images/arrow-left-ligth.svg";
import { useSelector } from "react-redux";

export function ButtonBack() {
  const theme = useSelector((state) => state.theme);

  return (
    <Link to="/">
      <button
        className={theme === "dark" ? "back dark-mode" : "back"}
      >
        <img src={theme === "dark" ? arrowlight : arrowdark} /> Back
      </button>
    </Link>
  );
}
