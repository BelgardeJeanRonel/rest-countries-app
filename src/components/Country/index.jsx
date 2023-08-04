import { Link } from "react-router-dom";
import "./style.scss";
import { useSelector } from "react-redux";

export function Country(props) {

  const theme = useSelector((state) => state.theme);

  return (
    <Link className={theme === "dark" ? "card dark-mode" : "card"} to={`country/${props.name.common}`}>
      <div className="card-flag">
        <img src={props.flags.png} alt={props.name.common} />
      </div>
      <div className="card-infos">
        <h2 className="card-title">{props.name.common}</h2>
        <div className="card-stat">
          <span>Population:</span>
          <span>{props.population}</span>
        </div>
        <div className="card-stat">
          <span>Region:</span>
          <span>{props.region}</span>
        </div>
        <div className="card-stat">
          <span>Capital:</span>
          <span>{props.capital}</span>
        </div>
      </div>
    </Link>
  );
}
