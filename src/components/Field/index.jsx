import { useDispatch, useSelector } from "react-redux";
import iconSearch from "../../assets/images/search.png";
import "./style.scss";
import { inputCountry } from "../../actions/actions";

export function Field() {
  const valueInput = useSelector((state) => state.inputCountry);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputCountry(e.target.value));
  };
  return (
    <div className={theme === "dark" ? "field dark-mode" : " field"}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={valueInput}
        onChange={handleChange}
        className={theme === "dark" ? "dark-mode" : ""}
      />
      <img src={iconSearch} alt="Search" />
    </div>
  );
}
