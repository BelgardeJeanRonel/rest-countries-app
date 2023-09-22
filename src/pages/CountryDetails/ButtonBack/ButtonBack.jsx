import { Link } from "react-router-dom";
import "./style.scss";
import arrowdark from "../../../assets/images/arrow-left-dark.svg";
import arrowlight from "../../../assets/images/arrow-left-ligth.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetField } from "../../../actions/actions";

export function ButtonBack() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Link
      to="/"
      onClick={() => {
        dispatch(resetField());
      }}
    >
      <button className={theme === "dark" ? "back dark-mode" : "back"}>
        <img src={theme === "dark" ? arrowlight : arrowdark} /> Back
      </button>
    </Link>
  );
}
