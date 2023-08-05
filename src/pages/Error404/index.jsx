import { useSelector } from "react-redux";
import "./style.scss";
import { ButtonBack } from "../CountryDetails/ButtonBack/ButtonBack";

export function Error() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme === "dark" ? "error dark-mode" : "error"}>
      <div className="e404">404</div>
      <p className="text">
        It looks like the page you are looking for does not exist.
      </p>
      <ButtonBack />
    </div>
  );
}
