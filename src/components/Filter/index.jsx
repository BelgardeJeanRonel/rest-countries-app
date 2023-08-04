import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { selectRegion } from "../../actions/actions";

const regions = [
  "Filter by Region",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export function Filter() {
  const currentRegion = useSelector((state) => state.regionValue);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectRegion(e.target.value));
  };
  return (
    <div className="filter">
      <select
        className={theme === "dark" ? "regions dark-mode" : "regions"}
        onChange={handleChange}
        value={currentRegion}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}
