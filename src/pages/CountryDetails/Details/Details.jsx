import { useSelector } from "react-redux";
import {
  getKey,
  getObjectValues,
  isObjectKeyExist,
} from "../../../utils/functions/functions";

import "./style.scss";

export function Details(props) {
  const theme = useSelector((state) => state.theme);


  return (
    <div className={theme === "dark" ? "details dark-mode" : "details"}>
      <div className="card-flag">
        <img src={props.flags.png} alt={props.name.common} />
      </div>
      <div className="container-infos">
        <div className="card-infos">
          <div>
            <h2 className="card-title">{props.name.common}</h2>
            <div className="card-stat">
              <span>Native Name:</span>
              <span>{props.altSpellings[1]}</span>
            </div>
            <div className="card-stat">
              <span>Population:</span>
              <span>{props.population}</span>
            </div>
            <div className="card-stat">
              <span>Region:</span>
              <span>{props.region}</span>
            </div>
            <div className="card-stat">
              <span>Sub Region:</span>
              <span>{props.subregion}</span>
            </div>
            <div className="card-stat">
              <span>Capital:</span>
              <span>{props.capital}</span>
            </div>
          </div>
          <div className="level">
            <div className="card-stat top-level">
              <span>Top Level Domaine:</span>
              <span>{props.tld}</span>
            </div>
            <div className="card-stat">
              <span>Currencies:</span>
              <span>{props.currencies[getKey(props.currencies)[0]].name}</span>
            </div>
            <div className="card-stat">
              <span>Languages:</span>
              {getObjectValues(props?.languages).map((language, key) => (
                <span key={language}>
                  {`${language}`}
                  {key < getObjectValues(props.languages).length - 1
                    ? ", "
                    : ""}
                </span>
              ))}
            </div>
          </div>
        </div>
        {isObjectKeyExist(props, "borders") && (
          <h3 className="title-border">Border Countries:</h3>
        )}
        <div className="container-borders">
          {props.borders?.map((border) => (
            <div
              key={border}
              className={
                theme === "dark" ? "btn-border dark-mode" : "btn-border"
              }
            >
              {border}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
